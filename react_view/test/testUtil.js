import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

export const RAKUTEN_API_BASE_URL = 'https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json';
export const RAKUTEN_API_OPTIONAL_URL = 'hits=30&booksGenreId=006&applicationId=1009084489441242376';

export const createTestStore = () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore();
    return store;
}