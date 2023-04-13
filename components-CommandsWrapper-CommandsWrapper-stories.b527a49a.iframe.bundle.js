"use strict";(self.webpackChunkcolibricomponents=self.webpackChunkcolibricomponents||[]).push([[324],{"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hz:()=>AppToolbar_AppToolbar,LA:()=>CommandsWrapper_CommandsWrapper,ah:()=>UndoProvider_UndoProvider,WD:()=>command,c:()=>commandsGroup,qJ:()=>keyboardShortcut,up:()=>noModifiersShortcut});var react=__webpack_require__("./node_modules/react/index.js"),Dialog=__webpack_require__("./node_modules/@primer/react/lib-esm/Dialog.js"),TextInput=__webpack_require__("./node_modules/@primer/react/lib-esm/TextInput/TextInput.js"),Text=__webpack_require__("./node_modules/@primer/react/lib-esm/Text.js"),ActionList=__webpack_require__("./node_modules/@primer/react/lib-esm/ActionList/index.js"),Box=__webpack_require__("./node_modules/@primer/react/lib-esm/Box/Box.js"),index_esm=__webpack_require__("./node_modules/@primer/octicons-react/dist/index.esm.js"),react_hotkeys_hook_esm=__webpack_require__("./node_modules/react-hotkeys-hook/dist/react-hotkeys-hook.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CommandsWrapper=({commands,children,isOpen,setIsOpen,canFilter,hasDividers})=>{const[filter,setFilter]=react.useState("");return function hotKeys(commands){for(const group of commands)for(const command of group.commands){let shortcut=command.shortcut.key;command.shortcut.shiftKey&&(shortcut="shift+"+shortcut),command.shortcut.altKey&&(shortcut="alt+"+shortcut);const ctrlShortcut="ctrl+"+shortcut,metaShortcut="meta+"+shortcut;(0,react_hotkeys_hook_esm.y1)([ctrlShortcut,metaShortcut],(()=>{command.action()}),{preventDefault:!0})}}(commands),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,(0,jsx_runtime.jsxs)(Dialog.Z,{isOpen,onDismiss:()=>setIsOpen(!1),"aria-labelledby":"header-id",style:{maxHeight:"365px"},children:[(0,jsx_runtime.jsx)(Dialog.Z.Header,{id:"header-id",children:canFilter?(0,jsx_runtime.jsx)(TextInput.Z,{name:"filter",placeholder:"Filter Commands",leadingVisual:index_esm.W1M,onChange:e=>setFilter(e.target.value)}):(0,jsx_runtime.jsx)(Text.Z,{as:"b",children:"Commands"})}),(0,jsx_runtime.jsx)(CommandsList,{commands:filterCommands(commands,filter),setIsOpen,hasDividers})]})]})};function CommandsList({commands,setIsOpen,hasDividers}){return commands.length>0?(0,jsx_runtime.jsx)(ActionList.S,{style:{overflowY:"scroll",maxHeight:"300px"},children:commands.map((group=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ActionList.S.Group,{title:group.name,children:group.commands.map((command=>(0,jsx_runtime.jsxs)(ActionList.S.Item,{variant:command.isDestructive?"danger":"default",onSelect:_=>{command.action(),setIsOpen(!1)},children:[command.name,(0,jsx_runtime.jsx)(ActionList.S.TrailingVisual,{children:shortcut(command.shortcut)})]},command.name)))},group.name),hasDividers&&commands[commands.length-1].name!==group.name&&(0,jsx_runtime.jsx)(ActionList.S.Divider,{})]})))}):(0,jsx_runtime.jsx)(Box.Z,{padding:3,children:(0,jsx_runtime.jsx)(Text.Z,{color:"gray",children:"No commands found."})})}function compareStrings(a,b){return a.toLowerCase().includes(b.toLowerCase())}function filterCommands(commands,filter){return commands.filter((group=>!group.isHidden)).map((group=>{const commands=group.commands.filter((command=>{if(compareStrings(command.name,filter))return!0;for(const keyword of command.keywords)if(compareStrings(keyword,filter))return!0;return!1}));return{...group,commands}})).filter((group=>group.commands.length>0))}function shortcut(shortcut){let shortcutString="⌘ "+function key(key){switch(key){case"BACKSPACE":return"⌫";case"TAB":return"⇥";case"RETURN":case"ENTER":return"⏎";case"ESC":case"ESCAPE":return"⎋";case"SPACE":return"␣";case"UP":return"↑";case"DOWN":return"↓";case"LEFT":return"←";case"RIGHT":return"→";case"PAGEUP":return"⇞";case"PAGEDOWN":return"⇟";case"DEL":case"DELETE":return"⌦";case"PERIOD":return".";case"COMMA":return",";case"SLASH":return"/";case"BACKQUOTE":return"`";default:return key}}(shortcut.key.toUpperCase());return shortcut.shiftKey&&(shortcutString="⇧ "+shortcutString),shortcut.altKey&&(shortcutString="⌥ "+shortcutString),shortcutString}CommandsWrapper.defaultProps={canFilter:!0,hasDividers:!1};const CommandsWrapper_CommandsWrapper=CommandsWrapper;try{CommandsWrapper.displayName="CommandsWrapper",CommandsWrapper.__docgenInfo={description:"A wrapper for a component that registers keyboard shortcuts and can display the available commands.",displayName:"CommandsWrapper",props:{commands:{defaultValue:null,description:"The list of command groups.",name:"commands",required:!0,type:{name:"CommandsGroup[]"}},children:{defaultValue:null,description:"The children of the component.",name:"children",required:!0,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"Whether the menu is open.",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"The function to call when the menu is opened or closed.\n@param open - Whether the menu is open.",name:"setIsOpen",required:!0,type:{name:"(isOpen: boolean) => void"}},canFilter:{defaultValue:{value:"true"},description:"Whether the user can filter the commands.",name:"canFilter",required:!1,type:{name:"boolean"}},hasDividers:{defaultValue:{value:"false"},description:"Whether there are dividers between the groups.",name:"hasDividers",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CommandsWrapper/CommandsWrapper.tsx#CommandsWrapper"]={docgenInfo:CommandsWrapper.__docgenInfo,name:"CommandsWrapper",path:"src/components/CommandsWrapper/CommandsWrapper.tsx#CommandsWrapper"})}catch(__react_docgen_typescript_loader_error){}function keyboardShortcut(altKey,shiftKey,key){return{altKey,shiftKey,key}}function noModifiersShortcut(key){return keyboardShortcut(!1,!1,key)}function command(name,keywords,shortcut,action,isDestructive=!1){return{name,keywords,shortcut,action,isDestructive}}function commandsGroup(name,commands,isHidden=!1){return{name,commands,isHidden}}var Header=__webpack_require__("./node_modules/@primer/react/lib-esm/Header/Header.js"),ThemeProvider=__webpack_require__("./node_modules/@primer/react/lib-esm/ThemeProvider.js"),ActionMenu=__webpack_require__("./node_modules/@primer/react/lib-esm/ActionMenu.js"),IconButton=__webpack_require__("./node_modules/@primer/react/lib-esm/Button/IconButton.js");const AppToolbar=({color1,color2,dark,full,creatorIcon,creatorLink,name,menu,onKeyboardShortcutsButtonClick,onSettingsButtonClick,children})=>{const[hover,setHover]=react.useState(!1);return(0,jsx_runtime.jsx)(Header.Z,{style:{background:`linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`},children:(0,jsx_runtime.jsxs)(ThemeProvider.ZP,{colorMode:dark?"dark":"auto",children:[(0,jsx_runtime.jsx)(Header.Z.Item,{style:{color:"black",padding:"0 5px 0 5px",borderRadius:"5px",background:`rgba(255,255,255,${hover?"0.5":"0.3"})`,paddingRight:"29px"},onMouseEnter:_=>setHover(!0),onMouseLeave:_=>setHover(!1),full,children:(0,jsx_runtime.jsxs)("a",{href:creatorLink,style:{height:"24px",color:"black",display:"flex",alignItems:"center",textDecoration:"none"},children:[creatorIcon,name&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("b",{style:{margin:"0 5px 0 5px"},children:"/"}),(0,jsx_runtime.jsx)("b",{style:{margin:"0 5px 0 0",whiteSpace:"nowrap"},children:name})]})]})}),children,(menu||onKeyboardShortcutsButtonClick||onSettingsButtonClick)&&(0,jsx_runtime.jsx)(Header.Z.Item,{children:(0,jsx_runtime.jsxs)(ActionMenu.P,{children:[(0,jsx_runtime.jsx)(ActionMenu.P.Anchor,{children:(0,jsx_runtime.jsx)(IconButton.h,{"aria-label":"Main Menu",icon:index_esm.Ui8})}),(0,jsx_runtime.jsx)(ActionMenu.P.Overlay,{children:(0,jsx_runtime.jsx)(ActionList.S,{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[menu,(onKeyboardShortcutsButtonClick||onSettingsButtonClick)&&menu&&(0,jsx_runtime.jsx)(ActionList.S.Divider,{}),onKeyboardShortcutsButtonClick&&(0,jsx_runtime.jsx)(ActionList.S.Item,{onSelect:onKeyboardShortcutsButtonClick,children:"Keyboard Shortcuts"}),onSettingsButtonClick&&(0,jsx_runtime.jsx)(ActionList.S.Item,{onSelect:onSettingsButtonClick,children:"Settings"})]})})})]})})]})})};AppToolbar.displayName="AppToolbar",AppToolbar.defaultProps={color1:"",color2:"",dark:!0,full:!1};const AppToolbar_AppToolbar=AppToolbar;try{AppToolbar.displayName="AppToolbar",AppToolbar.__docgenInfo={description:"A toolbar that can be used to display the name of the app, a menu, and other UI elements.",displayName:"AppToolbar",props:{color1:{defaultValue:{value:""},description:"The first color of the gradient.",name:"color1",required:!1,type:{name:"string"}},color2:{defaultValue:{value:""},description:"The second color of the gradient.",name:"color2",required:!1,type:{name:"string"}},dark:{defaultValue:{value:"true"},description:"Whether the toolbar is always displayed with a dark color scheme.",name:"dark",required:!1,type:{name:"boolean"}},full:{defaultValue:{value:"false"},description:"Whether the creator icon and app name take up as much space as possible.",name:"full",required:!1,type:{name:"boolean"}},creatorIcon:{defaultValue:null,description:"The creator's icon.",name:"creatorIcon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},creatorLink:{defaultValue:null,description:"Link to the creator's website.",name:"creatorLink",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The app's name.",name:"name",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"The main menu.",name:"menu",required:!1,type:{name:"ReactNode"}},onKeyboardShortcutsButtonClick:{defaultValue:null,description:"The function to call when the keyboard shortcuts button is clicked.",name:"onKeyboardShortcutsButtonClick",required:!1,type:{name:"(() => void)"}},onSettingsButtonClick:{defaultValue:null,description:"The function to call when the settings button is clicked.",name:"onSettingsButtonClick",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"The content of the toolbar.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AppToolbar/AppToolbar.tsx#AppToolbar"]={docgenInfo:AppToolbar.__docgenInfo,name:"AppToolbar",path:"src/components/AppToolbar/AppToolbar.tsx#AppToolbar"})}catch(__react_docgen_typescript_loader_error){}const UndoProvider=props=>{const{value,onChange,children}=props,[history,setHistory]=react.useState([value]),[index,setIndex]=react.useState(0);return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("p",{children:children({value,setValue:newValue=>{setHistory(history.slice(0,index+1).concat(newValue)),setIndex(index+1),onChange(newValue)},undo:()=>{index>0&&(setIndex(index-1),onChange(history[index-1]))},redo:()=>{index<history.length-1&&(setIndex(index+1),onChange(history[index+1]))},canUndo:index>0,canRedo:index<history.length-1})})})};UndoProvider.displayName="UndoProvider";const UndoProvider_UndoProvider=UndoProvider;try{UndoProvider.displayName="UndoProvider",UndoProvider.__docgenInfo={description:"A provider that allows for undo and redo functionality.",displayName:"UndoProvider",props:{value:{defaultValue:null,description:"The state of the observed value.",name:"value",required:!0,type:{name:"unknown"}},onChange:{defaultValue:null,description:"The function to call when the value changes.",name:"onChange",required:!0,type:{name:"(value: Value) => void"}},children:{defaultValue:null,description:"The children using the value.",name:"children",required:!0,type:{name:"(props: UndoProviderChildrenProps<Value>) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UndoProvider/UndoProvider.tsx#UndoProvider"]={docgenInfo:UndoProvider.__docgenInfo,name:"UndoProvider",path:"src/components/UndoProvider/UndoProvider.tsx#UndoProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/CommandsWrapper/CommandsWrapper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HiddenGroup:()=>HiddenGroup,NoCommands:()=>NoCommands,SpecialSymbols:()=>SpecialSymbols,Static:()=>Static,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_primer_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@primer/react/lib-esm/ThemeProvider.js"),_primer_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@primer/react/lib-esm/BaseStyles.js"),_primer_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@primer/react/lib-esm/Button/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function defaultCommands(toggleCommands){return[(0,___WEBPACK_IMPORTED_MODULE_1__.c)("TestApp",[(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Settings",["preferences","options"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Comma"),(()=>console.log("Open Settings"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Commands",["shortcuts","keyboard"],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!1,!0,"Space"),(()=>{console.log("Commands Palette"),toggleCommands()}))]),(0,___WEBPACK_IMPORTED_MODULE_1__.c)("File",[(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("New File",["document","new document"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("n"),(()=>console.log("New File"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Delete File",["remove","delete document"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Backspace"),(()=>console.log("Delete File")),!0)]),(0,___WEBPACK_IMPORTED_MODULE_1__.c)("Edit",[(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Undo",["back"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("z"),(()=>console.log("Undo"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Redo",["forward"],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!1,!0,"z"),(()=>console.log("Redo"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Cut",["delete"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("x"),(()=>console.log("Cut"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Copy",[""],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("c"),(()=>console.log("Copy"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Paste",["insert"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("v"),(()=>console.log("Paste"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Select All",["selection"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("a"),(()=>console.log("Select All")))])]}const __WEBPACK_DEFAULT_EXPORT__={title:"ColibriComponents/CommandsWrapper",component:___WEBPACK_IMPORTED_MODULE_1__.LA,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"CommandsWrapper is a component that manages the keyboard shortcuts of your app. It can show a palette of the available commands."}}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_primer_react__WEBPACK_IMPORTED_MODULE_3__.ZP,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_primer_react__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})})]},Dynamic=args=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.LA,{...args,commands:defaultCommands((()=>{setIsOpen(!isOpen)})),isOpen,setIsOpen,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{minHeight:"500px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_primer_react__WEBPACK_IMPORTED_MODULE_5__.z,{onClick:()=>setIsOpen(!0),children:"Show Commands"})})})};Dynamic.displayName="Dynamic";const Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Dynamic,{...args}),args:{canFilter:!0,hasDividers:!1}},Static={args:{...Default.args,commands:defaultCommands((()=>{})),isOpen:!0,setIsOpen:()=>{},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{minHeight:"500px"}})}},HiddenGroup={args:{...Static.args,commands:[(0,___WEBPACK_IMPORTED_MODULE_1__.c)("TestApp",[(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Settings",["preferences","options"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Comma"),(()=>console.log("Open Settings"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Commands",["shortcuts","keyboard"],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!1,!0,"Space"),(()=>{console.log("Commands Palette")}))]),(0,___WEBPACK_IMPORTED_MODULE_1__.c)("File",[(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("New File",["document","new document"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("n"),(()=>console.log("New File"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Delete File",["remove","delete document"],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Backspace"),(()=>console.log("Delete File")),!0)],!0)]}},NoCommands={args:{...Static.args,commands:[]}},SpecialSymbols={args:{...Static.args,commands:[(0,___WEBPACK_IMPORTED_MODULE_1__.c)("Special Symbols",[(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Backspace",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Backspace"),(()=>console.log("Backspace"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Tab (Alt)",[],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!0,!1,"Tab"),(()=>console.log("Alt + Tab"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Return (Shift)",[],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!1,!0,"Return"),(()=>console.log("Shift + Return"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Enter",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Enter"),(()=>console.log("Enter"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Esc (Shift)",[],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!1,!0,"Esc"),(()=>console.log("Shift + Esc"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Escape",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Escape"),(()=>console.log("Escape"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Space (Shift)",[],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!1,!0,"Space"),(()=>console.log("Shift + Space"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Up",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Up"),(()=>console.log("Up"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Down",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Down"),(()=>console.log("Down"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Left",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Left"),(()=>console.log("Left"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Right",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Right"),(()=>console.log("Right"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Page Up",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("PageUp"),(()=>console.log("Page Up")),!0),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Page Down",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("PageDown"),(()=>console.log("Page Down")),!0),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Del (Shift)",[],(0,___WEBPACK_IMPORTED_MODULE_1__.qJ)(!1,!0,"Del"),(()=>console.log("Shift + Del")),!0),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Delete",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Delete"),(()=>console.log("Delete"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Period",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Period"),(()=>console.log("Period"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Comma",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Comma"),(()=>console.log("Comma"))),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Slash",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Slash"),(()=>console.log("Slash")),!0),(0,___WEBPACK_IMPORTED_MODULE_1__.WD)("Backquote",[],(0,___WEBPACK_IMPORTED_MODULE_1__.up)("Backquote"),(()=>console.log("Backquote")),!0)])]}},__namedExportsOrder=["Default","Static","HiddenGroup","NoCommands","SpecialSymbols"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => /*#__PURE__*/_jsx(Dynamic, {\n    ...args\n  }),\n  args: {\n    canFilter: true,\n    hasDividers: false\n  }\n}",...Default.parameters?.docs?.source}}},Static.parameters={...Static.parameters,docs:{...Static.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    commands: defaultCommands(() => {}),\n    isOpen: true,\n    setIsOpen: () => {},\n    children: /*#__PURE__*/_jsx("div", {\n      style: {\n        minHeight: "500px"\n      }\n    })\n  }\n}',...Static.parameters?.docs?.source}}},HiddenGroup.parameters={...HiddenGroup.parameters,docs:{...HiddenGroup.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Static.args,\n    commands: [commandsGroup("TestApp", [command("Settings", ["preferences", "options"], noModifiersShortcut("Comma"), () => console.log("Open Settings")), command("Commands", ["shortcuts", "keyboard"], keyboardShortcut(false, true, "Space"), () => {\n      console.log("Commands Palette");\n    })]), commandsGroup("File", [command("New File", ["document", "new document"], noModifiersShortcut("n"), () => console.log("New File")), command("Delete File", ["remove", "delete document"], noModifiersShortcut("Backspace"), () => console.log("Delete File"), true)], true)]\n  }\n}',...HiddenGroup.parameters?.docs?.source}}},NoCommands.parameters={...NoCommands.parameters,docs:{...NoCommands.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Static.args,\n    commands: []\n  }\n}",...NoCommands.parameters?.docs?.source}}},SpecialSymbols.parameters={...SpecialSymbols.parameters,docs:{...SpecialSymbols.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Static.args,\n    commands: [commandsGroup("Special Symbols", [command("Backspace", [], noModifiersShortcut("Backspace"), () => console.log("Backspace")), command("Tab (Alt)", [], keyboardShortcut(true, false, "Tab"), () => console.log("Alt + Tab")), command("Return (Shift)", [], keyboardShortcut(false, true, "Return"), () => console.log("Shift + Return")), command("Enter", [], noModifiersShortcut("Enter"), () => console.log("Enter")), command("Esc (Shift)", [], keyboardShortcut(false, true, "Esc"), () => console.log("Shift + Esc")), command("Escape", [], noModifiersShortcut("Escape"), () => console.log("Escape")), command("Space (Shift)", [], keyboardShortcut(false, true, "Space"), () => console.log("Shift + Space")), command("Up", [], noModifiersShortcut("Up"), () => console.log("Up")), command("Down", [], noModifiersShortcut("Down"), () => console.log("Down")), command("Left", [], noModifiersShortcut("Left"), () => console.log("Left")), command("Right", [], noModifiersShortcut("Right"), () => console.log("Right")), command("Page Up", [], noModifiersShortcut("PageUp"), () => console.log("Page Up"), true), command("Page Down", [], noModifiersShortcut("PageDown"), () => console.log("Page Down"), true), command("Del (Shift)", [], keyboardShortcut(false, true, "Del"), () => console.log("Shift + Del"), true), command("Delete", [], noModifiersShortcut("Delete"), () => console.log("Delete")), command("Period", [], noModifiersShortcut("Period"), () => console.log("Period")), command("Comma", [], noModifiersShortcut("Comma"), () => console.log("Comma")), command("Slash", [], noModifiersShortcut("Slash"), () => console.log("Slash"), true), command("Backquote", [], noModifiersShortcut("Backquote"), () => console.log("Backquote"), true)])]\n  }\n}',...SpecialSymbols.parameters?.docs?.source}}}}}]);