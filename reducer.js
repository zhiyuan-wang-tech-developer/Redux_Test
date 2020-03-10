const initialState = 0;

/** The reducer will initiate and update the state. */
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD': {
            return state + action.payload;
        }
        case 'REPLACE': {
            return action.payload;
        }
        case 'SQUARE': {
            return state**2;
        }
        default: {
            return state;
        }
    }
}

module.exports = { reducer };