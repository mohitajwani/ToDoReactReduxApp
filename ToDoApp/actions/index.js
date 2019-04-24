import { ADD_NEW_TASK, TOGGLE_ONE_TASK, LOAD_TASKS } from "./actionTypes";
//import uuid4 from 'uuid4'

let id = 0;

export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: id++,
        taskName: inputTaskName,
    }
}

export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId,
    }
}

export const loadTasks = (taskList) => {
    return {
        type: LOAD_TASKS,
        tasks: taskList,
    }
}