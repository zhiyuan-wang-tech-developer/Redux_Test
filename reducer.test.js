/**
 * run: npm run test .\reducer.test.js
 */
const redux = require('redux');
const { reducer } = require('./reducer');

test('Initial state should be \"0\"', () => {
    const store = redux.createStore(reducer);
    expect(store.getState()).toBe(0);
});

test('\"ADD\" should work as expected', () => {
    const store = redux.createStore(reducer);

    store.dispatch({
        type: 'ADD',
        payload: 1
    });
    expect(store.getState()).toBe(1);

    store.dispatch({
        type: 'ADD',
        payload: 99
    });
    expect(store.getState()).toBe(100);
});

test('\"REPLACE\" should work as expected', () => {
    const store = redux.createStore(reducer);

    [7, 9999, 0, 35].map((num) => {
        store.dispatch({
            type: 'REPLACE',
            payload: num
        });
        expect(store.getState()).toBe(num);
    });
});

test('\"SQUARE\" should work as expected', () => {
    const store = redux.createStore(reducer);

    store.dispatch({
        type: 'REPLACE',
        payload: 3
    });
    expect(store.getState()).toBe(3);

    store.dispatch({
        type: 'SQUARE',
    });
    expect(store.getState()).toBe(9);

    store.dispatch({
        type: 'REPLACE',
        payload: 10
    });
    expect(store.getState()).toBe(10);

    store.dispatch({
        type: 'SQUARE'
    });
    expect(store.getState()).toBe(100);

    store.dispatch({
        type: 'SQUARE'
    });
    expect(store.getState()).toBe(10000);
});