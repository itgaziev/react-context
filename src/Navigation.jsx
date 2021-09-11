import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./HomeScreen"
import TaskScreen from "./TaskScreen"

const HomeStack = createNativeStackNavigator()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={ HomeScreen }/>
            <HomeStack.Screen name="Task" component={ TaskScreen }/>
        </HomeStack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <HomeStackScreen />
        </NavigationContainer>
    )
}

export default Navigation