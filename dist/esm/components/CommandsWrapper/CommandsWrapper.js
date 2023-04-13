import React from "react";
import { ActionList, Box, Dialog, Text, TextInput, } from "@primer/react";
import { SearchIcon } from "@primer/octicons-react";
import { useHotkeys } from "react-hotkeys-hook";
/**
 * A wrapper for a component that registers keyboard shortcuts and can display the available commands.
 * @param commands - The groups of commands and their keyboard shortcuts.
 * @param children - The component that should be wrapped.
 * @param isOpen - Whether the commands dialog is open.
 * @param setIsOpen - A callback for when the commands dialog is closed.
 * @param canFilter - Whether the commands can be filtered.
 * @param hasDividers - Whether the commands should be separated by dividers.
 * @constructor - A wrapper for a component that registers keyboard shortcuts and can display the available commands.
 */
const CommandsWrapper = ({ commands, children, isOpen, setIsOpen, canFilter, hasDividers, }) => {
    const [filter, setFilter] = React.useState("");
    hotKeys(commands);
    return (React.createElement(React.Fragment, null,
        children,
        React.createElement(Dialog, { isOpen: isOpen, onDismiss: () => setIsOpen(false), "aria-labelledby": "header-id", style: {
                maxHeight: "365px",
            } },
            React.createElement(Dialog.Header, { id: "header-id" }, canFilter ? (React.createElement(TextInput, { name: "filter", placeholder: "Filter Commands", leadingVisual: SearchIcon, onChange: (e) => setFilter(e.target.value) })) : (React.createElement(Text, { as: "b" }, "Commands"))),
            React.createElement(CommandsList, { commands: filterCommands(commands, filter), setIsOpen: setIsOpen, hasDividers: hasDividers }))));
};
/**
 * The user interface for the list of commands.
 * @param commands - The groups of commands and their keyboard shortcuts.
 * @param setIsOpen - A callback for when the commands dialog is closed.
 * @param hasDividers - Whether the commands should be separated by dividers.
 * @constructor
 */
function CommandsList({ commands, setIsOpen, hasDividers, }) {
    if (commands.length > 0) {
        return (React.createElement(ActionList, { style: {
                overflowY: "scroll",
                maxHeight: "300px",
            } }, commands.map((group) => {
            return (React.createElement(React.Fragment, null,
                React.createElement(ActionList.Group, { title: group.name, key: group.name }, group.commands.map((command) => {
                    return (React.createElement(ActionList.Item, { variant: command.isDestructive ? "danger" : "default", onSelect: (_) => {
                            command.action();
                            setIsOpen(false);
                        }, key: command.name },
                        command.name,
                        React.createElement(ActionList.TrailingVisual, null, shortcut(command.shortcut))));
                })),
                hasDividers &&
                    commands[commands.length - 1].name !== group.name && (React.createElement(ActionList.Divider, null))));
        })));
    }
    else {
        return (React.createElement(Box, { padding: 3 },
            React.createElement(Text, { color: "gray" }, "No commands found.")));
    }
}
/**
 * Registers the keyboard shortcuts for the commands.
 * @param commands - The groups of commands and their keyboard shortcuts.
 */
function hotKeys(commands) {
    for (const group of commands) {
        for (const command of group.commands) {
            let shortcut = command.shortcut.key;
            if (command.shortcut.shiftKey) {
                shortcut = "shift+" + shortcut;
            }
            if (command.shortcut.altKey) {
                shortcut = "alt+" + shortcut;
            }
            const ctrlShortcut = "ctrl+" + shortcut;
            const metaShortcut = "meta+" + shortcut;
            useHotkeys([ctrlShortcut, metaShortcut], () => {
                command.action();
            }, {
                preventDefault: true,
            });
        }
    }
}
/**
 * Checks whether a string is the search result of another string.
 * @param a - The string to search for.
 * @param b - The filter string.
 */
function compareStrings(a, b) {
    return a.toLowerCase().includes(b.toLowerCase());
}
/**
 * Filters the commands by the filter string.
 * @param commands - The groups of commands and their keyboard shortcuts.
 * @param filter - The filter string.
 */
function filterCommands(commands, filter) {
    return commands
        .filter((group) => !group.isHidden)
        .map((group) => {
        const commands = group.commands.filter((command) => {
            if (compareStrings(command.name, filter)) {
                return true;
            }
            for (const keyword of command.keywords) {
                if (compareStrings(keyword, filter)) {
                    return true;
                }
            }
            return false;
        });
        return Object.assign(Object.assign({}, group), { commands });
    })
        .filter((group) => group.commands.length > 0);
}
/**
 *  Converts a keyboard shortcut to a string.
 * @param shortcut - The keyboard shortcut.
 */
function shortcut(shortcut) {
    let shortcutString = "⌘ " + key(shortcut.key.toUpperCase());
    if (shortcut.shiftKey) {
        shortcutString = "⇧ " + shortcutString;
    }
    if (shortcut.altKey) {
        shortcutString = "⌥ " + shortcutString;
    }
    return shortcutString;
}
/**
 * Converts a key to a string.
 * @param key - The key.
 */
function key(key) {
    switch (key) {
        case "BACKSPACE":
            return "⌫";
        case "TAB":
            return "⇥";
        case "RETURN":
        case "ENTER":
            return "⏎";
        case "ESC":
        case "ESCAPE":
            return "⎋";
        case "SPACE":
            return "␣";
        case "UP":
            return "↑";
        case "DOWN":
            return "↓";
        case "LEFT":
            return "←";
        case "RIGHT":
            return "→";
        case "PAGEUP":
            return "⇞";
        case "PAGEDOWN":
            return "⇟";
        case "DEL":
        case "DELETE":
            return "⌦";
        case "PERIOD":
            return ".";
        case "COMMA":
            return ",";
        case "SLASH":
            return "/";
        case "BACKQUOTE":
            return "`";
        default:
            return key;
    }
}
CommandsWrapper.defaultProps = {
    canFilter: true,
    hasDividers: false,
};
export default CommandsWrapper;
//# sourceMappingURL=CommandsWrapper.js.map