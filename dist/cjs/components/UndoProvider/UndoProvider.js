"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * A provider that allows for undo and redo functionality.
 * @param props - The props for the UndoProvider.
 * @constructor - A provider that allows for undo and redo functionality.
 */
const UndoProvider = (props) => {
    const { value, onChange, children } = props;
    const [history, setHistory] = react_1.default.useState([value]);
    const [index, setIndex] = react_1.default.useState(0);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, children({
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
        }))));
};
exports.default = UndoProvider;
//# sourceMappingURL=UndoProvider.js.map