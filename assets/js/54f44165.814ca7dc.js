"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[7924],{5680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>c});var n=t(6540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),g=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=g(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=g(t),m=i,c=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?n.createElement(c,r(r({ref:a},p),{},{components:t})):n.createElement(c,r({ref:a},p))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var g=2;g<l;g++)r[g]=t[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9241:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=t(8168),i=(t(6540),t(5680));const l={title:"Installing Gaia",sidebar_position:2},r=void 0,o={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installing Gaia",description:"This guide will explain how to install the gaiad binary and run the cli. With this binary installed on a server, you can participate on the mainnet as either a Full Node or a Validator.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/main/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installing Gaia",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Gaia?",permalink:"/main/getting-started/what-is-gaia"},next:{title:"Quick Start - Join Mainnet",permalink:"/main/getting-started/quickstart"}},s={},g=[{value:"Build Requirements",id:"build-requirements",level:2},{value:"Build Tools",id:"build-tools",level:2},{value:"Install Go",id:"install-go",level:2},{value:"Install the binaries",id:"install-the-binaries",level:2},{value:"Docker",id:"docker",level:2},{value:"Static linking",id:"static-linking",level:2},{value:"Build Tags",id:"build-tags",level:3},{value:"Work with a Cosmos SDK Clone",id:"work-with-a-cosmos-sdk-clone",level:2},{value:"Next",id:"next",level:2}],p={toc:g},u="wrapper";function d(e){let{components:a,...t}=e;return(0,i.yg)(u,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This guide will explain how to install the ",(0,i.yg)("inlineCode",{parentName:"p"},"gaiad")," binary and run the cli. With this binary installed on a server, you can participate on the mainnet as either a ",(0,i.yg)("a",{parentName:"p",href:"/main/hub-tutorials/join-mainnet"},"Full Node")," or a ",(0,i.yg)("a",{parentName:"p",href:"/main/validators/validator-setup"},"Validator"),"."),(0,i.yg)("h2",{id:"build-requirements"},"Build Requirements"),(0,i.yg)("p",null,"At present, the SDK fully supports installation on linux distributions. For the purpose of this instruction set, we'll be using ",(0,i.yg)("inlineCode",{parentName:"p"},"Ubuntu 22.04 LTS"),". It is also possible to install ",(0,i.yg)("inlineCode",{parentName:"p"},"gaiad")," on Unix, while Windows may require additional unsupported third party installation. All steps are listed below for a clean install."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#build-tools"},"Update & install build tools")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#install-go"},"Install Go")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#install-the-binaries"},"Install ",(0,i.yg)("inlineCode",{parentName:"a"},"Gaiad")," binaries"))),(0,i.yg)("h2",{id:"build-tools"},"Build Tools"),(0,i.yg)("p",null,"Install ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"gcc"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Ubuntu:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n\nsudo apt install -y make gcc build-essential\n")),(0,i.yg)("h2",{id:"install-go"},"Install Go"),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Go 1.22+")," is required.")),(0,i.yg)("p",null,"We suggest the following two ways to install Go. Check out the ",(0,i.yg)("a",{parentName:"p",href:"https://golang.org/doc/install"},"official docs")," and Go installer for the correct download for your operating system. Alternatively, you can install Go yourself from the command line. Detailed below are standard default installation locations, but feel free to customize."),(0,i.yg)("p",null,"Since the introduction of CosmWasm in Gaia v18 it is recommended to build the binaries with ",(0,i.yg)("inlineCode",{parentName:"p"},"CGO")," enabled - simply set ",(0,i.yg)("inlineCode",{parentName:"p"},"CGO_ENABLED=1")," in your terminal befre building the binary."),(0,i.yg)("p",null,"Building the ",(0,i.yg)("inlineCode",{parentName:"p"},"gaiad")," binary on Windows is not supported due to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmvm"},"dependency issues"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://go.dev/dl/"},"Go Binary Downloads"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Ubuntu:")),(0,i.yg)("p",null,"At the time of this writing, the latest release is ",(0,i.yg)("inlineCode",{parentName:"p"},"1.22.3"),". We're going to download the tarball, extract it to ",(0,i.yg)("inlineCode",{parentName:"p"},"/usr/local"),", and export ",(0,i.yg)("inlineCode",{parentName:"p"},"GOROOT")," to our ",(0,i.yg)("inlineCode",{parentName:"p"},"$PATH")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"curl -OL https://go.dev/dl/go1.22.3.darwin-amd64.tar.gz\n\nsudo tar -C /usr/local -xvf https://go.dev/dl/go1.22.3.darwin-amd64.tar.gz\n\n\nexport PATH=$PATH:/usr/local/go/bin\n\n")),(0,i.yg)("p",null,"Remember to add ",(0,i.yg)("inlineCode",{parentName:"p"},"GOPATH")," to your ",(0,i.yg)("inlineCode",{parentName:"p"},"$PATH")," environment variable. If you're not sure where that is, run ",(0,i.yg)("inlineCode",{parentName:"p"},"go env GOPATH"),". This will allow us to run the ",(0,i.yg)("inlineCode",{parentName:"p"},"gaiad")," binary in the next step. If you're not sure how to set your ",(0,i.yg)("inlineCode",{parentName:"p"},"$PATH")," take a look at ",(0,i.yg)("a",{parentName:"p",href:"https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them"},"these instructions"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:$(go env GOPATH)/bin\n")),(0,i.yg)("h2",{id:"install-the-binaries"},"Install the binaries"),(0,i.yg)("p",null,"Next, let's install the latest version of Gaia. Make sure you ",(0,i.yg)("inlineCode",{parentName:"p"},"git checkout")," the\ncorrect ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases"},"released version"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"git clone -b <latest-release-tag> https://github.com/cosmos/gaia.git\ncd gaia && make install\n")),(0,i.yg)("p",null,"If this command fails due to the following error message, you might have already set ",(0,i.yg)("inlineCode",{parentName:"p"},"LDFLAGS")," prior to running this step."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"# github.com/cosmos/gaia/cmd/gaiad\nflag provided but not defined: -L\nusage: link [options] main.o\n...\nmake: *** [install] Error 2\n")),(0,i.yg)("p",null,"Unset this environment variable and try again."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'LDFLAGS="" make install\n')),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("em",{parentName:"p"},"NOTE"),": If you still have issues at this step, please check that you have the latest stable version of GO installed.")),(0,i.yg)("p",null,"That will install the ",(0,i.yg)("inlineCode",{parentName:"p"},"gaiad")," binary. Verify that everything installed successfully by running:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"gaiad version --long\n")),(0,i.yg)("p",null,"You should see something similar to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"name: gaia\nserver_name: gaiad\nversion: v18.0.0\ncommit: 682770f2410ab0d33ac7f0c7203519d7a99fa2b6\nbuild_tags: netgo,ledger,muslc\ngo: go version go1.22.3 linux/amd64\n")),(0,i.yg)("h2",{id:"docker"},"Docker"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Dockerfile")," is available in the gaia repo."),(0,i.yg)("p",null,"Building:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"git clone -b <latest-release-tag> https://github.com/cosmos/gaia.git\ncd gaia\ndocker build -t cosmos-ics:local -f Dockerfile ./\n")),(0,i.yg)("h2",{id:"static-linking"},"Static linking"),(0,i.yg)("p",null,"In case you need to build a binary with all dependencies statically linked please check our ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/blob/main/Dockerfile"},"Dockerfile"),"."),(0,i.yg)("p",null,"You must have ",(0,i.yg)("inlineCode",{parentName:"p"},"libwasmvm")," available on your machine.\nChoose the build that matches your platform and OS:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmvm?tab=readme-ov-file#builds-of-libwasmvm"},"https://github.com/CosmWasm/wasmvm?tab=readme-ov-file#builds-of-libwasmvm"))),(0,i.yg)("p",null,"For more information, please check ",(0,i.yg)("inlineCode",{parentName:"p"},"wasmvm")," ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmvm"},"documentation"),"."),(0,i.yg)("h3",{id:"build-tags"},"Build Tags"),(0,i.yg)("p",null,"Build tags indicate special features that have been enabled in the binary."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Build Tag"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"netgo"),(0,i.yg)("td",{parentName:"tr",align:null},"Name resolution will use pure Go code")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"ledger"),(0,i.yg)("td",{parentName:"tr",align:null},"Ledger devices are supported (hardware wallets)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"static_wasm/muslc"),(0,i.yg)("td",{parentName:"tr",align:null},"Used for statically linked wasmd dependencies")))),(0,i.yg)("h2",{id:"work-with-a-cosmos-sdk-clone"},"Work with a Cosmos SDK Clone"),(0,i.yg)("p",null,"To work with your own modifications of the Cosmos SDK, make a fork of this repo, and add a ",(0,i.yg)("inlineCode",{parentName:"p"},"replace")," clause to the ",(0,i.yg)("inlineCode",{parentName:"p"},"go.mod")," file.\nThe ",(0,i.yg)("inlineCode",{parentName:"p"},"replace")," clause you add to ",(0,i.yg)("inlineCode",{parentName:"p"},"go.mod")," must provide the correct import path."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"go mod edit -replace github.com/cosmos/cosmos-sdk=../cosmos-sdk\ngo mod tidy\nmake install # or make build\n")),(0,i.yg)("h2",{id:"next"},"Next"),(0,i.yg)("p",null,"Now you can ",(0,i.yg)("a",{parentName:"p",href:"../hub-tutorials/join-mainnet"},"join the mainnet"),", ",(0,i.yg)("a",{parentName:"p",href:"../hub-tutorials/join-testnet"},"the public testnet"),"."))}d.isMDXComponent=!0}}]);