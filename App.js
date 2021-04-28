import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Searchbar } from 'react-native-paper';
import FloatBox from './component/float-box'
import Card from './component/card'

import HomeScreen from "./screen/HomeScreen"
import CategoryScreen from "./screen/CategoryScreen"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//insert data sample
const Stack = createStackNavigator();

export default function App() {

    // <Stack.Navigator>
    //   <Stack.Screen name="Feed" component={}/>
    //   <Stack.Screen name="Feed" component={}/>
    // </Stack.Navigator>
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="shop" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"flex-start"
  },
  header:{
    margin: 20
  }
});
