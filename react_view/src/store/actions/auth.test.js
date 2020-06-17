import * as actionTypes from './actionTypes';
import * as actions from './auth';
import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';

import * as utils from '../../../test/testUtil';

describe('action creators', () => {
    it('should create an action to show authentication starts', () => {
        const expectedAction = {
            type: actionTypes.AUTH_START
        };
        expect(actions.authStart()).toEqual(expectedAction);
    });

    it('should create an action to authenticate', () => {
        const expectedAction = {
            type: actionTypes.AUTH_SUCCESS,
            firstName: 'first',
            lastName: 'last',
            userId: 1,
            token: 'token',
            uid: 'email',
            image: 'image@example.com',
        };
        expect(actions.authSuccess(1, 'first', 'last', 'token', 'email', 'image@example.com')).toEqual(expectedAction);
    });

    it('should create an action to show authentication fails', () => {
        const expectedAction = {
            type: actionTypes.AUTH_FAIL,
            error: 'error'
        };
        expect(actions.authFail('error')).toEqual(expectedAction);
    });

    it('should create an action to logout', () => {
        const expectedAction = {
            type: actionTypes.AUTH_LOGOUT,
        };
        // Todo: Add test for localStorage
        expect(actions.logout()).toEqual(expectedAction);
    });

    it('should create an action to toggle isSnackbarOpen', () => {
        const expectedAction = {
            type: actionTypes.TOGGLE_AUTH_SNACKBAR,
            isSnackbarOpen: true,
        };
        expect(actions.toggleAuthSnackbar(true)).toEqual(expectedAction);
    });

    it('should create an action to set image', () => {
        const expectedAction = {
            type: actionTypes.SET_IMAGE,
            image: 'image',
        };
        expect(actions.setImage('image')).toEqual(expectedAction);
    });

    it('should create an action to set an image', () => {
        const expectedAction = {
            type: actionTypes.SET_IMAGE,
            image: 'image',
        };
        expect(actions.setImage('image')).toEqual(expectedAction);
    });

    it('should create an action to set your information', () => {
        const response = {
            id: 1,
            first_name: 'f',
            last_name: 'l',
            image_url: 'url',
            introduction: 'hello',
        }
        const expectedAction = {
            type: actionTypes.SET_YOUR_INFORMATION,
            id: response.id,
            first_name: response.first_name,
            last_name: response.last_name,
            image: response.image_url,
            introduction: response.introduction,
        };
        expect(actions.setYourInformation(response)).toEqual(expectedAction);
    });

    it('should create an action to set redirect path to authentication page', () => {
        const expectedAction = {
            type: actionTypes.SET_AUTH_REDIRECT_PATH,
            path: 'path',
        };
        expect(actions.setAuthRedirectPath('path')).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    const axiosMock = new axiosMockAdapter(axios);

    it('creates AUTH_SUCCESS if authentication succeeds', () => {
        const store = utils.createTestStore();
        const expectedActions = [
            { type: actionTypes.AUTH_START },
            { 
                type: actionTypes.AUTH_SUCCESS, 
                firstName: 'Guest',
                lastName: 'User',
                userId: 8,
                token: 'ahj0ajklaed98',
                uid: 8,
                image: 'url',
            },
            { type: actionTypes.SET_ISLOADING, isLoading: true },
            { type: actionTypes.TOGGLE_AUTH_SNACKBAR, isSnackbarOpen: {isOpen: true, type: 'signin' } },
        ]
        const url = `${process.env.REACT_APP_API_ENDPOINT_URI}/api/auth/sign_in`;

        axiosMock.onPost(
            url,
            utils.authData
        ).reply(
          200,
          utils.mockAuthResponse,
          utils.mockAuthHeaders
        );

        return store.dispatch(actions.auth(utils.authData.email, utils.authData.password))
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        }) 
    });
});
