import React , {useContext} from 'react';
import {HomeContext} from "../homeContext";


type Props = {}
// eslint-disable-next-line 
export default function ChildHome  ({}: Props)  {
    const homeContext = useContext(HomeContext);
    return (<div className="childHome">
        <span> Child component inside home component to share data with ancestor via useContext</span>
            <div>
            <button onClick={() => homeContext?.homeMsgDispatch('hello')}>Say Hello</button>
            </div>
            <div>
                <button onClick={() => homeContext?.homeMsgDispatch('bye')}>Say bye</button>
            </div>
            <div>Home Context message is: {homeContext.homeMsgState} </div>
        </div>
        );
}
