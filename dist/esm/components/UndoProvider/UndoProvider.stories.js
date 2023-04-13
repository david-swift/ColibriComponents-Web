import React, { useState } from "react";
import { ButtonGroup, Button, ThemeProvider, BaseStyles } from "@primer/react";
import { UndoProvider } from "../";
const meta = {
    title: "ColibriComponents/UndoProvider",
    component: UndoProvider,
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
export default meta;
const Dynamic = () => {
    const [value, setValue] = useState(0);
    return (React.createElement(UndoProvider, { value: value, onChange: setValue, children: (props) => {
            const { value, setValue, undo, redo, canUndo, canRedo } = props;
            return (React.createElement(ThemeProvider, null,
                React.createElement(BaseStyles, { style: {
                        minHeight: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    } },
                    React.createElement(ButtonGroup, null,
                        React.createElement(Button, { onClick: (_) => setValue(Math.random()) }, value),
                        React.createElement(Button, { onClick: undo, disabled: !canUndo }, "Undo"),
                        React.createElement(Button, { onClick: redo, disabled: !canRedo }, "Redo")))));
        } }));
};
export const Default = {
    render: () => React.createElement(Dynamic, null),
};
//# sourceMappingURL=UndoProvider.stories.js.map