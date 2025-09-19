/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from './theme';
import {Icon} from './StyledComponent';
import Home from '../Home/Home';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
const Logo = styled(Icon)`
  margin-left: 15px;
`;

const Tab_Icon = styled(Icon)`
  margin-top: 3px;
  overflow: visible;
  align-items: center;
`;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          headerTitle: '',
          tabBarIcon: ({focused}) => {
            return (
              <Tab_Icon
                size={28}
                source={
                  focused
                    ? require('../Image/navigation/ic_home_sel.png')
                    : require('../Image/navigation/ic_home.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          title: '홈',
          headerTitle: '',
          tabBarIcon: ({focused}) => {
            return (
              <Tab_Icon
                size={28}
                source={
                  focused
                    ? require('../Image/navigation/ic_home_sel.png')
                    : require('../Image/navigation/ic_home.png')
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
