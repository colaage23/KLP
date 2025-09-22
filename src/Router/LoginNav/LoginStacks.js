import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../Home/Home';

const LoginStack = createNativeStackNavigator();

const LoginStacks = () => {
  const navigation = useNavigation();

  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Home" component={Home} />
    </LoginStack.Navigator>
  );
};

export default LoginStacks;
