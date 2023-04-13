import { ReactElement } from "react";
import { UndoProviderProps } from "./UndoProvider.types";
/**
 * A provider that allows for undo and redo functionality.
 * @param props - The props for the UndoProvider.
 * @constructor - A provider that allows for undo and redo functionality.
 */
declare const UndoProvider: <Value extends unknown>(props: UndoProviderProps<Value>) => ReactElement;
export default UndoProvider;
