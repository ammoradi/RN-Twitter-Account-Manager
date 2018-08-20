import { SET_TOKEN, SET_PROFILE } from './../actions/actions'

const initialState = {
    token: null,
    user: null
}

function AppReducer (state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default AppReducer
