import React from 'react';
import './_spinner.scss'
import { useSelector } from 'react-redux';
import { selectSpinner } from './spinnerSlice';


export function Spinner() {
    const SpinnerState = useSelector(selectSpinner);
    let context = <div className="spinner-main">
        <div className="loader"></div>
    </div>
    if (!SpinnerState.isRunning || SpinnerState.reasonsToRun.length === 0) {
        context = <div></div>;
    }
    return (
        context
    )
}