"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandsGroup = exports.command = exports.noModifiersShortcut = exports.keyboardShortcut = void 0;
/**
 * Initialize a keyboard shortcut.
 * @param altKey - A modifier that should be used if Shift+`key` and `key` are already used.
 * @param shiftKey - A modifier that should be used if `key` is already used.
 * @param key - The key.
 * @returns The keyboard shortcut.
 */
function keyboardShortcut(altKey, shiftKey, key) {
    return { altKey, shiftKey, key };
}
exports.keyboardShortcut = keyboardShortcut;
/**
 * Initialize a keyboard shortcut with no modifiers except Ctrl (Command).
 * @param key - The key.
 */
function noModifiersShortcut(key) {
    return keyboardShortcut(false, false, key);
}
exports.noModifiersShortcut = noModifiersShortcut;
/**
 * Initialize a command.
 * @param name - The command name.
 * @param keywords - Keywords used to search for the command.
 * @param shortcut - The command shortcut.
 * @param action - The command action.
 * @param isDestructive - Whether the command is potentially dangerous.
 * @returns The command.
 */
function command(name, keywords, shortcut, action, isDestructive = false) {
    return { name, keywords, shortcut, action, isDestructive };
}
exports.command = command;
/**
 * Initialize a command group.
 * @param name - The group name.
 * @param commands - The list of commands.
 * @param isHidden - Whether the group is hidden.
 * @returns The command group.
 */
function commandsGroup(name, commands, isHidden = false) {
    return { name, commands, isHidden };
}
exports.commandsGroup = commandsGroup;
//# sourceMappingURL=CommandsWrapper.types.js.map