import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.FC<import("./CommandsWrapper.types").CommandsWrapperProps>;
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
        commands: import("./CommandsWrapper.types").CommandsGroup[];
        children: React.ReactNode;
        isOpen: boolean;
        setIsOpen: (isOpen: boolean) => void;
        canFilter?: boolean | undefined;
        hasDividers?: boolean | undefined;
    }>) => JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: StoryObj;
export declare const Static: Story;
export declare const HiddenGroup: Story;
export declare const NoCommands: Story;
export declare const SpecialSymbols: Story;
