"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@primer/react");
const __1 = require("../");
const meta = {
    title: "ColibriComponents/UndoProvider",
    component: __1.UndoProvider,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "UndoProvider is a component that provides undo & redo functionality to its children.",
            },
        },
    },
};
exports.default = meta;
const Dynamic = () => {
    const [value, setValue] = (0, react_1.useState)(0);
    return (react_1.default.createElement(__1.UndoProvider, { value: value, onChange: setValue, children: (props) => {
            const { value, setValue, undo, redo, canUndo, canRedo } = props;
            return (react_1.default.createElement(react_2.ThemeProvider, null,
                react_1.default.createElement(react_2.BaseStyles, { style: {
                        minHeight: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    } },
                    react_1.default.createElement(react_2.ButtonGroup, null,
                        react_1.default.createElement(react_2.Button, { onClick: (_) => setValue(Math.random()) }, value),
                        react_1.default.createElement(react_2.Button, { onClick: undo, disabled: !canUndo }, "Undo"),
                        react_1.default.createElement(react_2.Button, { onClick: redo, disabled: !canRedo }, "Redo")))));
        } }));
};
exports.Default = {
    render: () => react_1.default.createElement(Dynamic, null),
};
//# sourceMappingURL=UndoProvider.stories.js.map