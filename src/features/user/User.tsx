import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logIn, selectUser} from "./userSlice";
//in react-router-dom v6 useHistory() is replaced by useNavigate().
//import {useHistory} from "react-router";
import { useNavigate } from 'react-router-dom';
import {UserModel} from "../models/UserModel";
import {loadMessage} from "../../app/components/message-collector/mesagesSlice";

export function User() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    console.log('User component is rendered');
    const user = useSelector(selectUser);
    // NOTE that you have to update different component ( in this case Message collector using useEffects
    // if you don't put code  dispatch(loadMessage.....; inside of use effects block you will have an error in console
    useEffect(() => {
          console.log('Equivalent of component did mount - User component');
          dispatch(loadMessage({msgType: 'SUCCESS', msgText: 'User component is visited'}));
          // eslint-disable-next-line 
    }, []);
    const firstNameEl = useRef<HTMLInputElement>(null);
    const lastNameEl = useRef<HTMLInputElement>(null);
    const passwordEl = useRef<HTMLInputElement>(null);
    const loginUser = () =>{
            const userEntered =  new UserModel('NEW');
            if(firstNameEl && firstNameEl.current){
                userEntered.firstName = firstNameEl.current.value;
            }
            if(lastNameEl && lastNameEl.current){
                userEntered.lastName = lastNameEl.current.value;
            }
            if(passwordEl && passwordEl.current){
                userEntered.password = passwordEl.current.value;
            }
            /// NOTE if you don't dispatch it serialized that it complains...
            // A non-serializable value was detected in an action
            dispatch(logIn(JSON.parse(JSON.stringify(userEntered))));
            // dispatch(logIn(userEntered));
            navigate('/home');
        }
    return (
        <div className={'container'}>
            <span> User Component content</span>
            <span>User name is : {user.firstName}</span>
            <div>
            <label>User First Name</label>
            <input type="text" ref={firstNameEl} defaultValue={user.firstName} />
            </div>
            <div>
            <label>User Last Name</label>
            <input type="text" ref={lastNameEl} defaultValue={user.lastName} />
            </div>
            <div>
            <label>User Password</label>
            <input type="text" ref={passwordEl} defaultValue={user.password} />
            </div>
            <button onClick={loginUser}>Login User</button>
        </div>)
}