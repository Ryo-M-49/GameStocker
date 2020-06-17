import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

export const RAKUTEN_API_BASE_URL = 'https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json';
export const RAKUTEN_API_OPTIONAL_URL = 'hits=30&booksGenreId=006&applicationId=1009084489441242376';

export const authData = {
    email: 'guest@example.com',
    password: 'password',
    password_confirmation: 'password',
};

export const mockAuthResponse = {
    data: {
        id: 8,
        first_name: 'Guest',
        last_name: 'User',
        image_url: 'url',
    },
};

export const mockAuthHeaders = {
    'access-token': 'ahj0ajklaed98',
    'uid': 8,
};

export const createTestStore = ( state = {} ) => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore({
        ...state,
    });
};

const mockResponse = {
    response: {
        token: 'abcdefg',
        uid: 1
    }
}

const mockHeaders = {
    headers: {
        'access-token': 'abcdefg',
        uid: 1
    }
}