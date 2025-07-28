# My Shortcuts

## 1. Essential VS Code Shortcuts (Windows/Linux)

Key shortcuts for faster navigation, editing, and project management in VS Code.

| Shortcut                | Description            |
| ----------------------- | ---------------------- |
| `Ctrl + P`              | Quick open any file    |
| `Ctrl + Shift + P`      | Open command palette   |
| `Ctrl + B`              | Toggle sidebar         |
| `Ctrl + ``              | Toggle terminal        |
| `Alt + Up/Down`         | Move line up/down      |
| `Shift + Alt + Up/Down` | Duplicate line         |
| `Ctrl + /`              | Toggle line comment    |
| `Shift + Alt + A`       | Toggle block comment   |
| `Alt + Z`               | Toggle word wrap       |
| `Ctrl + S`              | Save file              |
| `Ctrl + W`              | Close tab              |
| `Ctrl + Tab`            | Switch tabs            |
| `Alt + Shift + F`       | Format document        |
| `Ctrl + D`              | Select next occurrence |
| `Ctrl + Shift + L`      | Select all occurrences |
| `Alt + Click`           | Add multiple cursors   |
| `F12`                   | Go to definition       |
| `Shift + F12`           | Find all references    |
| `Ctrl + .`              | Quick fix/refactor     |
| `F2`                    | Rename symbol          |
| `Ctrl + F`              | Find in file           |
| `Ctrl + Shift + F`      | Search across project  |

## 2. ES7+ React/Redux Snippets (Windows/Linux)

Useful snippets for React development. Type the prefix and press `Tab` to expand.

### 2.1. React Functional Components & Hooks

| Prefix  | Description                               | Example Output                                                                   |
| ------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| `rafce` | Arrow function component (default export) | `const MyComponent = () => { return <div></div>; }; export default MyComponent;` |
| `rfc`   | Functional component                      | `function MyComponent() { return <div></div>; } export default MyComponent;`     |
| `us`    | useState hook                             | `const [state, setState] = useState(initialState);`                              |
| `ue`    | useEffect hook                            | `useEffect(() => {}, []);`                                                       |
| `ucb`   | useCallback hook                          | `const memoizedCallback = useCallback(() => {}, []);`                            |
| `umm`   | useMemo hook                              | `const memoizedValue = useMemo(() => {}, []);`                                   |
| `ur`    | useRef hook                               | `const ref = useRef(initialValue);`                                              |

### 2.2. Imports & Exports

| Prefix | Description    | Example Output               |
| ------ | -------------- | ---------------------------- |
| `imr`  | Import React   | `import React from 'react';` |
| `imp`  | Import module  | `import name from 'module';` |
| `exp`  | Default export | `export default name;`       |

### 2.3. Console Logs

| Prefix | Description           | Example Output                                                    |
| ------ | --------------------- | ----------------------------------------------------------------- |
| `clg`  | Console log           | `console.log(object);`                                            |
| `clj`  | Pretty-print JSON log | `console.log('objectName', JSON.stringify(objectName, null, 2));` |

### 2.4. React Class Components (Legacy)

| Prefix | Description       | Example Output                    |
| ------ | ----------------- | --------------------------------- |
| `rcc`  | Class component   | Basic class component boilerplate |
| `cdm`  | componentDidMount | `componentDidMount = () => {};`   |
| `sst`  | setState          | `this.setState({});`              |

### 2.5. Redux

| Prefix      | Description    | Example Output                           |
| ----------- | -------------- | ---------------------------------------- |
| `redux`     | Import connect | `import { connect } from 'react-redux';` |
| `rxreducer` | Redux reducer  | Basic reducer structure                  |
| `rxaction`  | Redux action   | Basic action structure                   |
