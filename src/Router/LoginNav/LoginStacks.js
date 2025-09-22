import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../Login/Login';
import SignUp from '../../Login/SignUp';

const LoginStack = createNativeStackNavigator();

const LoginStacks = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        options={{
          title: '로그인',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 20},
          headerShadowVisible: false,
          headerBackVisible: true,
        }}
        name="Login"
        component={Login}
      />
      <LoginStack.Screen
        options={{
          title: '회원가입',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 20},
          headerShadowVisible: false,
          headerBackVisible: true,
        }}
        name="회원가입"
        component={SignUp}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStacks;
