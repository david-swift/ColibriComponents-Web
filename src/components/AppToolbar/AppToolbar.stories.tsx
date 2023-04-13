import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppToolbar } from "../";
import {
  Button,
  ActionList,
  Header,
  ThemeProvider,
  BaseStyles,
} from "@primer/react";
const logoPath = require("../../stories/assets/octicon24.svg") as string;

const meta = {
  title: "ColibriComponents/AppToolbar",
  component: AppToolbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "AppToolbar is a component that provides a toolbar for an app. There is information about the creator on the left, and the main menu on the right. In between you can add custom items.",
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <BaseStyles>
          <Story />
        </BaseStyles>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof AppToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    creatorLink: "https://github.com/david-swift",
    name: "AppToolbar",
    color1: "rgba(61, 255, 255, 1)",
    color2: "rgba(63, 33, 251, 1)",
    dark: true,
    full: false,
    creatorIcon: <img src={logoPath} />,
    menu: <ActionList.Item>Custom Item</ActionList.Item>,
    children: (
      <>
        <Header.Item full>
          <Button>Important Action</Button>
        </Header.Item>
      </>
    ),
    onKeyboardShortcutsButtonClick: () => console.log("Shortcuts"),
    onSettingsButtonClick: () => console.log("Settings"),
  },
};

export const NoMainMenu: Story = {
  args: {
    ...Default.args,
    menu: undefined,
    onKeyboardShortcutsButtonClick: undefined,
    onSettingsButtonClick: undefined,
  },
};
