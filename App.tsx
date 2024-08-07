import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './src/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/Router';

const App = () => {
  return (
   <View style={{flex: 1}}>
  
      <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'}></StatusBar>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
   
   </View>
  );
}

const styles = StyleSheet.create({})

export default App;
