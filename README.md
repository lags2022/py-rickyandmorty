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

.env: Cuando colocas tus variables de entorno en un archivo llamado simplemente .env, estas variables se aplicarán a todos los entornos (desarrollo, pruebas y producción).

.env.local: En cambio, el archivo .env.local se utiliza para definir variables de entorno específicas de desarrollo. Las variables definidas aquí se cargarán cuando ejecutes npm start y trabajarán en el entorno de desarrollo. Sin embargo, no afectarán las pruebas (npm test) ni la producción (npm run build), lo que permite tener configuraciones específicas para tu máquina local sin interferir con los otros entornos.

Los archivos .env.development.local, .env.production.local y .env.local se refieren a archivos de configuración de entorno que están destinados a ser utilizados en entornos de desarrollo y producción locales. Estos archivos permiten definir variables de entorno específicas para cada entorno (desarrollo y producción) en tu proyecto.

Recuerda que las variables de entorno que definas en .env.local se aplicarán en todos los entornos (desarrollo y producción) cuando estás usando Create React App. Sin embargo, si necesitas variables específicas para cada entorno, puedes seguir utilizando los archivos .env.development.local y .env.production.local según corresponda.

Por otro lado, .env.production.local podría ser utilizado si necesitas configurar variables de entorno específicas para tu entorno de producción local, es decir, cuando estás probando tu aplicación en tu máquina antes de desplegarla en producción. Sin embargo, para el despliegue en un entorno de producción real, es más común utilizar solo .env.production.

Cuando ejecutas npm start para desarrollar localmente, CRA automáticamente cargará las variables de entorno desde el archivo .env.development.local si existe. Si no existe, utilizará el archivo .env.local.

Cuando ejecutas npm run build para crear la versión optimizada de tu aplicación para producción, CRA cargará las variables de entorno desde el archivo .env.production.local si existe. Si no existe, utilizará el archivo .env.local. En ambos casos, NODE_ENV se establecerá en production.

Cuando ejecutas npm test, Create React App utiliza las configuraciones de entorno definidas en el archivo .env.development. Esto es así porque las pruebas generalmente se ejecutan en el entorno de desarrollo para facilitar la depuración y la identificación de problemas. Si deseas definir configuraciones específicas para las pruebas, puedes utilizar el archivo .env.test.local. Las variables definidas en este archivo se cargarán automáticamente al ejecutar las pruebas con npm test.

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
