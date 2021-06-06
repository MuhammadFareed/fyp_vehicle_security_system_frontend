import * as actionTypes from './../actionTypes';

export const signupInitiated = () => {
    return {
        type: actionTypes.SIGNUP_INITIATED
    };
};

export const signupSuccess = () => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
    };
};

export const signupFailed = () => {
    return {
        type: actionTypes.SIGNUP_FAILED,
    };
};