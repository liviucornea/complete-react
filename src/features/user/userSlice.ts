import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";

export interface UserState {
    id: string;
    loggedIn: boolean;
    firstName: string;
    lastName: string;
    password: string;
}
export const initialUserState = {
    id: 'guestId',
    loggedIn: false,
    firstName: 'Guest',
    lastName: 'Guest',
    password: 'empty'
} as UserState

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        logIn: (state, action: PayloadAction<UserState>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.password = action.payload.password;
            state.loggedIn = true;
        },
        logOut: state => {
            state.id = 'guestId';
            state.loggedIn = false;
            state.firstName = 'Guest';
        }
    },
});

export const {logIn, logOut} = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const logInAsync = (user: UserState): AppThunk => dispatch => {
    setTimeout(() => {
        dispatch(logIn(user));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;