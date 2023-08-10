# Getting Started Project Rick and Morty with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment variables

If you use Create React App (CRA) to set up your React application, it uses the dotenv library to read environment variables found in any .env file and loads them into the `process.env` object. This ensures that each variable can be accessed using `process.env` as read-only values within the codebase.

Node.js also offers a built-in environment variable called NODE_ENV that represents our application’s environment. In React, its value changes based on the script that’s running. Running npm start changes the environment value to “development.” Running npm test changes it to “test,” and running npm run build changes it to “production.”

This variable is special as you can use it to access different environment configurations. For example, suppose you have different databases for your production and development builds (to prevent interference). In that case, you can use NODE_ENV to access certain variables based on the environment. Here’s an example:

```
function fetchDatabaseResponse () {
  if (process.env.NODE_ENV == 'production') {
    return fetch(`${process.env.REACT_APP_PRODUCTION_DATABASE_URL}/users`)
  } else {
    return fetch(`${process.env.REACT_APP_DEVELOPMENT_DATABASE_URL}/users`)
  }
}
```

This already uses React by default, and it would no longer be necessary to specify if NODE_ENV is in production or in development since with npm start or npm run build it would show if it is in envelopment or production.

Now we have to be careful with our naming convention of our variables as react only allows variables beginning with ``REACT_APP`` to be considered when your application is trying to access the environment variables and it does this to avoid any collision of system variables and exposing them.

- Make sure to RESTART your application when you add/update any environment variables.
- DO NOT store any private keys in environment since the environment variables are embedded into the build allowing them to be accessible when inspected. NOTE: Keep in mind that for these private keys will be available on the server, while the other variables will be available on the client.
- Add your .env to .gitignore, trust me you don’t want to commit it.
- You can embed your .env on your hosting machine.

You can custom your .env files depending on the application’s environement :

.env is the default environement, you can use these to specify your environment :

```
.env.development .env.test .env.production
```

Check this documentation to customize your environment variables files.

#### More information

- https://www.architect.io/blog/2022-08-16/react-environment-variables-developers-guide/
- https://upmostly.com/tutorials/how-to-use-environment-variables-in-reactjs-applications
- https://onboardbase.com/blog/react-env/
- https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used

Files on the left have more priority than files on the right:

npm start: .env.development.local, .env.local, .env.development, .env
npm run build: .env.production.local, .env.local, .env.production, .env
npm test: .env.test.local, .env.test, .env (note .env.local is missing)

.env: when you put your environment variables in a file called simply .env. These variables will apply to all environments (development, test and production)

.env.local: Instead, the .env.local file is used to all environment(development and production), if you run npm start, can work in the development environment.

However, for development in a real production environment, it is more common to use just .env.production that env.local.production.

## React Testing Library(RTL)

React Testing Library is a tool for testing React applications in a way that they resemble how users interact with them. Instead of examining internal details of your components, it focuses on testing actions that a user would take, such as clicking buttons or checking visual elements. Its API is easy to use and is based on how users find and use elements in the interface. Important, it doesn't care about how a component is built internally, which makes test more resistant to change. It also  simplifies testing of asynchronous actions and integrates with other popular testing libraries like Jest and DOM Testing Library. In short, the React Testing Library helps build more reliable apps by focusing on the user experience and making testing simpler and more robust.

## Enzyme

Enzyme is another library for testing React applications, but it focuses on accessing and manipulating internal details of components. It has three API levels for different depths of testing and is more concerned with implementation details. You can use it with different renderes and easily extend it. By comparison, the React Testing Library focuses on testing user behavior and is simpler. The choice between the two depends on whether you prefer more details tests(Enzyme) or focused on the user experience (React Testing Library). Both are popular in the React community.

## Y Jest?

Sure, you can use Jest to test your React apps without the React Testing Library (RTL) or Enzyme. Jest is a popular JavaScript testing framework that is fully compatible with React. It allows you to write and run tests effectively without requiring additional libraries. Jest has powerful tools for unit, integration, and component testing in React. You can use assert functions, mocks, and other Jest features to confirm the behavior and functionality of your components.

### Jest and EMC6

Segun la [documentation](https://jestjs.io/docs/ecmascript-modules), Jest se envía con soporte experimental para módulos ECMAScript (ESM). Realizar lo siguiente:





#### More information

- puede escribirse asi jes.config.js o jes.config.mjs,  jes.config.json
- puede escribirse .babelrc o .babelrc.js
- colocar en las configuraciones de jest.config.js colocar identity-obj-proxy para el css.
- revisa la documentacion de redux y react para solucionar los problemas sobre el testing.

- More important: https://jestjs.io/docs/ecmascript-modules (write documentation)
- https://github.com/jestjs/jest/blob/main/jest.config.mjs
- https://jestjs.io/docs/29.1/webpack
- https://jestjs.io/docs/webpack#mocking-css-modules
- https://stackoverflow.com/questions/71207221/babel-config-js-only-for-jest/71290964#71290964
- https://jestjs.io/docs/configuration
- https://testing-library.com/docs/react-testing-library/setup/
- https://redux.js.org/usage/writing-tests#components
- https://bobbyhadz.com/blog/jest-typeerror-cannot-read-properties-of-undefined-reading-testenvironmentoptions
- https://jestjs.io/docs/code-transformation
- https://jestjs.io/docs/tutorial-react#dom-testing
- https://jestjs.io/docs/getting-started#using-babel
- https://www.js-howto.com/jest-usenavigate-may-be-used-only-in-the-context-of-a-router/
- https://www.js-howto.com/how-to-mock-react-router-dom-hooks-in-jest/


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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


