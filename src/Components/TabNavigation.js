/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../api/theme';
import {ContentText, Icon, RowView} from './StyledComponent';
import Home from '../Home/Home';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Mypage from '../Mypage/Mypage';
import Hos_Main from '../Hospital/Hos_Main';
import Petch_Talk_Main from '../Petch_Talk/Petch_Talk_Main';
import {Platform, TouchableOpacity} from 'react-native';
import {User_Info} from '../Sign/Login';
import Collapsible from 'react-native-collapsible';
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
  const [open, set_Open] = useState(false);
  const [pet_type, set_Pet_Type] = useState(User_Info.pet_type);

  const Open_Select = () => {
    set_Open(!open);
  };
  const Select_Button = item => {
    User_Info.pet_type = item;
    set_Pet_Type(item);
  };

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
                    ? require('../image/navigation/ic_home_sel.png')
                    : require('../image/navigation/ic_home.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Hospital"
        // component={Hos_Main}
        options={{
          title: '동물병원',
          headerTitle: '',
          tabBarIcon: ({focused}) => {
            return (
              <Tab_Icon
                size={28}
                source={
                  focused
                    ? require('../image/navigation/ic_heart_sel.png')
                    : require('../image/navigation/ic_heart.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="My"
        component={Mypage}
        options={{
          title: '마이',
          headerTitle: '',
          tabBarIcon: ({focused}) => {
            return (
              <Tab_Icon
                size={28}
                source={
                  focused
                    ? require('../image/navigation/ic_mypage_sel.png')
                    : require('../image/navigation/ic_mypage.png')
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
