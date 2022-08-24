import React ,{useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useHttp} from "../../../app/hooks/useHttp";
import {ToDoModel} from "../../models/ToDoModel";
import {useParams} from "react-router";
import './_todo-edit.scss';
import {startSpinner, stopSpinner} from "../../../app/components/spinner/spinnerSlice";


interface ToDoEditRouteParams {
    id: string,
    [key: string]: string // if you don have this line in interface defintion
    // TS gets and error in useParams<ToDoEditRouteParams>();
} 
export default function TodoEdit() {
    // we could get it from store , commented here or get details from an endpoint as lines below
    // const toDo = useSelector(selectCurentToDo);
    const params = useParams<ToDoEditRouteParams>();
    const dispatch = useDispatch();
    // let url = 'https://jsonplaceholder.typicode.com/todos';
    // please not tha local NODE js server has response structure a bit different than that public api for to do details
    let url = 'http://localhost:9000/todo/';
    url = url +  params.id;
    const [isLoading, fetchedData] = useHttp<{todo: ToDoModel}>(url , 'GET',  []);
    useEffect(() => {
        if (isLoading) {
            dispatch(startSpinner({reasonToRun: 'LOAD_TODO'}));
        }else{
            dispatch(stopSpinner({reasonToRun: 'LOAD_TODO'}));
        }
        // eslint-disable-next-line 
    }, [isLoading]);

    // have content to return
    let content: any;

    // @ts-ignore
    let toDo =  fetchedData ?  fetchedData.todo : null;
    content =  (<div className="container todo-edit">
        <h2>TO do info bellow</h2>
        <div>
            <span>ID : {toDo?.id}</span>
        </div>
        <div>
            <span>Title : {toDo?.title}</span>
        </div>
        <div>
            <span>Completed : {toDo?.completed ? 'true' : 'false'}</span>
        </div>
    </div>);
    // @ts-ignore
    if(isLoading){
        content = <span> TO DO is loading , please wait !!!!</span>
    }
    return content;
}
