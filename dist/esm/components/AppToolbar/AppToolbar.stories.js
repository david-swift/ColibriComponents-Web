import React from "react";
import { AppToolbar } from "../";
import { Button, ActionList, Header, ThemeProvider, BaseStyles, } from "@primer/react";
const logoPath = require("../../stories/assets/octicon24.svg");
const meta = {
    title: "ColibriComponents/AppToolbar",
    component: AppToolbar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "AppToolbar is a component that provides a toolbar for an app. There is information about the creator on the left, and the main menu on the right. In between you can add custom items.",
            },
        },
    },
    decorators: [
        (Story) => (React.createElement(ThemeProvider, null,
            React.createElement(BaseStyles, null,
                React.createElement(Story, null)))),
    ],
};
export default meta;
export const Default = {
    args: {
        creatorLink: "https://github.com/david-swift",
        name: "AppToolbar",
        color1: "rgba(61, 255, 255, 1)",
        color2: "rgba(63, 33, 251, 1)",
        dark: true,
        full: false,
        creatorIcon: React.createElement("img", { src: logoPath }),
        menu: React.createElement(ActionList.Item, null, "Custom Item"),
        children: (React.createElement(React.Fragment, null,
            React.createElement(Header.Item, { full: true },
                React.createElement(Button, null, "Important Action")))),
        onKeyboardShortcutsButtonClick: () => console.log("Shortcuts"),
        onSettingsButtonClick: () => console.log("Settings"),
    },
};
export const NoMainMenu = {
    args: Object.assign(Object.assign({}, Default.args), { menu: undefined, onKeyboardShortcutsButtonClick: undefined, onSettingsButtonClick: undefined }),
};
//# sourceMappingURL=AppToolbar.stories.js.map