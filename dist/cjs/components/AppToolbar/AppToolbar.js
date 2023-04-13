"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@primer/react");
const octicons_react_1 = require("@primer/octicons-react");
/**
 * A toolbar that can be used to display the name of the app, a menu, and other UI elements.
 * @param color1 - The first color of the gradient.
 * @param color2 - The second color of the gradient.
 * @param dark - Whether the toolbar should be dark.
 * @param full - Whether the creator information should be as wide as possible.
 * @param creatorIcon - The icon of the creator.
 * @param creatorLink - The link to the creator's website.
 * @param name - The name of the app.
 * @param menu - Additional items in the main menu.
 * @param onKeyboardShortcutsButtonClick - A callback for when the keyboard shortcuts button in the main menu is clicked.
 * @param onSettingsButtonClick - A callback for when the settings button in the main menu is clicked.
 * @param children - Additional items to display in the toolbar.
 * @constructor - A toolbar that can be used to display the name of the app, a menu, and other UI elements.
 */
const AppToolbar = ({ color1, color2, dark, full, creatorIcon, creatorLink, name, menu, onKeyboardShortcutsButtonClick, onSettingsButtonClick, children, }) => {
    const [hover, setHover] = react_1.default.useState(false);
    return (react_1.default.createElement(react_2.Header, { style: {
            background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`,
        } },
        react_1.default.createElement(react_2.ThemeProvider, { colorMode: dark ? "dark" : "auto" },
            react_1.default.createElement(react_2.Header.Item, { style: {
                    color: "black",
                    padding: "0 5px 0 5px",
                    borderRadius: "5px",
                    background: `rgba(255,255,255,${hover ? "0.5" : "0.3"})`,
                    paddingRight: `29px`,
                }, onMouseEnter: (_) => setHover(true), onMouseLeave: (_) => setHover(false), full: full },
                react_1.default.createElement("a", { href: creatorLink, style: {
                        height: "24px",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                    } },
                    creatorIcon,
                    name && (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("b", { style: {
                                margin: "0 5px 0 5px",
                            } }, "/"),
                        react_1.default.createElement("b", { style: {
                                margin: "0 5px 0 0",
                                whiteSpace: "nowrap",
                            } }, name))))),
            children,
            (menu || onKeyboardShortcutsButtonClick || onSettingsButtonClick) && (react_1.default.createElement(react_2.Header.Item, null,
                react_1.default.createElement(react_2.ActionMenu, null,
                    react_1.default.createElement(react_2.ActionMenu.Anchor, null,
                        react_1.default.createElement(react_2.IconButton, { "aria-label": "Main Menu", icon: octicons_react_1.KebabHorizontalIcon })),
                    react_1.default.createElement(react_2.ActionMenu.Overlay, null,
                        react_1.default.createElement(react_2.ActionList, null,
                            react_1.default.createElement(react_1.default.Fragment, null,
                                menu,
                                (onKeyboardShortcutsButtonClick ||
                                    onSettingsButtonClick) &&
                                    menu && react_1.default.createElement(react_2.ActionList.Divider, null),
                                onKeyboardShortcutsButtonClick && (react_1.default.createElement(react_2.ActionList.Item, { onSelect: onKeyboardShortcutsButtonClick }, "Keyboard Shortcuts")),
                                onSettingsButtonClick && (react_1.default.createElement(react_2.ActionList.Item, { onSelect: onSettingsButtonClick }, "Settings")))))))))));
};
AppToolbar.defaultProps = {
    color1: "",
    color2: "",
    dark: true,
    full: false,
};
exports.default = AppToolbar;
//# sourceMappingURL=AppToolbar.js.map