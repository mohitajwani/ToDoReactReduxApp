import { combineReducers } from "redux";
import tasks from "./taskReducers"

const allReducers = combineReducers({
    tasks,
});

export default allReducers;