import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, 
        Platform, TouchableHighlight, RefreshControl, TextInput, AsyncStorage } from "react-native";
import TaskItemContainer from "../containers/TaskItemContainer"

export default class TaskListComponent extends Component {
    constructor(props) {
        super(props);
    }

    loadTasks = async() => {
        let tasksList = JSON.parse(await AsyncStorage.getItem('TASKS'));
        if (tasksList === null) {
            tasksList = []
        }
        this.props.onLoadTasks(tasksList);
    }

    componentDidMount() {
      this.loadTasks();
    }

    
    render() {
        return (
            <FlatList 
                data = {this.props.tasks}
                renderItem = {
                    ({ item }) => {
                        return(
                            <TaskItemContainer {...this.props} {...item} />
                        );
                    }
                } />
        );
    }
};