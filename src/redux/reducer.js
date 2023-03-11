import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    maxPage: 0,
    page: 0,
    query: 'IT+Россия',
    displayPopup: 'none'
}

export const pagesLength = createAction('MAX_PAGE');
export const addPage = createAction('ADD_PAGE');
export const newQuery = createAction('NEW_QUERY');
export const decrementPage = createAction('DECREMENT_PAGE');
export const incrementPage = createAction('INCREMENT_PAGE');
export const setDisplay = createAction('FLEX');

export default createReducer(initialState, {
    [addPage]: function (state, action) {
        state.page = action.payload;
    },
    [newQuery]: function (state, action) {
        state.query = action.payload;
    },
    [decrementPage]: function (state) {
        if (state.page != 0) {
            state.page -= 1;
        }
    },
    [incrementPage]: function (state) {
        if (state.page != state.maxPage - 1) {
            state.page += 1;
        }
    },
    [pagesLength]: function (state, action) {
        state.maxPage = action.payload;
    },
    [setDisplay]: function (state, action) {
        (action.payload === 'flex') ? state.displayPopup = 'flex' : state.displayPopup = 'none';
    }
});