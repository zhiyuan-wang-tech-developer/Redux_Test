const initialState = []

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ALBUM': {
            return [
                ...state,
                action.payload
            ]
        }
        default: {
            return state
        }
    }
}

/**
 * @summary a genre selector function
 * @param state the redux store's state, which is an array.
 * @returns an object that counts the number of albums for each known genre
 * 
 */
function getGenreStatistics(state) {
    if (state.length > 0) {
        const genreStatistics = state.reduce((genreCounter, element) => {
            // genreCounter = {} at the 1st iteration
            // check if genreCounter object contains element.genre as key.
            if (element.genre in genreCounter)
                // The element's genre is already contained as a key, so increment key's value.
                genreCounter[element.genre] += 1
            else
                // The element's genre is not included as a key, so add the element's genre as key and assign 1 as value.
                genreCounter[element.genre] = 1
            // return genreCounter for the next iteration.
            return genreCounter
        }, {})
        return genreStatistics
    }
    else {
        return {}
    }
}

module.exports = { reducer, getGenreStatistics }