import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import TabNavigation from '../Components/TabNavigation';
// import Login_Stack from './Login_Nav/Login_Stack';
const Petch_Root_Stack = createNativeStackNavigator();

const RootStacks = ({user}: {user?: string}) => {
  const navigation = useNavigation();
  // useEffect(() => {
  //   user === 'manage' ? navigation.navigate('Manage_Stacks') : null;
  // }, []);
  return (
    <Petch_Root_Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Petch_Root_Stack.Screen name="TabNavigation" component={TabNavigation} />
      {/* <Petch_Root_Stack.Screen name="Login_Stacks" component={Login_Stack} /> */}
    </Petch_Root_Stack.Navigator>
  );
};

export default RootStacks;
