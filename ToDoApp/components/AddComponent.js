import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, 
        Platform, TouchableHighlight, RefreshControl, TextInput } from "react-native";

export default class AddComponent extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            newTaskName: ''
        })
    }

    render() {
        return (
            <View style={{
                backgroundColor: 'tomato',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 64,
            }}>
                <TextInput style = {{
                        flex: 9,
                        height: 40,
                        width: 200,
                        margin: 10,
                        padding: 10,
                        borderColor: 'white',
                        borderWidth: 1,
                        color: 'white',
                    }}
                    keyboardType= 'default'
                    placeholderTextColor= 'white'
                    placeholder= "Enter task name"
                    autoCapitalize= 'none'
                    value= {this.state.newTaskName}
                    onChangeText = {
                        (text) => {
                            this.setState({newTaskName: text});
                        }
                    }
                />

                <TouchableHighlight 
                    style = {{marginRight: 10, flex: 1}}
                    underlayColor = 'tomato'
                    onPress = {(event) => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        this.props.onClickAdd(this.props.tasks, this.state.newTaskName);
                        this.setState({newTaskName: ""});
                    }}
                >
                    <Image 
                        style = {{ height: 35, width: 35 }}
                        source = {require ('../icons/icons-add.png')} />
                </TouchableHighlight>
            </View>
        );
    }
}