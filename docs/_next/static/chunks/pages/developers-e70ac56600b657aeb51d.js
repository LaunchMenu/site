_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{CRg7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developers",function(){return n("D/4S")}])},"D/4S":function(e,t,n){"use strict";n.r(t);var c=n("Ji2X"),i=n("q1tI"),a=n("Indg"),o=n("AeFk"),r=n("hlFM"),s=n("Z3vd"),l=n("ofer"),u=n("qorR"),d=n.n(u),m=n("8Koj"),p=n.n(m),h=n("4HzQ"),b=n.n(h),g=n("Ff27"),f=n("YFqc"),j=n.n(f),y=n("kC8x");var O={name:"10k79is",styles:"width:min(400px, 100%)"},w={name:"q5y1la",styles:"min-width:min(550px, 100%)"},v=function(e){var t=e.children;return Object(o.c)(r.a,{display:"flex",my:8,flexWrap:"wrap",css:Object(o.b)({flexDirection:"row-reverse",justifyContent:"center"},"","")},Object(o.c)(r.a,{css:O,mb:2,flexShrink:0},Object(o.c)(x,null),Object(o.c)(y.a,{css:function(e){return{alignSelf:"center",fontWeight:800,fontSize:18,marginBottom:e.spacing(2)}}},"Make it. Make it now."),Object(o.c)(j.a,{href:"#downloads"},Object(o.c)(s.a,{variant:"contained",color:"primary",startIcon:Object(o.c)(d.a,null)},"Get started")),Object(o.c)(r.a,{mt:4,mb:2},Object(o.c)(y.a,null,"Learn about all the modules available in LaunchMenu:")),Object(o.c)(j.a,{href:"/dev"},Object(o.c)(s.a,{variant:"contained",color:"default",startIcon:Object(o.c)(p.a,null),disableElevation:!0},"Api overview"))),Object(o.c)(r.a,{mr:2}),Object(o.c)(r.a,{flex:1,display:"flex",justifyContent:"center",css:w},Object(o.c)(r.a,null,t)))},x=function(){return Object(g.a)(),Object(o.c)(l.a,{variant:"h1",color:"primary",css:function(e){return{alignSelf:"center",fontSize:60,marginBottom:e.spacing(2)}}},Object(o.c)(b.a,null,"LaunchMenu Development"))},k=n("rg9q"),M=n("1fmr"),T=n("laQT"),S=n("wCtz"),I=n("wDVd"),E=function(e){var t=e.category,n=e.content,c=e.children,i=Object(M.a)({name:t});return Object(o.c)(r.a,{display:"flex",py:2,flexWrap:"wrap",css:function(e){return{marginTop:200,gap:e.spacing(2)}}},Object(o.c)(r.a,{minWidth:"fit-content",flex:1,display:"flex",justifyContent:"center"},Object(o.c)(r.a,{display:"inline-block"},n)),Object(o.c)(r.a,{flex:1,flexShrink:1,minWidth:"min(100%, 300px)",maxWidth:"500px"},Object(o.c)("section",{ref:i},Object(o.c)(S.b,{href:"#".concat(Object(T.a)(t))},Object(o.c)(I.a,null,t)),Object(o.c)(r.a,{mt:.5},c))))},P=n("wZIX"),H=n("LgGQ"),A=n("TPYD"),F=n("88CI"),B=function(e){var t=e.title,n=e.children,c=e.status,i=void 0===c?"supported":c,a=Object(M.a)({name:t});return Object(o.c)("section",{ref:a},Object(o.c)(S.b,{href:"#".concat(Object(T.a)(t))},Object(o.c)(F.a,{css:function(e){return{marginTop:e.spacing(2)}}},Object(o.c)(A.a,{status:i},t))),Object(o.c)("div",{css:function(e){return{paddingTop:e.spacing(1)}}},n))},L=n("93nM"),_=n("WYSt");t.default=function(){return Object(o.c)(c.a,null,Object(o.c)(v,null,Object(o.c)(a.a,{title:"HelloWorld.ts",code:'export const info = {\n    name: "HelloWorld",\n    description: "A minimal example applet",\n    version: "0.0.0",\n    icon: <MyIcon />,\n};\n\nexport const settings = createSettings({\n    version: "0.0.0",\n    settings: () => createSettingsFolder({ ...info, children: {\n        name: createStringSetting({name: "Username", init: "Bob"}),\n    }}),\n});\n\nconst items = [\n    createStandardMenuItem({\n        name: "Hello world",\n        onExecute: ({context}) => \n            alert(`Hello ${context.settings.get(settings).name.get()}!`)\n    }),\n];\n\nexport default declare({\n    info,\n    settings,\n    async search: (query, hook) => \n        ({ children: searchAction.get(items) })\n});',language:"tsx",source:"https://github.com/search"})),Object(o.c)(H.a,{margin:2},Object(o.c)(P.a,{title:"Super flexible",body:Object(o.c)(i.Fragment,null,"LaunchMenu consists of independent composable building blocks, allowing you to create any experience you desire. The interfaces are designed to be as flexible as possible without restricting utility.")}),Object(o.c)(P.a,{title:"Quality environment",body:Object(o.c)(i.Fragment,null,"Use common web technologies to create applets, including"," ",Object(o.c)("a",{href:"https://www.typescriptlang.org/"},"TypeScript")," ","and ",Object(o.c)("a",{href:"https://reactjs.org/"},"React"),", which increase the maintainability of your code. Given LaunchMenu is built with"," ",Object(o.c)("a",{href:"https://www.electronjs.org/"},"Electron")," your applets will be cross-platform and able to reach a larger audience.")}),Object(o.c)(P.a,{title:"Vast API",body:Object(o.c)(i.Fragment,null,"LaunchMenu contains several systems to simplify common scenarios. Applets can make use of the settings system, menus and items, context menu actions, search handlers, themed components and more.")})),Object(o.c)(k.b,null,Object(o.c)(E,{category:"Ease of development",content:Object(o.c)(i.Fragment,null)},Object(o.c)(B,{title:"Composable approach"},"LaunchMenu has been created as a set of independent building blocks. This allows for more reuse, and more customization. When no block exists for your exact use case, you can often find a block that's doing something similar to what you want and reuse functions,"," ",Object(o.c)("a",{href:"https://reactjs.org/"},"React components")," and other structures that it uses internally."),Object(o.c)(B,{title:"Developer environment"},"LaunchMenu is written in"," ",Object(o.c)("a",{href:"https://www.typescriptlang.org/"},"TypeScript")," and all methods are documented with"," ",Object(o.c)("a",{href:"https://tsdoc.org/"},"TSDoc"),". This provides excellent intellisense support in modern IDEs (e.g."," ",Object(o.c)("a",{href:"https://code.visualstudio.com/"},"VSCode"),") which helps you understand what functions are doing under the hood and how to communicate with them."),Object(o.c)(B,{title:"LaunchMenu build tools"},"LaunchMenu includes a build utility, which compiles all TypeScript and resources into LaunchMenu-ready packages. A system is also provided which auto-reloads applets as you modify them to ease testing."),Object(o.c)(B,{title:"Applet ecosystem",status:{type:"longTerm",tooltip:"We will start working on this soon"}},"Simply upload your completed applet with the keyword",Object(o.c)(_.a,{children:"launchmenu-applet"})," to NPM in order for it to load into the applet ecosystem."),Object(o.c)(B,{title:"Open source"},"This is still a developing project, and we value your input. We welcome all new suggestions and contributions! We have already been through several re-designs, and we're not afraid of rewriting code when better alternatives are discovered."))),Object(o.c)(k.b,null,Object(o.c)(E,{category:"Action system",content:Object(o.c)(i.Fragment,null,Object(o.c)(a.a,{title:"setTaskPriority.ts",code:'import { createContextAction,  singlePromptExecuteHandler, promptSelectExecuteHandler, \n    Priority, createStandardMenuItem } from "@launchmenu/core";\nimport {Field} from "model-react";\n\ntype ITaskPriority = "high" | "medium" | "low";\nexport const setTaskPriority = createContextAction({\n    name: "Set priority level",\n    contextItem: { priority: Priority.MEDIUM /* Not to be confused with ITaskPriority */ },\n    core: (fields: Field<ITaskPriority>[]) => {\n        const getExecuteBinding = () => \n            singlePromptExecuteHandler.createBinding({\n                fields, \n                valueRetriever: field=>promptSelectExecuteHandler.createBinding({\n                    field,\n                    options: ["low", "medium", "high"],\n                    createOptionView: level => createStandardMenuItem({ name: level }),\n                })\n            });\n\n        return {\n            // Return the bindings for executing the action in the menu\n            actionBindings: getExecuteBindings,\n            // As well as some result for programmatic access for extension\n            result: { getExecuteBindings },\n        };\n    },\n});',language:"tsx",source:"https://github.com/search"}),Object(o.c)(a.a,{title:"Action Usage",code:'import {createStandardMenuItem} from "@launchmenu/core";\nimport {Field} from "model-react";\nimport {setTaskPriority} from "./setTaskPriority";\n\nfunction createTaskMenuItem({name}: {name: string}) {\n    const level = new Field("medium");\n    return createStandardMenuItem({\n        name,\n        description: hook => level.get(hook),\n        actionBindings: [setTaskPriority.createBinding(level)]\n    });\n}\n\nconst items = [\n    createTaskMenuItem({name: "Meet Alice"}),\n    createTaskMenuItem({name: "Make pancakes"}),\n    createTaskMenuItem({name: "Free Hat"})\n]',language:"tsx",source:"https://github.com/search",result:Object(o.c)(L.a,{src:"/videoTest2.mp4"})}))},Object(o.c)(B,{title:"Powerful action system"},"LaunchMenu provides a generic action system. Menu items only provide functionality through their action. This includes providing items to context menus, keyboard input handling, search handling, execution handling, and even selection event handling."),Object(o.c)(B,{title:"Multiple item selection"}),Object(o.c)(B,{title:"Behavior bundling"}),Object(o.c)(B,{title:"Action extensions"}),Object(o.c)(B,{title:"Item specialization"}),Object(o.c)(B,{title:"Undo/redo integration"}))))}},qorR:function(e,t,n){"use strict";var c=n("mBgD"),i=n("ey9+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("q1tI")),o=(0,c(n("8/g6")).default)(a.createElement("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"}),"LibraryBooks");t.default=o}},[["CRg7",0,2,1,3,4,5,8]]]);