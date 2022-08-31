import React , {useContext} from 'react';
import {HomeContext} from "../homeContext";
import styles from './childHome.module.scss'

type Props = {}
// eslint-disable-next-line 
export default function ChildHome  ({}: Props)  {
    const homeContext = useContext(HomeContext);
    return (<div className={styles.childHome}>
            <span> Child component inside home component to share data with ancestor via useContext</span>
            <div className={styles.buttons}>
                <div>
                <button onClick={() => homeContext?.homeMsgDispatch('hello')}>Say Hello</button>
                </div>
                <div>
                    <button onClick={() => homeContext?.homeMsgDispatch('bye')}>Say bye</button>
                </div>
            </div>
            <div>Home Context message is: {homeContext.homeMsgState} </div>
        </div>
        );
}
