import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    from: 0,
    limitPages: 10,
    maxPage: 0,
    page: 0,
    query: 'IT+Россия'
}

export const pagesLength = createAction('MAX_PAGE');
export const addPage = createAction('ADD_PAGE');
export const newQuery = createAction('NEW_QUERY');
export const decrementPage = createAction('DECREMENT_PAGE');
export const incrementPage = createAction('INCREMENT_PAGE');

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
        if (state.page == state.limitPages - 1) {
            state.from += 10
            state.limitPages += 10;
        }
        if (state.page != state.maxPage - 1) {
            state.page += 1;
        }
    },
    [pagesLength]: function (state, action) {
        state.maxPage = action.payload;
    }
});