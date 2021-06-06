import * as actionTypes from './../actionTypes';

export const loginInitiated = () => {
    return {
        type: actionTypes.LOGIN_INITIATED
    };
};

export const loginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        data
    };
};

export const loginFailed = () => {
    return {
        type: actionTypes.LOGIN_FAILED,
    };
};

export const checkingAuthorization = () => {
    return {
        type: actionTypes.CHECKING_AUTHORIZATION
    };
};

export const authorized = () => {
    return {
        type: actionTypes.AUTHORIZED
    };
};

export const unauthorized = () => {
    return {
        type: actionTypes.UNAUTHORIZED
    };
};

export const loggedOut = () => {
    return {
        type: actionTypes.LOGGEDOUT
    };
};