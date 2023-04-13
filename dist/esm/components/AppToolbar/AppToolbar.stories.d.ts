import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.FC<import("./AppToolbar.types").AppToolbarProps>;
    tags: string[];
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
        color1?: string | undefined;
        color2?: string | undefined;
        dark?: boolean | undefined;
        full?: boolean | undefined;
        creatorIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        creatorLink: string;
        name?: string | undefined;
        menu?: React.ReactNode;
        onKeyboardShortcutsButtonClick?: (() => void) | undefined;
        onSettingsButtonClick?: (() => void) | undefined;
        children: React.ReactNode;
    }>) => JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const NoMainMenu: Story;
