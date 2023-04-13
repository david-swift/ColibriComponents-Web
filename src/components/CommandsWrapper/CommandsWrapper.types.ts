import { ReactNode } from 'react';

/**
 * A keyboard shortcut is a combination of a key and at least one modifier.
 *
 * @remarks
 * Prefer using none of the modifiers. Ctrl (Command) is always automatically attached to the shortcut.
 * - If you want a second shortcut with the same key (or do not want to override a system shortcut), you can use the Shift key.
 * - If you want a third shortcut with the same key (or do not want to override a system shortcut), you can use the Alt (Option) key.
 * - If you want a fourth shortcut with the same key (or do not want to override a system shortcut), you can use the Shift and Alt (Option) keys.
 */
export interface KeyboardShortcut {
  /**
   * Whether the Alt (Option) key is pressed.
   */
  altKey: boolean;
  /**
   * Whether the Shift key is pressed.
   */
  shiftKey: boolean;
  /**
   * The key.
   * It must be a single character. It is not case-sensitive.
   * There is always automatically the Ctrl (Command) key attached to the shortcut.
   */
  key: string;
}

/**
 * Initialize a keyboard shortcut.
 * @param altKey - A modifier that should be used if Shift+`key` and `key` are already used.
 * @param shiftKey - A modifier that should be used if `key` is already used.
 * @param key - The key.
 * @returns The keyboard shortcut.
 */
export function keyboardShortcut(
  altKey: boolean,
  shiftKey: boolean,
  key: string
): KeyboardShortcut {
  return { altKey, shiftKey, key };
}

/**
 * Initialize a keyboard shortcut with no modifiers except Ctrl (Command).
 * @param key - The key.
 */
export function noModifiersShortcut(key: string): KeyboardShortcut {
  return keyboardShortcut(false, false, key);
}

/**
 * A command is a single action that can be executed by the user.
 * It is a combination of a name, a description, a shortcut and an action.
 */
export interface Command {
  /**
   * The command name.
   * It is used to identify the command and to execute it.
   * It must be unique in the command group.
   */
  name: string;
  /**
   * Keywords used to search for the command.
   * The command is displayed in the menu when the user searches for one of the keywords.
   */
  keywords: string[];
  /**
   * The command shortcut.
   * The command is executed when the user presses the shortcut.
   */
  shortcut: KeyboardShortcut;
  /**
   * The command action.
   * It is executed when the user presses the shortcut or clicks on the command name in the menu.
   */
  action: () => void;
  /**
   * Whether the command is destructive.
   * Destructive commands are displayed in red in the menu.
   */
  isDestructive: boolean;
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
export function command(
  name: string,
  keywords: string[],
  shortcut: KeyboardShortcut,
  action: () => void,
  isDestructive: boolean = false
): Command {
  return { name, keywords, shortcut, action, isDestructive };
}

/**
 * A command group is a collection of commands.
 * It is a combination of a name, a list of commands, a flag indicating whether it is the default group and a flag indicating whether the group is hidden.
 */
export interface CommandsGroup {
  /**
   * The group name.
   * It is used to identify the group and to display it in the menu.
   * It must be unique in the list of groups.
   */
  name: string;
  /**
   * The list of commands.
   */
  commands: Command[];
  /**
   * Whether the group is hidden.
   * Hidden groups are not displayed in the menu.
   * Use this flag sparingly.
   */
  isHidden: boolean;
}

/**
 * Initialize a command group.
 * @param name - The group name.
 * @param commands - The list of commands.
 * @param isHidden - Whether the group is hidden.
 * @returns The command group.
 */
export function commandsGroup(
  name: string,
  commands: Command[],
  isHidden: boolean = false
): CommandsGroup {
  return { name, commands, isHidden };
}

/**
 * The props of the CommandsWrapper component.
 */
export interface CommandsWrapperProps {
  /**
   * The list of command groups.
   */
  commands: CommandsGroup[];
  /**
   * The children of the component.
   */
  children: ReactNode;
  /**
   * Whether the menu is open.
   */
  isOpen: boolean;
  /**
   * The function to call when the menu is opened or closed.
   * @param open - Whether the menu is open.
   */
  setIsOpen: (isOpen: boolean) => void;
  /**
   * Whether the user can filter the commands.
   */
  canFilter?: boolean;
  /**
   * Whether there are dividers between the groups.
   */
  hasDividers?: boolean;
}
