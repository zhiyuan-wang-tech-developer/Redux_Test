/**
 * run: npm run test .\app_reducer.test.js
 */
const redux = require('redux')
const { reducer } = require('./app_reducer')

test('User is initially not logged in', () => {
    const store = redux.createStore(reducer)
    // toBe() tests whether the object references are the same.
    expect(store.getState().user).toBe(null)
})

test('User can log in', () => {
    const store = redux.createStore(reducer)
    store.dispatch({
        type: 'LOGIN',
        payload: {
            firstName: 'Zhiyuan',
            lastName: 'Wang',
            age: 34
        }
    })
    // toEqual() tests whether the objects are structurally same.
    expect(store.getState().user).toEqual({
        firstName: 'Zhiyuan',
        lastName: 'Wang',
        age: 34
    })
})

test('Logout works', () => {
    const store = redux.createStore(reducer)
    store.dispatch({
        type: 'LOGIN',
        payload: {
            firstName: 'Zhiyuan',
            lastName: 'Wang',
            age: 34
        }
    })
    store.dispatch({
        type: 'LOGOUT'
    })
    expect(store.getState().user).toEqual(null)
})

test('Updating the logged in user works', () => {
    const store = redux.createStore(reducer)
    store.dispatch({
        type: 'LOGIN',
        payload: {
            firstName: 'Zhiyuan',
            lastName: 'Wang',
            age: 34
        }
    })
    store.dispatch({
        type: 'UPDATE_LOGGEDIN_USER',
        payload: {
            age: 25
        }
    })
    expect(store.getState().user).toEqual({
        firstName: 'Zhiyuan',
        lastName: 'Wang',
        age: 25        
    })
    store.dispatch({
        type: 'UPDATE_LOGGEDIN_USER',
        payload: {
            firstName: 'Vixi',
            lastName: 'Liu'
        }
    })
    expect(store.getState().user).toEqual({
        firstName: 'Vixi',
        lastName: 'Liu',
        age: 25        
    })
})

test('Switching to and from dark mode works', () => {
    const store = redux.createStore(reducer)
    expect(store.getState().darkMode).toBe(false)
    store.dispatch({
        type: 'TOGGLE_DARK_MODE',
    })
    expect(store.getState().darkMode).toBe(true)
    store.dispatch({
        type: 'LOGIN',
        payload: {
            firstName: 'Vixi',
            lastName: 'Liu',
            age: 25
        }
    })
    expect(store.getState().darkMode).toBe(true)
    store.dispatch({
        type: 'LOGOUT',
    })
    expect(store.getState().darkMode).toBe(true)
    store.dispatch({
        type: 'TOGGLE_DARK_MODE',
    })
    expect(store.getState().darkMode).toBe(false)
})