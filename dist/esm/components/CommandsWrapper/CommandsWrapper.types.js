/**
 * Initialize a keyboard shortcut.
 * @param altKey - A modifier that should be used if Shift+`key` and `key` are already used.
 * @param shiftKey - A modifier that should be used if `key` is already used.
 * @param key - The key.
 * @returns The keyboard shortcut.
 */
export function keyboardShortcut(altKey, shiftKey, key) {
    return { altKey, shiftKey, key };
}
/**
 * Initialize a keyboard shortcut with no modifiers except Ctrl (Command).
 * @param key - The key.
 */
export function noModifiersShortcut(key) {
    return keyboardShortcut(false, false, key);
}
/**
 * Initialize a command.
 * @param name - The command name.
 * @param keywords - Keywords used to search for the command.
 * @param shortcut - The command shortcut.
 * @param action - The command action.
 * @param isDestructive - Whether the command is potentially dangerous.
 * @returns The command.
 */
export function command(name, keywords, shortcut, action, isDestructive = false) {
    return { name, keywords, shortcut, action, isDestructive };
}
/**
 * Initialize a command group.
 * @param name - The group name.
 * @param commands - The list of commands.
 * @param isHidden - Whether the group is hidden.
 * @returns The command group.
 */
export function commandsGroup(name, commands, isHidden = false) {
    return { name, commands, isHidden };
}
//# sourceMappingURL=CommandsWrapper.types.js.map