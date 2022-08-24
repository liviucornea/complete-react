import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";
import {ToDoModel} from "../models/ToDoModel";

export interface ToDosState {
    loaded: boolean;
    list: ToDoModel[]
}
export const initialToDosState = {
    loaded: false,
    list: [],
} as ToDosState;

export const todosSlice = createSlice({
    name: 'user',
    initialState: initialToDosState,
    reducers: {
        loadToDos: (state, action: PayloadAction<ToDoModel[]>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.list = action.payload;
            state.loaded = true;

        }
    },
});

export const {loadToDos} = todosSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const todosSliceAsync = (list: ToDoModel[]): AppThunk => dispatch => {
    setTimeout(() => {
        dispatch(loadToDos(list));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTODOs = (state: RootState) => state.todos;

export default todosSlice.reducer;