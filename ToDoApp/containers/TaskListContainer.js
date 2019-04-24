import { connect } from "react-redux";
import { toggleTask, loadTasks } from "../actions";
import TaskListComponent from "../components/TaskListComponent";

const mapStateToProps = state => {
    //alert(`state send to task list = ${JSON.stringify(state)}`)
    return {
        tasks: !state.tasks ? [] : state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickTask: (taskId) => {
            dispatch(toggleTask(taskId));
        },
        
        onLoadTasks: (tasks) => {
            dispatch(loadTasks(tasks));
        }
    };
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
export default TaskListContainer;