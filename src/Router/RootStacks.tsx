import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../Components/TabNavigation';
const Petch_Root_Stack = createNativeStackNavigator();

const RootStacks = () => {
  // useEffect(() => {
  //   user === 'manage' ? navigation.navigate('Manage_Stacks') : null;
  // }, []);
  return (
    <Petch_Root_Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Petch_Root_Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Petch_Root_Stack.Navigator>
  );
};

export default RootStacks;
