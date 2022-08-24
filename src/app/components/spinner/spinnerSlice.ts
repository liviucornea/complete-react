import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface SpinnerState {
    isRunning: boolean;
    reasonsToRun: string[];
}

export const InitialSpinnerState = {
    isRunning: false,
    reasonsToRun: []
} as SpinnerState

export class SpinnerAction {
    constructor(public reasonToRun: string) { }
}

export const spinnerSlice = createSlice({
    name: 'spinner',
    initialState: InitialSpinnerState,
    reducers: {
        startSpinner: (state, action: PayloadAction<SpinnerAction>) => {
            state.isRunning = true;
            if (!state.reasonsToRun.find(r => r === action.payload.reasonToRun)) {
                state.reasonsToRun.push(action.payload.reasonToRun);
            }

        },
        stopSpinner: (state, action: PayloadAction<SpinnerAction>) => {
            state.reasonsToRun = state.reasonsToRun.filter(reason => reason !== action.payload.reasonToRun);
            state.isRunning = state.reasonsToRun.length > 0 ? true : false
        }
    }

});

export const { startSpinner, stopSpinner } = spinnerSlice.actions;

export const selectSpinner = (state: RootState) => state.spinner;

export default spinnerSlice.reducer;