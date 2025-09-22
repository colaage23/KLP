import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../Home/Home';
import PostWrite from '../../Home/PostWrite';

const HomeStack = createNativeStackNavigator();

const HomeStacks = () => {
  const navigation = useNavigation();

  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="PostWrite"
        component={PostWrite}
        options={{
          headerShown: true,
          title: '글 작성',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 20},
          headerShadowVisible: false,
          headerBackVisible: true,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStacks;
