import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
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
        component:
          "UndoProvider is a component that provides undo & redo functionality to its children.",
      },
    },
  },
} satisfies Meta<typeof UndoProvider<number>>;

export default meta;

const Dynamic = () => {
  const [value, setValue] = useState(0);
  return (
    <UndoProvider
      value={value}
      onChange={setValue}
      children={(props) => {
        const { value, setValue, undo, redo, canUndo, canRedo } = props;
        return (
          <ThemeProvider>
            <BaseStyles
              style={{
                minHeight: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonGroup>
                <Button onClick={(_) => setValue(Math.random())}>
                  {value}
                </Button>
                <Button onClick={undo} disabled={!canUndo}>
                  Undo
                </Button>
                <Button onClick={redo} disabled={!canRedo}>
                  Redo
                </Button>
              </ButtonGroup>
            </BaseStyles>
          </ThemeProvider>
        );
      }}
    />
  );
};

export const Default: StoryObj = {
  render: () => <Dynamic />,
};