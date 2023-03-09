import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    page: 0,
    query: 'IT+Россия'
}

export const addPage = createAction('ADD_PAGE');
export const newQuery = createAction('NEW_QUERY');

export default createReducer(initialState, {
    [addPage]: function (state) {
        state.page += 1;
    },
    [newQuery]: function (state, action) {
        state.query = action.payload;
    }
});