import * as actionTypes from './../../actions/actionTypes';
import { updateObject } from './../../utility';

const initialState = {
    isInitiated: false,
    isSuccess: false,
    isFailed: false,
}

const signupInitiated = (state, action) => {
    return updateObject(state, {
        isInitiated: true,
        isSuccess: false,
        isFailed: false
    });
}
const signupSuccess = (state, action) => {
    return updateObject(state, {
        isInitiated: false,
        isSuccess: true,
        isFailed: false,
    });
}
const signupFailed = (state, action) => {
    return updateObject(state, {
        isInitiated: false,
        isSuccess: false,
        isFailed: true,
    });
}
const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_INITIATED: return signupInitiated(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAILED: return signupFailed(state, action);
        default:
            return state;
    }
}

export default signUpReducer;