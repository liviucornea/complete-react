import React, {useEffect, useState} from 'react';
import style from './ToDoMain.module.scss';
//in react-router-dom v6 useHistory() is replaced by useNavigate().
//import {useHistory} from "react-router";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {loadToDos} from './todosSlice';
import {loadCurrentTODO} from './currentToDoSlice';
import {startSpinner, stopSpinner} from '../../app/components/spinner/spinnerSlice';
import {emptyOutMessages, loadMessage} from '../../app/components/message-collector/mesagesSlice';

export function ToDoMain() {
    let mainClass = ['container ' + style.mainDiv].join(' ');
    const [loadedToDos, setLoadedToDos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const [contentMsg, setContentMsg] = useState('Data is loading...please waite');
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(loadMessage({msgType: 'SUCCESS', msgText: 'TODOs list visited'}));
        return () => {
            dispatch(emptyOutMessages(true));
            console.log(' TODDO Main component is detroyed/unmount');
        }
        // eslint-disable-next-line 
    }, []);
    const setCurrentTODO = (todo: any) => {
        console.log('Selected TOD', todo);
        dispatch(loadCurrentTODO(todo));
        //history.push(`/todo/${todo.id}`);
        navigate(`/todo/${todo.id}`);
    };
    useEffect(() => {
            setIsLoading(true);
            dispatch(startSpinner({reasonToRun: 'LOAD_TODS'}));
            console.log('Started to load TODOs list');
            //  fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
            fetch('http://localhost:9000/todos').then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load tods')
                }
                return response.json()
            })
                .then(toDosData => {
                    setIsLoading(true);
                    dispatch(loadToDos(toDosData));
                    console.log('TODOS list is loaded:', toDosData.slice(0, 100));
                    /// load them even slower as they come fast from network
                    setTimeout(() => {
                        setLoadedToDos(toDosData.slice(0, 100));
                        dispatch(stopSpinner({reasonToRun: 'LOAD_TODS'}));
                    }, 500);

                }).catch(err => {
                console.log(err);
                dispatch(stopSpinner({reasonToRun: 'LOAD_TODS'}));
                setIsLoading(false);
                dispatch(loadMessage({msgType: 'ERROR', msgText: 'Error trying to load todo  list!!!'}));
                setContentMsg('Error trying to load the data. Process is aborted');
            })
        // eslint-disable-next-line 
        }, []);
    let content = <div>{contentMsg}</div>;
    if (isLoading && loadedToDos.length > 0) {
        content = (<div className={mainClass}>
                <div>
                    <span>Please select your to from the list below:</span>
                    <ul>
                        {loadedToDos.map(todo => {
                            // NOTE if bellow you don't use style.item-desc to bring that class in and use just item-desc the scss file will not be fully imported and
                            // it will not work
                            return <li key={todo.id} className={style["item-desc"]}
                                       onClick={() => setCurrentTODO(todo)}
                            >{todo.id} --- {">"} {todo.title} : {todo.completed ? 'completed' : 'not completed'} </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    return content
}