# To-do List Application

This web application helps you manage tasks effortlessly with features like task addition, deletion, and completion toggles—all presented in a user-friendly interface. 

Built with modern React practices like custom hooks and styled-components, it combines functionality with sleek design to keep your productivity on track.

![](https://github.com/akutuzova11/react-to-do-list/blob/main/gif%20for%20readme_1.gif)

## Demo

https://akutuzova11.github.io/react-to-do-list/

## Built with

### Languages & Libraries
- **HTML**
- **CSS**
- **JavaScript (ES6+)**
- **JSX**
- **React**

### React Features
- **React Router:** for navigating between application views
  - `useParams`
  - `useLocation`
  - `useHistory`
- **React Hooks:**
  - `useState`
  - `useEffect`
  - `useRef`
- **Custom Hooks:**
  - `useTasks`
  - `useLocalStorageState`

### State Management
- **Redux Toolkit:** centralized and efficient state management
- **Redux-Saga:** handles side effects like async calls with declarative effects

### Styling
- **Styled Components:**
  - `GlobalStyle`
  - `Theme`
- **Normalize CSS:** to standardize styles across browsers

### Layout & Responsiveness
- **CSS Layout Techniques:**
  - Grid
  - Flexbox
- **Responsive Design:**
  - Media Queries

### Additional Features
- **localStorage** for data persistence
- **Immutability** practices to ensure state consistency

## Usage

1. Open the web application in your browser.
2. Enter a task in the **"Co jest do zrobienia?"** input field.
3. Click the **"Dodaj zadanie"** button to add the task to your list.
4. View your tasks displayed in the **"Lista zadań"** section.
5. Click the **checkmark button** to toggle the task's completion status or the **trash can icon** to delete it.
6. Click the **"Ukończ wszystkie"** button to mark all tasks as completed.
7. Use the **"Ukryj ukończone"** button to hide or show completed tasks.

Note: The application interface is in Polish, and tasks are saved locally in your browser using `localStorage`.

## Contributing

Contributions to improve this to-do list application are welcome! 

If you have any suggestions, feature requests, or bug reports, please feel free to open an issue or submit a pull request.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

For more detailed documentation on Create React App, see the [official guide](https://create-react-app.dev/docs/getting-started/).

