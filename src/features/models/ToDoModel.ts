import {CurrentToDoState} from "../todo/currentToDoSlice";


export class ToDoModel implements CurrentToDoState {
    completed: boolean = false;
    id: number = -1;
    title: string = '';
    userId: number = -1;

    constructor(id: number) {
        this.id = id;
    }
}