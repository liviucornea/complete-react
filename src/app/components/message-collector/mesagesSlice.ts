import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageDTO} from "../../../features/models/MesageDTO";
import {AppThunk, RootState} from "../../store";


export interface MessagesState {
    list: MessageDTO[]
}
export const initialToDosState = {
    list: [],
} as MessagesState;

export const messagesSlice = createSlice({
    name: 'user',
    initialState: initialToDosState,
    reducers: {
        loadMessage: (state, action: PayloadAction<MessageDTO>) => {
            state.list =[action.payload] ;
        },
        loadMessages: (state, action: PayloadAction<MessageDTO[]>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.list = action.payload;
        },
        emptyOutMessages: (state, action: PayloadAction<Boolean>) => {
            state.list = [];
        }
    },
});

export const {loadMessage, loadMessages, emptyOutMessages} = messagesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const messagesSliceAsync = (list: MessageDTO[]): AppThunk => dispatch => {
    setTimeout(() => {
        dispatch(loadMessages(list));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMessages = (state: RootState) => state.messages;

export default messagesSlice.reducer;