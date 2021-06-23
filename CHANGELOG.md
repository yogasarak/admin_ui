# Change Log

### Feature organization

Source code is organized in this order:

1. Feature/service (e.g. "sign-in", "about")
2. Types (e.g. "components")

If it doesn't have a `Container` suffix it is not a presentational component.

`components/NavBar` is an example of a reusable dummy component that can be used with other features.

Each feature has its own action and reducer file.

### Tests

Jest is used for test. Each feature has test written in the same directory as the features being tested, with the same prefix to `.test.js` .

### Mock Api

A simple mock api client that stores `employees` in an in-memory array.
No optimizations or persistence. All "async" requests are promises that resolves immediately, simulating a network request.
By instantiating the class we create a singleton instance: we are using a single api client for all the actions.
The dependency injection of this class is in the employee table `actions`.

### Thunks

The value of redux is it is synchronous, pure and therefor deterministic, producing the same input and same output. This gives us a deterministic way to follow the data flow. Because I wanted to emulate a real network request, I wrote asynchronous methods in the Mock Api Client. This drove me to have to use and learn Redux Thunk.
Thunks makes it so async / un-pure things can happen and gives dispatches for those actions.

_Redux Thunk_ works as a `Higher Order Function`: a function that returns a function; It is middleware that compiles and catches async events.

"Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters."
-Redux Thunks Motivation

Action creators create objects → objects are dispatched to the store → the store invokes reducers → reducers generate new state → listeners are notified of state updates.

### Actions

When dealing with actions there are two use cases:

1. We want the action itself (to dispatch it)
2. We want the action type (to use in a reducer)

For the sake of clarity and consistency I've organized types and actions
into two objects:
`ActionType` and `Action`

This allows us to replace this:

```javascript
import { ACTION_TYPE1, ACTION_TYPE2, ACTION_TYPE3, ... } from 'actions'
```

with this:

```javascript
import { ActionType } from "actions"
```

The result is cleaner imports, better autocompletion, and improved organization within the actions.js file.
It also lays out all of my actions types.

In some cases there are switch case “fall through”...putting cases next to each other like that means “this case or this case”

```javascript
  case ActionType.cancelEditEmployeeDialog:
    case ActionType.updatedEmployee:
      return {...state, isShowingEditEmployee: false}
```

### Action creators

In redux an _action creator_ is a function that returns an action. Calling an action creator only produces an action and returns it; it does not dispatch it.

We don't know whether something is an action or action creator, it's case-by-case.
So writing all actions as action creators, creates consistency: every action will be created the same way: by calling a function. Some might take arguments, but they are all still functions. As a codebase grows consistency becomes increasingly difficult to maintain while increasingly important for avoiding mistakes and easing development.

This means a regular action like this:

```javascript
const Action = {
  someAction: {
    type: "SOME_ACTION",
  },
}
dispatch(Action.someAction)
```

would become this:

```javascript
const Action = {
  someAction: () => {
    return {
      type: "SOME_ACTION",
    }
  },
}
dispatch(Action.someAction())
```

### Access control

Each `feature/` directory has a `index.js` file that will represent every module we want to import.
`index.js` allows us to leave off the file name:

```javascript
import signIn from "features/sign-in"
```

Inside `index.js` we will re-export all of the _public_ constants, objects, and functions:

```javascript
export { default as busy } from "./busy"
```

### JsonConfig

JsConfig affects how we import modules everywhere in the app & how to resolve modules.
JsConfig tells our environment (node), (VSCode), or compilers (babel), how to handle the javascript files. In particular, it lets us set a base path for imports so we don’t have to use relative imports everywhere. jsconfig.json should be in the root directory.
`“module resolution”` = dropping the `./` or the `../../../`

### rootReducer

The rootReducer points to employeeTableReducer and SignInReducer. Since redux only sees one reducer.

As the apps grows more complex, we want to split our reducing function into separate functions, each managing independent parts of the state.
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore. The resulting reducer calls every child reducer, and gathers their results into a single state object.

### AppRouter

`Protected routes`
This protects routes to the features of the application from users who don’t have the proper authorization, i.e. they have not yet signed in.
To figure out if the user is authenticated. I just used a dummy object to mock a auth service. The user gets redirected back to sign-in until they are 'authorized' to get directed to the Employee Table (it renders the “component” prop).

### Hooks

Originally I wrote this app with exclusively functional components and hooks, instead of class components for clear more precise code, readability and testability.
When I added redux, the only hook used is `UseEffect` in container components dispatching to the store.
`mapDispatchToProps` is computed before `useEffect`, this passes in props to the component. The component has be called (and get props) before it can even execute `useEffect`.

### Styling

Material-UI, similar to Styled Components, uses a similar modality of writing CSS in Javascript inside the component. I like the clean style of Material-UI and through refactoring, continue to simplify and reuse components for better, more consistent UI.

### Prettier

Prettier Rules

{
"singleQuote": true,
"jsxSingleQuote": true,
"semi": false,
"bracketSpacing": true,
"jsxBracketSameLine": true,
}
