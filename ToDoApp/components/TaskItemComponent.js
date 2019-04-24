import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, 
        Platform, TouchableOpacity, RefreshControl, TextInput } from "react-native";
import { toggleTask } from "../actions";

export default class TaskItemComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style = {{ flex: 1 }}>
                <TouchableOpacity 
                    style = {{
                        position: 'absolute',
                        width: 200,
                        height: 100,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                    >
                </TouchableOpacity>
                <Text 
                    onPress = {() => {
                        this.props.onClickTask(this.props.taskId)
                    }}
                    style = {{
                        margin: 20,
                        color: this.props.completed == true ? 'darkgreen' : 'black',
                    }}
                >
                    {this.props.taskName}
                </Text>
            </View>
        );
    }
};