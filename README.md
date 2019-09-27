#### React Hooks based scalable application.

### DEMO

[Click here for demo](https://silken-physics-669.firebaseapp.com)

#### Scripts
`yarn`
To Install the dependencies

`yarn start`
To Start the application

`yarn test`
Launches the test runner in the interactive watch mode.<br>
This will assset all the test cases and prepare the tests status report in application

`yarn run build`
Command to create an optimised create-react-app static deployed-ready build.

# Architecture

#####  Styling
   - Sassy CSS [`Nesting`, `Mixins` , etc]
   - Everything in CSS Built from scratch, No external libraries OR css were being used
   - CSS is completly configurable with theme [`$primary` and `$secondary` colors], All other colors derives from these two main color, which can be configured and changed on `styles/variables.scss`
   - Completly Responsive with Sassy `Mixins`, relatives font-sizes are used to give the layout a better look on all devices and screens.

##### Locales
   - As a genral strategy, I tend to use translations in allmost all of my applications, May be some apps doesnt need translations, but still we need to keep track of the text labels which are being used across application to be centralised.
   - This app has a locales setup and using translation across application is a breeze, thanks to the `useTranslations` hook which has a `t` function on it which can accessed from anywhere in the app, thanks to the `react context api`
   - Locales labels can be nested.
 ##### Testing
   - Run tests : `yarn test`
   - Test have been written with periodic regressions.
   - Components were tested with `Enzyme` shallow wrapper with snapshot matches
   - Actions/Constants/Configs and other pure functions were tested on expected outputs
 ##### Redux
   -  I tend to use basic redux and keep an `app` reducers for managing different app wide settings
   -  One primary use of that reducer is to manage different `Loaders` , `Messages` and `Notifications` across application.
   -  Artists data have been kept in a `data` reducer to kind of cache it untill next request 
 ##### Configs
   -  App wide configs like constants, typings, api configs are kept in a `/configs` with tests in placed.
 ##### Services
   -  A General `API` service `abstraction` is being written to handle API request across application which handles API requests and dispatch loader status, messages onto redux which will update the loader state and messages state on the UI.
   -  Additional services for api endpoints are written for entities like  `artists` which make use of this service.
 ##### Utils
   -  Utils has the helper functions for various tasks and sample-data if required.
 ##### Contexts
   -  Like redux, I also tend to use a basic `AppContext` which might hold some basic data on top like `Language` innformation or `Theme` informations which the children on any level can access and update their state.
   -  Thanks to Hooks for providing a neat API to `consume` this provided data using `useContext` down the component tree.
 ##### Messages
   -  Messages are kept inside Redux to keep track of the app wide message and accumulate the dispatch messages and relevant component is connected using `useSelector` to updpate its UI on messages change in redux.
 ##### Typings
   -  Typescript has been used to create statically typed app, which has development advantages and keep the app functionality consistent.

 ##### Components structure
   -  Components inside `/components` have been used as containers and `UI` components
   -  Containers hold the data, handle side effects initiating network request
   -  UI components just display the provided data making use of translations for labels.
   -  Ui components are kept neat and made re-usable across app. which makes them esily testable.

 ##### Routing
   -  Routing is another functionality, which I tend to keep basic routing as part of all application, because if application scale in future, we build on top of that routing.






