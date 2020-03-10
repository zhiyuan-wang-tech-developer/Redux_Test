/**
 * run: node app.js
 */
const initialState = {
    user: null,
    darkMode: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                user: action.payload
            }
        }

        case 'LOGOUT': {
            return {
                ...state,
                user: null
            }
        }

        case 'UPDATE_LOGGEDIN_USER': {
            if (!state.user) {
                // Currently not logged in, so this doesn't make sense.
                return state
            }
            return {
                ...state,
                user: {
                    // copy over all current user info from nested object
                    ...state.user,
                    // add updates from nest object
                    ...action.payload
                }
            }
        }

        case 'TOGGLE_DARK_MODE': {
            return {
                ...state,
                darkMode: !state.darkMode
            }
        }

        default: {
            return state
        }
    }
}

module.exports = { reducer }