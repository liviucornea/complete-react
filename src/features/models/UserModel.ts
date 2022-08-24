import {UserState} from "../user/userSlice";

export class UserModel implements UserState{
    id: string;
    loggedIn: boolean  = false;
    firstName: string = '';
    lastName: string = '';
    password: string = '';

    constructor(id: string) {
        this.id = id;
    }
}