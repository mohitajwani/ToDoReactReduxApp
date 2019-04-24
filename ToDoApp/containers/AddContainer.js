import AddComponent from "../components/AddComponent";
import { addNewTask } from "../actions";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";

const mapStateToProps = state => {
    return {
        tasks: !state.tasks ? [] : state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: async(oldTasks, inputTaskName) => {
            let action = addNewTask(inputTaskName)
            let newTasks = [
                ...oldTasks,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                }
                
            ]
            await AsyncStorage.setItem('TASKS', JSON.stringify(newTasks));
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);