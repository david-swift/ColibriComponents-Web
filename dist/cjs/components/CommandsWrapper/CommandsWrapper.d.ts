import { FC } from "react";
import { CommandsWrapperProps } from "./CommandsWrapper.types";
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
declare const CommandsWrapper: FC<CommandsWrapperProps>;
export default CommandsWrapper;
