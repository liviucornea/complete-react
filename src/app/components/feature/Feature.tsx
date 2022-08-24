import React, {useEffect} from 'react';
import Calculator from "./Calculator/Calculator";

export function Feature() {

    // NOTE:  Similar to componentDidMount and componentDidUnmount:
    useEffect(() => {
        console.log(' Equivalent of component did mount');
        return () => {
            console.log(' Equivalent of component will unmount');
        }
    }, []);

    let mainCssClass= 'container';
    return (<div className={mainCssClass}>
        <div><span> Feature component rendered</span></div>
        <div><span> it has a child component</span></div>
        <Calculator/>
    </div>)
}