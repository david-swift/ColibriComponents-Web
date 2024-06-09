> [!NOTE]
> This project is no longer maintained.

<p align="center">
  <img width="256" alt="ColibriComponents Icon" src="Icons/ColibriComponentsIcon.png">
  <h1 align="center">ColibriComponents</h1>
</p>

<p align="center">
  <a href="https://github.com/david-swift/ColibriComponents-Web">
  GitHub
  </a>
  ·
  <a href="https://david-swift.github.io/ColibriComponents-Web">
  Contributor Docs
  </a>
</p>

_ColibriComponents_ contains some components I often use in my React projects.

## Table of Contents

- [Elements][1]
- [Installation][2]
- [Usage][3]
- [Thanks][4]

## Elements

| Name            | Description                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| AppToolbar      | A toolbar for an app with information about the creator, custom items for actions and a main menu.               |
| CommandsWrapper | A component that manages the keyboard shortcuts of an app. It can also show a palette of the available commands. |
| UndoProvider    | A component that provides undo and redo functionality to its children.                                           |

## Installation

1. Navigate to your projects in the command line.
2. Run `npm install https://github.com/david-swift/ColibriComponents-Web`.

## Usage

### AppToolbar
Add a toolbar to an app.

```tsx
function MyApp() {
    return <>
        <AppToolbar
            color1="#3CFEFF"
            color2="#3F22F9"
            creatorIcon={<img src="/path/to/icon" alt="Creator Icon" />}
            creatorLink="https://link.to/website"
            name="AppName"
        >
            <Header.Item>
                <Button>Action</Button>
            </Header.Item>
        </AppToolbar>
        My App
    </>;
}
```

### CommandsWrapper
Add keyboard shortcuts to an app.

```tsx
function MyApp() {
  const [isOpen, setIsOpen] = useState(false)
  return <>
    <CommandsWrapper
        commands={
          [
            commandsGroup("TestApp", [
                command(
                    "Settings",
                    ["preferences", "options"],
                    noModifiersShortcut("Comma"),
                    () => console.log("Open Settings")
                ),
                command(
                    "Commands",
                    ["shortcuts", "keyboard"],
                    keyboardShortcut(false, true, "Space"),
                    () => setIsOpen(!isOpen)
                ),
            ])
          ]
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
    >
      <div>My App</div>
    </CommandsWrapper>
  </>
}
```

### UndoProvider
Add undo and redo functionality to an app.

```tsx
function MyApp() {
    const [value, setValue] = useState(0);
    return (
        <UndoProvider
            value={value}
            onChange={setValue}
            children={(props) => {
                // Use "value" for getting the state.
                // Use "setValue" for setting the state.
                // Call "undo" and "redo" for undoing and redoing changes.
                // "canUndo" and "canRedo" are booleans that indicate whether it is possible to undo or redo changes.
                const { value, setValue, undo, redo, canUndo, canRedo } = props;
                return <>My App</>
            }}
        />
    );
}
```

## Thanks

### Dependencies
- [Babel][5] licensed under the [MIT license][6]
- [Primer React][7] licensed under the [MIT license][8]
- [Storybook][9] licensed under the [MIT license][10]
- [Storybook Testing Library][11] licensed under the [MIT license][12]
- [Definitely Typed][13] licensed under the [MIT license][14]
- [gh-pages][15] licensed under the [MIT license][16]
- [prop-types][17] licensed under the [MIT license][18]
- [React][19] licensed under the [MIT license][20]
- [React Hotkeys Hook][21] licensed under the [MIT license][22]
- [Styled Components][23] licensed under the [MIT license][24]
- [TypeScript][25] licensed under the [Apache License 2.0][26]

### Other Thanks
- The [contributors][27]
- Madushika Perera: Article [Build a component library with React and TypeScript][28]
- Armin Yazdani: Article [How to Deploy Storybook to GitHub Pages][29]

[1]:	#Elements
[2]:	#Installation
[3]:	#Usage
[4]:	#Thanks
[5]:	https://github.com/babel/babel
[6]:	https://github.com/babel/babel/blob/main/LICENSE
[7]:	https://github.com/primer/react
[8]:	https://github.com/primer/react/blob/main/LICENSE
[9]:	https://github.com/storybookjs/storybook
[10]:	https://github.com/storybookjs/storybook/blob/next/LICENSE
[11]:	https://github.com/storybookjs/testing-library
[12]:	https://github.com/storybookjs/testing-library/blob/future/LICENSE
[13]:	https://github.com/DefinitelyTyped/DefinitelyTyped
[14]:	https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE
[15]:	https://github.com/tschaub/gh-pages
[16]:	https://github.com/tschaub/gh-pages/blob/main/LICENSE
[17]:	https://github.com/facebook/prop-types
[18]:	https://github.com/facebook/prop-types/blob/main/LICENSE
[19]:	https://github.com/facebook/react
[20]:	https://github.com/facebook/react/blob/main/LICENSE
[21]:	https://github.com/JohannesKlauss/react-hotkeys-hook
[22]:	https://github.com/JohannesKlauss/react-hotkeys-hook/blob/main/LICENSE
[23]:	https://github.com/styled-components/styled-components
[24]:	https://github.com/styled-components/styled-components/blob/main/LICENSE
[25]:	https://github.com/Microsoft/TypeScript
[26]:	https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt
[27]:	Contributors.md
[28]:	https://blog.logrocket.com/build-component-library-react-typescript/
[29]:	https://medium.com/swlh/how-to-deploy-storybook-to-github-pages-4894097d49ab
