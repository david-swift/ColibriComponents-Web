import React, { useState } from "react";
import { ThemeProvider, BaseStyles, Button } from "@primer/react";
import { CommandsWrapper, commandsGroup, command, noModifiersShortcut, keyboardShortcut, } from "../";
const meta = {
    title: "ColibriComponents/CommandsWrapper",
    component: CommandsWrapper,
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
        (Story) => (React.createElement(ThemeProvider, null,
            React.createElement(BaseStyles, null,
                React.createElement(Story, null)))),
    ],
};
function defaultCommands(toggleCommands) {
    return [
        commandsGroup("TestApp", [
            command("Settings", ["preferences", "options"], noModifiersShortcut("Comma"), () => console.log("Open Settings")),
            command("Commands", ["shortcuts", "keyboard"], keyboardShortcut(false, true, "Space"), () => {
                console.log("Commands Palette");
                toggleCommands();
            }),
        ]),
        commandsGroup("File", [
            command("New File", ["document", "new document"], noModifiersShortcut("n"), () => console.log("New File")),
            command("Delete File", ["remove", "delete document"], noModifiersShortcut("Backspace"), () => console.log("Delete File"), true),
        ]),
        commandsGroup("Edit", [
            command("Undo", ["back"], noModifiersShortcut("z"), () => console.log("Undo")),
            command("Redo", ["forward"], keyboardShortcut(false, true, "z"), () => console.log("Redo")),
            command("Cut", ["delete"], noModifiersShortcut("x"), () => console.log("Cut")),
            command("Copy", [""], noModifiersShortcut("c"), () => console.log("Copy")),
            command("Paste", ["insert"], noModifiersShortcut("v"), () => console.log("Paste")),
            command("Select All", ["selection"], noModifiersShortcut("a"), () => console.log("Select All")),
        ]),
    ];
}
export default meta;
const Dynamic = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (React.createElement(CommandsWrapper, Object.assign({}, args, { commands: defaultCommands(() => {
            setIsOpen(!isOpen);
        }), isOpen: isOpen, setIsOpen: setIsOpen }),
        React.createElement("div", { style: {
                minHeight: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            } },
            React.createElement(Button, { onClick: () => setIsOpen(true) }, "Show Commands"))));
};
export const Default = {
    render: (args) => React.createElement(Dynamic, Object.assign({}, args)),
    args: {
        canFilter: true,
        hasDividers: false,
    },
};
export const Static = {
    args: Object.assign(Object.assign({}, Default.args), { commands: defaultCommands(() => { }), isOpen: true, setIsOpen: () => { }, children: (React.createElement("div", { style: {
                minHeight: "500px",
            } })) }),
};
export const HiddenGroup = {
    args: Object.assign(Object.assign({}, Static.args), { commands: [
            commandsGroup("TestApp", [
                command("Settings", ["preferences", "options"], noModifiersShortcut("Comma"), () => console.log("Open Settings")),
                command("Commands", ["shortcuts", "keyboard"], keyboardShortcut(false, true, "Space"), () => {
                    console.log("Commands Palette");
                }),
            ]),
            commandsGroup("File", [
                command("New File", ["document", "new document"], noModifiersShortcut("n"), () => console.log("New File")),
                command("Delete File", ["remove", "delete document"], noModifiersShortcut("Backspace"), () => console.log("Delete File"), true),
            ], true),
        ] }),
};
export const NoCommands = {
    args: Object.assign(Object.assign({}, Static.args), { commands: [] }),
};
export const SpecialSymbols = {
    args: Object.assign(Object.assign({}, Static.args), { commands: [
            commandsGroup("Special Symbols", [
                command("Backspace", [], noModifiersShortcut("Backspace"), () => console.log("Backspace")),
                command("Tab (Alt)", [], keyboardShortcut(true, false, "Tab"), () => console.log("Alt + Tab")),
                command("Return (Shift)", [], keyboardShortcut(false, true, "Return"), () => console.log("Shift + Return")),
                command("Enter", [], noModifiersShortcut("Enter"), () => console.log("Enter")),
                command("Esc (Shift)", [], keyboardShortcut(false, true, "Esc"), () => console.log("Shift + Esc")),
                command("Escape", [], noModifiersShortcut("Escape"), () => console.log("Escape")),
                command("Space (Shift)", [], keyboardShortcut(false, true, "Space"), () => console.log("Shift + Space")),
                command("Up", [], noModifiersShortcut("Up"), () => console.log("Up")),
                command("Down", [], noModifiersShortcut("Down"), () => console.log("Down")),
                command("Left", [], noModifiersShortcut("Left"), () => console.log("Left")),
                command("Right", [], noModifiersShortcut("Right"), () => console.log("Right")),
                command("Page Up", [], noModifiersShortcut("PageUp"), () => console.log("Page Up"), true),
                command("Page Down", [], noModifiersShortcut("PageDown"), () => console.log("Page Down"), true),
                command("Del (Shift)", [], keyboardShortcut(false, true, "Del"), () => console.log("Shift + Del"), true),
                command("Delete", [], noModifiersShortcut("Delete"), () => console.log("Delete")),
                command("Period", [], noModifiersShortcut("Period"), () => console.log("Period")),
                command("Comma", [], noModifiersShortcut("Comma"), () => console.log("Comma")),
                command("Slash", [], noModifiersShortcut("Slash"), () => console.log("Slash"), true),
                command("Backquote", [], noModifiersShortcut("Backquote"), () => console.log("Backquote"), true),
            ]),
        ] }),
};
//# sourceMappingURL=CommandsWrapper.stories.js.map