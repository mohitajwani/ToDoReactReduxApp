import { ADD_NEW_TASK, TOGGLE_ONE_TASK, LOAD_TASKS } from "../actions/actionTypes";

const taskReducers = (tasks = [], action) => {
    console.log("old state = ", tasks);
    console.log("action = ", action);
    switch (action.type) {

        case ADD_NEW_TASK:
            return [
                ...tasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false,
                }
            ]

        case TOGGLE_ONE_TASK:
            return tasks.map( task => 
                (task.taskId === action.taskId)
                    ? { ...task, completed: !task.completed }
                    : task
            )
    
        case LOAD_TASKS:
            return action.tasks;

        default:
            return tasks;
    }
}

export default taskReducers;