import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../Components/TabNavigation';
import Home from '../Home/Home';
const Petch_Root_Stack = createNativeStackNavigator();

const RootStacks = () => {

  return (
    <Petch_Root_Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Petch_Root_Stack.Screen name="Home" component={Home} />
    </Petch_Root_Stack.Navigator>
  );
};

export default RootStacks;
