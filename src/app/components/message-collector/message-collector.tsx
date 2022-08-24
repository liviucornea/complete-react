import React, {Key, useEffect, useState} from 'react';
import './_message-collector.scss';
import {useDispatch, useSelector} from "react-redux";
import {loadMessage, selectMessages} from "./mesagesSlice";
import { MessageDTO } from '../../../features/models/MesageDTO';


type Props = {}
// eslint-disable-next-line 
export default function MessageCollector({}: Props) {
    const messagesState = useSelector(selectMessages);
    const dispatch = useDispatch();
     const [liviuName, setLiviuName] = useState('Liviu');
    useEffect(() => {
        setLiviuName(liviuName + ' Cornea');
        console.log('Message collector: messageState has changed');
        return () => {
            console.log('Message collector: messageState will change');
        }
        // eslint-disable-next-line 
    }, [messagesState]);
    const updateMsg = () => {
        dispatch(loadMessage({msgType: 'SUCCESS', msgText: messagesState.list[0].msgText + '  Hellooo!!!'}));
    };
    let context = <div></div>;
    if(messagesState.list.length === 0) {
        return context;
    }
    context = (<section className={"error-collector"}>
        <div className="section-content">
            <div className="content-wrapper">
                <div className="notification">
                    <div className="notification-content">
                        {messagesState.list.map((message: MessageDTO) => {
                            return (
                                <p key={message.msgText}> {message.msgText}</p>
                            );
                        })}
                    </div>
                </div>
                {/*<span>Livius name is:  {liviuName}</span>*/}
            </div>
        </div>
        <button onClick={updateMsg}>Update Message</button>
    </section>);

    return context;
}
