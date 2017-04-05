import { combineReducers } from 'redux';
import BooksReducer from './reducer_book_list';
import ActiveBook from './resucer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
