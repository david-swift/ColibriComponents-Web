import { FC } from "react";
import { AppToolbarProps } from "./AppToolbar.types";
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
declare const AppToolbar: FC<AppToolbarProps>;
export default AppToolbar;
