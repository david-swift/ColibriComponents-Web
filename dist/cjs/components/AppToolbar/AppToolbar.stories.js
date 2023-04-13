"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoMainMenu = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const __1 = require("../");
const react_2 = require("@primer/react");
const logoPath = require("../../stories/assets/octicon24.svg");
const meta = {
    title: "ColibriComponents/AppToolbar",
    component: __1.AppToolbar,
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
        (Story) => (react_1.default.createElement(react_2.ThemeProvider, null,
            react_1.default.createElement(react_2.BaseStyles, null,
                react_1.default.createElement(Story, null)))),
    ],
};
exports.default = meta;
exports.Default = {
    args: {
        creatorLink: "https://github.com/david-swift",
        name: "AppToolbar",
        color1: "rgba(61, 255, 255, 1)",
        color2: "rgba(63, 33, 251, 1)",
        dark: true,
        full: false,
        creatorIcon: react_1.default.createElement("img", { src: logoPath }),
        menu: react_1.default.createElement(react_2.ActionList.Item, null, "Custom Item"),
        children: (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_2.Header.Item, { full: true },
                react_1.default.createElement(react_2.Button, null, "Important Action")))),
        onKeyboardShortcutsButtonClick: () => console.log("Shortcuts"),
        onSettingsButtonClick: () => console.log("Settings"),
    },
};
exports.NoMainMenu = {
    args: Object.assign(Object.assign({}, exports.Default.args), { menu: undefined, onKeyboardShortcutsButtonClick: undefined, onSettingsButtonClick: undefined }),
};
//# sourceMappingURL=AppToolbar.stories.js.map