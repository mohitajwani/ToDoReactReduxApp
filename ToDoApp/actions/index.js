import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from "./actionTypes";
//import uuid4 from 'uuid4'

let id = 0;

export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: id++,
        taskName: inputTaskName,
    }
}

export const toogleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId,
    }
}