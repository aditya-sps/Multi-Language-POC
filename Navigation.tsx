import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default Navigation;
