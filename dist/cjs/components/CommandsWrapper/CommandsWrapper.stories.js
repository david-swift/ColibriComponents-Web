"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialSymbols = exports.NoCommands = exports.HiddenGroup = exports.Static = exports.Default = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@primer/react");
const __1 = require("../");
const meta = {
    title: "ColibriComponents/CommandsWrapper",
    component: __1.CommandsWrapper,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "CommandsWrapper is a component that manages the keyboard shortcuts of your app. It can show a palette of the available commands.",
            },
        },
    },
    decorators: [
        (Story) => (react_1.default.createElement(react_2.ThemeProvider, null,
            react_1.default.createElement(react_2.BaseStyles, null,
                react_1.default.createElement(Story, null)))),
    ],
};
function defaultCommands(toggleCommands) {
    return [
        (0, __1.commandsGroup)("TestApp", [
            (0, __1.command)("Settings", ["preferences", "options"], (0, __1.noModifiersShortcut)("Comma"), () => console.log("Open Settings")),
            (0, __1.command)("Commands", ["shortcuts", "keyboard"], (0, __1.keyboardShortcut)(false, true, "Space"), () => {
                console.log("Commands Palette");
                toggleCommands();
            }),
        ]),
        (0, __1.commandsGroup)("File", [
            (0, __1.command)("New File", ["document", "new document"], (0, __1.noModifiersShortcut)("n"), () => console.log("New File")),
            (0, __1.command)("Delete File", ["remove", "delete document"], (0, __1.noModifiersShortcut)("Backspace"), () => console.log("Delete File"), true),
        ]),
        (0, __1.commandsGroup)("Edit", [
            (0, __1.command)("Undo", ["back"], (0, __1.noModifiersShortcut)("z"), () => console.log("Undo")),
            (0, __1.command)("Redo", ["forward"], (0, __1.keyboardShortcut)(false, true, "z"), () => console.log("Redo")),
            (0, __1.command)("Cut", ["delete"], (0, __1.noModifiersShortcut)("x"), () => console.log("Cut")),
            (0, __1.command)("Copy", [""], (0, __1.noModifiersShortcut)("c"), () => console.log("Copy")),
            (0, __1.command)("Paste", ["insert"], (0, __1.noModifiersShortcut)("v"), () => console.log("Paste")),
            (0, __1.command)("Select All", ["selection"], (0, __1.noModifiersShortcut)("a"), () => console.log("Select All")),
        ]),
    ];
}
exports.default = meta;
const Dynamic = (args) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    return (react_1.default.createElement(__1.CommandsWrapper, Object.assign({}, args, { commands: defaultCommands(() => {
            setIsOpen(!isOpen);
        }), isOpen: isOpen, setIsOpen: setIsOpen }),
        react_1.default.createElement("div", { style: {
                minHeight: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            } },
            react_1.default.createElement(react_2.Button, { onClick: () => setIsOpen(true) }, "Show Commands"))));
};
exports.Default = {
    render: (args) => react_1.default.createElement(Dynamic, Object.assign({}, args)),
    args: {
        canFilter: true,
        hasDividers: false,
    },
};
exports.Static = {
    args: Object.assign(Object.assign({}, exports.Default.args), { commands: defaultCommands(() => { }), isOpen: true, setIsOpen: () => { }, children: (react_1.default.createElement("div", { style: {
                minHeight: "500px",
            } })) }),
};
exports.HiddenGroup = {
    args: Object.assign(Object.assign({}, exports.Static.args), { commands: [
            (0, __1.commandsGroup)("TestApp", [
                (0, __1.command)("Settings", ["preferences", "options"], (0, __1.noModifiersShortcut)("Comma"), () => console.log("Open Settings")),
                (0, __1.command)("Commands", ["shortcuts", "keyboard"], (0, __1.keyboardShortcut)(false, true, "Space"), () => {
                    console.log("Commands Palette");
                }),
            ]),
            (0, __1.commandsGroup)("File", [
                (0, __1.command)("New File", ["document", "new document"], (0, __1.noModifiersShortcut)("n"), () => console.log("New File")),
                (0, __1.command)("Delete File", ["remove", "delete document"], (0, __1.noModifiersShortcut)("Backspace"), () => console.log("Delete File"), true),
            ], true),
        ] }),
};
exports.NoCommands = {
    args: Object.assign(Object.assign({}, exports.Static.args), { commands: [] }),
};
exports.SpecialSymbols = {
    args: Object.assign(Object.assign({}, exports.Static.args), { commands: [
            (0, __1.commandsGroup)("Special Symbols", [
                (0, __1.command)("Backspace", [], (0, __1.noModifiersShortcut)("Backspace"), () => console.log("Backspace")),
                (0, __1.command)("Tab (Alt)", [], (0, __1.keyboardShortcut)(true, false, "Tab"), () => console.log("Alt + Tab")),
                (0, __1.command)("Return (Shift)", [], (0, __1.keyboardShortcut)(false, true, "Return"), () => console.log("Shift + Return")),
                (0, __1.command)("Enter", [], (0, __1.noModifiersShortcut)("Enter"), () => console.log("Enter")),
                (0, __1.command)("Esc (Shift)", [], (0, __1.keyboardShortcut)(false, true, "Esc"), () => console.log("Shift + Esc")),
                (0, __1.command)("Escape", [], (0, __1.noModifiersShortcut)("Escape"), () => console.log("Escape")),
                (0, __1.command)("Space (Shift)", [], (0, __1.keyboardShortcut)(false, true, "Space"), () => console.log("Shift + Space")),
                (0, __1.command)("Up", [], (0, __1.noModifiersShortcut)("Up"), () => console.log("Up")),
                (0, __1.command)("Down", [], (0, __1.noModifiersShortcut)("Down"), () => console.log("Down")),
                (0, __1.command)("Left", [], (0, __1.noModifiersShortcut)("Left"), () => console.log("Left")),
                (0, __1.command)("Right", [], (0, __1.noModifiersShortcut)("Right"), () => console.log("Right")),
                (0, __1.command)("Page Up", [], (0, __1.noModifiersShortcut)("PageUp"), () => console.log("Page Up"), true),
                (0, __1.command)("Page Down", [], (0, __1.noModifiersShortcut)("PageDown"), () => console.log("Page Down"), true),
                (0, __1.command)("Del (Shift)", [], (0, __1.keyboardShortcut)(false, true, "Del"), () => console.log("Shift + Del"), true),
                (0, __1.command)("Delete", [], (0, __1.noModifiersShortcut)("Delete"), () => console.log("Delete")),
                (0, __1.command)("Period", [], (0, __1.noModifiersShortcut)("Period"), () => console.log("Period")),
                (0, __1.command)("Comma", [], (0, __1.noModifiersShortcut)("Comma"), () => console.log("Comma")),
                (0, __1.command)("Slash", [], (0, __1.noModifiersShortcut)("Slash"), () => console.log("Slash"), true),
                (0, __1.command)("Backquote", [], (0, __1.noModifiersShortcut)("Backquote"), () => console.log("Backquote"), true),
            ]),
        ] }),
};
//# sourceMappingURL=CommandsWrapper.stories.js.map