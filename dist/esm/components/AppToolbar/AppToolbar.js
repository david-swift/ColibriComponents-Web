import React from "react";
import { Header, IconButton, ThemeProvider, ActionMenu, ActionList } from "@primer/react";
import { KebabHorizontalIcon } from "@primer/octicons-react";
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
    const [hover, setHover] = React.useState(false);
    return (React.createElement(Header, { style: {
            background: `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`,
        } },
        React.createElement(ThemeProvider, { colorMode: dark ? "dark" : "auto" },
            React.createElement(Header.Item, { style: {
                    color: "black",
                    padding: "0 5px 0 5px",
                    borderRadius: "5px",
                    background: `rgba(255,255,255,${hover ? "0.5" : "0.3"})`,
                    paddingRight: `29px`,
                }, onMouseEnter: (_) => setHover(true), onMouseLeave: (_) => setHover(false), full: full },
                React.createElement("a", { href: creatorLink, style: {
                        height: "24px",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                    } },
                    creatorIcon,
                    name && (React.createElement(React.Fragment, null,
                        React.createElement("b", { style: {
                                margin: "0 5px 0 5px",
                            } }, "/"),
                        React.createElement("b", { style: {
                                margin: "0 5px 0 0",
                                whiteSpace: "nowrap",
                            } }, name))))),
            children,
            (menu || onKeyboardShortcutsButtonClick || onSettingsButtonClick) && (React.createElement(Header.Item, null,
                React.createElement(ActionMenu, null,
                    React.createElement(ActionMenu.Anchor, null,
                        React.createElement(IconButton, { "aria-label": "Main Menu", icon: KebabHorizontalIcon })),
                    React.createElement(ActionMenu.Overlay, null,
                        React.createElement(ActionList, null,
                            React.createElement(React.Fragment, null,
                                menu,
                                (onKeyboardShortcutsButtonClick ||
                                    onSettingsButtonClick) &&
                                    menu && React.createElement(ActionList.Divider, null),
                                onKeyboardShortcutsButtonClick && (React.createElement(ActionList.Item, { onSelect: onKeyboardShortcutsButtonClick }, "Keyboard Shortcuts")),
                                onSettingsButtonClick && (React.createElement(ActionList.Item, { onSelect: onSettingsButtonClick }, "Settings")))))))))));
};
AppToolbar.defaultProps = {
    color1: "",
    color2: "",
    dark: true,
    full: false,
};
export default AppToolbar;
//# sourceMappingURL=AppToolbar.js.map