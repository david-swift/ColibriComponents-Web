import { ReactNode } from 'react';

/**
 * The props for the children of the UndoProvider component.
 */
export interface UndoProviderChildrenProps<Value> {
  /**
   * The state of the observed value.
   */
  value: Value;
  /**
   * The function to set the value.
   */
  setValue: (value: Value) => void;
  /**
   * The function to undo one step.
   */
  undo: () => void;
  /**
   * The function to redo one step.
   */
  redo: () => void;
  /**
   * Whether there is a step to undo.
   */
  canUndo: boolean;
  /**
   * Whether there is a step to redo.
   */
  canRedo: boolean;
}

/**
 * The props of the UndoProvider component.
 */
export interface UndoProviderProps<Value> {
  /**
   * The state of the observed value.
   */
  value: Value;
  /**
   * The function to call when the value changes.
   */
  onChange: (value: Value) => void;
  /**
   * The children using the value.
   */
  children: (props: UndoProviderChildrenProps<Value>) => ReactNode;
}
