import * as actionTypes from './../../actions/actionTypes';
import { updateObject } from './../../utility';


const initialState = {
    isInitiated: false,
    isSuccess: false,
    isFailed: false,
}

const loginInitiated = (state, action) => {
    return updateObject(state, {
        isInitiated: true,
        isSuccess: false,
        isFailed: false
    });
}
const loginSuccess = (state, action) => {
    return updateObject(state, {
        isInitiated: false,
        isSuccess: true,
        isFailed: false
    });
}
const loginFailed = (state, action) => {
    return updateObject(state, {
        isInitiated: false,
        isSuccess: false,
        isFailed: true,
    });
}
const checkingAuthorization = (state, action) => {
    return updateObject(state, {
        isInitiated: true,
        isSuccess: false,
        isFailed: false
    });
}
const authorized = (state, action) => {
    return updateObject(state, {
        isInitiated: false,
        isSuccess: true,
        isFailed: false
    });
}
const unauthorized = (state, action) => {
    return updateObject(state, {
        isInitiated: false,
        isSuccess: false,
        isFailed: true
    });
}
const loggedOut = (state, action) => {
    return updateObject(state, {
        isInitiated: false,
        isSuccess: false,
        isFailed: true,
    });
}
const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_INITIATED: return loginInitiated(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action)
        case actionTypes.LOGIN_FAILED: return loginFailed(state, action)
        case actionTypes.CHECKING_AUTHORIZATION: return checkingAuthorization(state, action)
        case actionTypes.AUTHORIZED: return authorized(state, action)
        case actionTypes.UNAUTHORIZED: return unauthorized(state, action)
        case actionTypes.LOGGEDOUT: return loggedOut(state, action)
    default:
        return state;
    }
}

export default logInReducer;