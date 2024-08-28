package interchain_test

import (
	"context"
	"fmt"
	"testing"
	"time"

	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	"github.com/cosmos/gaia/v20/tests/interchain/chainsuite"
	"github.com/strangelove-ventures/interchaintest/v8"
	"github.com/strangelove-ventures/interchaintest/v8/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v8/ibc"
	"github.com/stretchr/testify/suite"
)

const (
	permissionlessDepositPeriod = 10 * time.Minute
)

type PermissionlessSuite struct {
	*chainsuite.Suite
}

func (s *PermissionlessSuite) TestConsumerAdditionMigration() {
	cfg := chainsuite.ConsumerConfig{
		ChainName:             "ics-consumer",
		Version:               "v5.0.0",
		ShouldCopyProviderKey: allProviderKeysCopied(),
		Denom:                 chainsuite.Ucon,
		TopN:                  100,
		AllowInactiveVals:     true,
		MinStake:              1_000_000,
	}
	consumer, err := s.Chain.AddConsumerChain(s.GetContext(), s.Relayer, cfg)
	s.Require().NoError(err)
	err = s.Chain.CheckCCV(s.GetContext(), consumer, s.Relayer, 1_000_000, 0, 1)
	s.Require().NoError(err)

	proposals, err := s.Chain.GovQueryProposalsV1(s.GetContext(), govtypes.ProposalStatus_PROPOSAL_STATUS_PASSED)
	s.Require().NoError(err)
	s.Require().Len(proposals, 1)
	oldProposalCh1 := proposals[0]

	cfg.DuringDepositPeriod = func(ctx context.Context, consumer *cosmos.CosmosChain) {
		time.Sleep(permissionlessDepositPeriod - 1*time.Minute)
	}

	chainIDCh2 := cfg.ChainName + "-2"
	propWaiter, errCh, err := s.Chain.SubmitConsumerAdditionProposal(s.GetContext(), chainIDCh2, cfg, time.Now().Add(permissionlessDepositPeriod+2*time.Minute))
	s.Require().NoError(err)
	propWaiter.AllowDeposit()

	s.UpgradeChain()

	// check that the new is around
	chain, err := s.Chain.QueryJSON(s.GetContext(), fmt.Sprintf("chains.#(chain_id=%q)", chainIDCh2), "provider", "list-consumer-chains")
	s.Require().NoError(err)
	s.Require().True(chain.Exists())

	proposals, err = s.Chain.GovQueryProposalsV1(s.GetContext(), govtypes.ProposalStatus_PROPOSAL_STATUS_PASSED)
	s.Require().NoError(err)
	s.Require().Len(proposals, 2)
	newProposalCh1 := proposals[0]
	s.Require().Equal(oldProposalCh1, newProposalCh1)

	propWaiter.WaitForVotingPeriod()
	propWaiter.AllowVote()
	propWaiter.WaitForPassed()
	s.Require().NoError(<-errCh)

}

func TestPermissionlessLaunches(t *testing.T) {
	genesis := chainsuite.DefaultGenesis()
	genesis = append(genesis,
		cosmos.NewGenesisKV("app_state.gov.params.max_deposit_period", permissionlessDepositPeriod.String()),
	)
	s := &UnbondingSuite{
		Suite: chainsuite.NewSuite(chainsuite.SuiteConfig{
			CreateRelayer: true,
			ChainSpec: &interchaintest.ChainSpec{
				ChainConfig: ibc.ChainConfig{
					ModifyGenesis: cosmos.ModifyGenesis(genesis),
				},
			},
		}),
	}
	suite.Run(t, s)

}
