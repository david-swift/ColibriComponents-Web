import { ReactElement, ReactNode } from 'react';
/**
 * The props of the AppToolbar component.
 */
export interface AppToolbarProps {
    /**
     * The first color of the gradient.
     */
    color1?: string;
    /**
     * The second color of the gradient.
     */
    color2?: string;
    /**
     * Whether the toolbar is always displayed with a dark color scheme.
     */
    dark?: boolean;
    /**
     * Whether the creator icon and app name take up as much space as possible.
     */
    full?: boolean;
    /**
     * The creator's icon.
     */
    creatorIcon: ReactElement;
    /**
     * Link to the creator's website.
     */
    creatorLink: string;
    /**
     * The app's name.
     */
    name?: string;
    /**
     * The main menu.
     */
    menu?: ReactNode;
    /**
     * The function to call when the keyboard shortcuts button is clicked.
     */
    onKeyboardShortcutsButtonClick?: () => void;
    /**
     * The function to call when the settings button is clicked.
     */
    onSettingsButtonClick?: () => void;
    /**
     * The content of the toolbar.
     */
    children: ReactNode;
}
