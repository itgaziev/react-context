import React from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as TaskContext } from "./context/TaskContext"

const HomeScreen = (props) => {
    const { route, navigation } = props
    const [ tasks, setTasks ] = React.useState([])
    const { state, removeTask } = React.useContext(TaskContext)

    React.useEffect(() => {
        setTasks(state.tasks)
        console.log("effects")
    })

    return (
        <View style={ styles.container }>
            <Text style={ styles.titleHeader }>Список задач</Text>
            <FlatList
                style={ styles.listTask }
                keyExtractor={ item => item.id }
                data={tasks}
                renderItem={ item => <ItemTask item={item.item} removeTask={ removeTask }/> }
            />
            <TouchableOpacity style={ styles.btnNav } onPress={() => navigation.navigate("Task") }>
                <Text style={ styles.navText }>Добавить задачу</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const ItemTask = (props) => {
    const { item, removeTask } = props
    return (
        <View style={ styles.itemTask } key={ item.id }>
            <Text style={ styles.taskTitle }>{ item.name }</Text>
            <TouchableOpacity style={ styles.removeTask } onPress={() => removeTask({task : item})}>
                <Text style={ styles.removeText }>Удалить</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    titleHeader : {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 15
    },
    listTask : {
        marginTop: 5,
        paddingHorizontal: 5,
        paddingVertical: 25,
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
    itemTask : {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: 'red',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskTitle : {
        fontSize : 14,
        fontWeight : '600'
    },
    removeTask : {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical : 5
    },
    removeText : {
        textAlign: 'center',
        color: 'white'
    }
})