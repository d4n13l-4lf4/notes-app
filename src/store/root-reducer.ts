import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./../feature/note/notes.slice";

const rootReducer = combineReducers({
    notes: notesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
