import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";



export interface CurrentToDoState {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}
export const initialToDoState = {
    'userId': -1,
    "id": -1,
    "title": "",
    "completed": false
} as CurrentToDoState;

export const currentToDoSlice = createSlice({
    name: 'user',
    initialState: initialToDoState,
    reducers: {
        loadCurrentTODO: (state, action: PayloadAction<CurrentToDoState>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            return action.payload
        }
    },
});

export const {loadCurrentTODO} = currentToDoSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loadCurrentTODOAsync = (todo: CurrentToDoState): AppThunk => dispatch => {
    setTimeout(() => {
        dispatch(loadCurrentTODO(todo));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCurentToDo = (state: RootState) => state.currentToDo;

export default currentToDoSlice.reducer;