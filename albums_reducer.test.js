/**
 * run: npm run test .\albums_reducer.test.js
 */
const redux = require('redux')
const { reducer, getGenreStatistics } = require('./albums_reducer')

test('Initial state is an empty array', () => {
    const store = redux.createStore(reducer)
    expect(store.getState()).toEqual([])
})

test('Adding new albums possible', () => {
    const store = redux.createStore(reducer)
    store.dispatch({
        type: 'ADD_ALBUM',
        payload: {
            title: 'The Road to Ithaca',
            artist: 'Shai Maestro',
            genre: 'jazz'
        }
    })
    store.dispatch({
        type: 'ADD_ALBUM',
        payload: {
            title: 'Landmarks',
            artist: 'Brian Blade & The Fellowship Band',
            genre: 'jazz'
        }
    })
    expect(store.getState()).toEqual([
        {
            title: 'The Road to Ithaca',
            artist: 'Shai Maestro',
            genre: 'jazz'
        },
        {
            title: 'Landmarks',
            artist: 'Brian Blade & The Fellowship Band',
            genre: 'jazz'
        }
    ])
})

test('Get genre statistics function works', () => {
    const store = redux.createStore(reducer)
    expect(getGenreStatistics(store.getState())).toEqual({})
    const albums = [
        {
            title: "The Road to Ithaca",
            artist: "Shai Maestro",
            genre: "jazz"
        },
        {
            title: "Landmarks",
            artist: "Brian Blade & The Fellowship Band",
            genre: "jazz"
        },
        {
            title: "Immigrance",
            artist: "Snarky Puppy",
            genre: "fusion"
        },
        {
            title: "Moderat",
            artist: "Moderat",
            genre: "electronica"
        }
    ]
    albums.forEach((album) => {
        store.dispatch({
            type: 'ADD_ALBUM',
            payload: album
        })
    })
    expect(getGenreStatistics(store.getState())).toEqual({
        jazz: 2,
        fusion: 1,
        electronica: 1
    })
})