import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStacks from './HomeNav/HomeStacks';
import LoginStacks from './LoginNav/LoginStacks';
const Petch_Root_Stack = createNativeStackNavigator();

const RootStacks = () => {
  return (
    <Petch_Root_Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Petch_Root_Stack.Screen name="HomeStacks" component={HomeStacks} />
      <Petch_Root_Stack.Screen name="LoginStacks" component={LoginStacks} />
    </Petch_Root_Stack.Navigator>
  );
};

export default RootStacks;
