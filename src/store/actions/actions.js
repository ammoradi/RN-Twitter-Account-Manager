export const SET_TOKEN = 'SET_TOKENS'
export const SET_PROFILE = 'SET_PROFILE'

export function setToken (token) {
    return { type: SET_TOKEN, token }
}

export function setProfile (profile) {
    return { type: SET_PROFILE, profile }
}
