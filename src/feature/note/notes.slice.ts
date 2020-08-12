import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Note} from "../../model/Note";

export interface NotePayload {
    id: number;
    description: string;
}

let initialState: Array<Note> = [];

const notesSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        'ADD_NOTE': (state, action: PayloadAction<NotePayload>) => {
            return [...state, action.payload];
        },
    }
})

export const {
    ADD_NOTE
} = notesSlice.actions

export default notesSlice.reducer;
