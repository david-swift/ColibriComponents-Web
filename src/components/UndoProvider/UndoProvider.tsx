import React, { ReactElement } from "react";
import { UndoProviderProps } from "./UndoProvider.types";

/**
 * A provider that allows for undo and redo functionality.
 * @param props - The props for the UndoProvider.
 * @constructor - A provider that allows for undo and redo functionality.
 */
const UndoProvider = <Value extends unknown>(
  props: UndoProviderProps<Value>
): ReactElement => {
  const { value, onChange, children } = props;
  const [history, setHistory] = React.useState<Value[]>([value]);
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <p>
        {children({
          value: value,
          setValue: (newValue) => {
            setHistory(history.slice(0, index + 1).concat(newValue));
            setIndex(index + 1);
            onChange(newValue);
          },
          undo: () => {
            if (index > 0) {
              setIndex(index - 1);
              onChange(history[index - 1]);
            }
          },
          redo: () => {
            if (index < history.length - 1) {
              setIndex(index + 1);
              onChange(history[index + 1]);
            }
          },
          canUndo: index > 0,
          canRedo: index < history.length - 1,
        })}
      </p>
    </div>
  );
};

export default UndoProvider;
