import React, { useContext } from "react"
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Context as TaskContext } from "./context/TaskContext"

const TaskScreen = (props) => {
    const { route, navigation } = props
    const [ name, setName ] = React.useState("")
    const {state, addTask } = useContext(TaskContext)
    const newTask = () => {
        addTask({ task : {id : name, name : name }})
        navigation.navigate("Home")
    }

    return (
        <View style={{ flex : 1 }}>
            <Text style={ styles.titleHeader }>Новая задача</Text>
            <TextInput 
                placeholder="Укажите название задачи ..."
                value={name}
                onChangeText={ setName }
                style={ styles.input }
            />

            <TouchableOpacity style={ styles.btnNav } onPress={() => newTask() }>
                <Text style={ styles.navText }>Создать</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskScreen

const styles = StyleSheet.create({
    titleHeader : {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 15
    },
    input : {
        borderBottomWidth: 1,
        marginBottom: 15,
        marginTop: 25,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    btnNav : {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor : 'blue',
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    navText : {
        color : 'white',
        textAlign: 'center',
        fontSize: 18
    },
})