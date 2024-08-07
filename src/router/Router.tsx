import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from '../home/HomeScreen';
import AddNewTask from '../tasks/AddNewTask';
import SearchScreen from '../tasks/SearchScreen';

const Router = () => {
    const Stack = createNativeStackNavigator();
    return (
       <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='AddNewTask' component={AddNewTask}></Stack.Screen>
        <Stack.Screen name='SearchScreen' component={SearchScreen}></Stack.Screen>
       </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Router;
