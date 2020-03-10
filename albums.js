const redux = require('redux')
const { reducer } = require('./albums_reducer')

const store = redux.createStore(reducer)
Console.log('Initial state of the store: ', store.getState())

store.subscribe(() => {
    Console.log('The state just changed to: ', store.getState())
})