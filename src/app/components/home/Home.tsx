import React, {useEffect, useReducer} from 'react'
import  styles from './home.module.scss';
import {emptyOutMessages} from "../message-collector/mesagesSlice";
import {useDispatch} from "react-redux";
import {HomeContext, homeReducer, initialMessage} from "./homeContext";
import ChildHome from "./childHome/childHome"


export function Home() {
    let mainClass = [styles.mainHome, ' container'].join(' ');
    console.log(' mainClass class in home component is: ' + mainClass )
    const dispatch = useDispatch();
    const [message, dispatchHomeMessage] = useReducer(homeReducer, initialMessage);
    // NOTE that you have to update different component ( in this case Message collector using useEffects
    // if you don't put code  dispatch( emptyOutMessages(true)); inside of use effects block you will have an error in console
    useEffect(() => {
        dispatch( emptyOutMessages(true));
        // eslint-disable-next-line 
    }, []);

    return(
        <HomeContext.Provider value={{homeMsgState: message , homeMsgDispatch: dispatchHomeMessage}}>
        <div className={mainClass}>
        <div>
            <span>Home component content</span></div>
        <div>
            <span>Message is : {message}</span>
        </div>
         <ChildHome />

    </div>
    </HomeContext.Provider>)
}