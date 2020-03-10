const redux = require("redux");
const { reducer } = require("./reducer");

const store = redux.createStore(reducer);
console.log('Initial state of the store:', store.getState());

/** Run the callback function every time the reducer is passed an action */
store.subscribe(() => {
    console.log("The state just changed to:", store.getState());
});

/** Send the action object to the reducer */
store.dispatch(
    {
        type: "ADD",
        payload: 42
    }
);

store.dispatch(
    {
        type: "REPLACE",
        payload: 5
    }
);