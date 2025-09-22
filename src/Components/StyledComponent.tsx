/* eslint-disable no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import theme from './theme';
import FastImage from 'react-native-fast-image';

export const ContentText = styled.Text<any>`
  font-size: ${props =>
    props.large
      ? theme.fontsizes.large
      : props.xlarge
      ? theme.fontsizes.xlarge
      : props.xxlarge
      ? theme.fontsizes.xxlarge
      : props.xxxlarge
      ? theme.fontsizes.xxxlarge
      : props.extra
      ? theme.fontsizes.extra
      : props.small
      ? theme.fontsizes.small
      : props.title
      ? theme.fontsizes.title
      : props.xsmall
      ? theme.fontsizes.xsmall
      : props.xxsmall
      ? theme.fontsizes.xxsmall
      : props.tabTitle
      ? theme.fontsizes.tabTitle
      : props.content
      ? theme.fontsizes.content
      : theme.fontsizes.normal};
  color: ${props =>
    props.main
      ? theme.colors.main
      : props.main2
      ? theme.colors.main2
      : props.blue
      ? theme.colors.fontBlue
      : props.lightBlue
      ? theme.colors.fontLightBlue
      : props.red
      ? theme.colors.fontRed
      : props.gray
      ? theme.colors.fontGray
      : props.green
      ? theme.colors.fontGreen
      : props.lightGray
      ? theme.colors.fontLightGray
      : props.darkGray
      ? theme.colors.fontDarkGray
      : props.white
      ? theme.colors.fontWhite
      : props.yellow
      ? theme.colors.fontYellow
      : props.yellow2
      ? theme.colors.fontYellow2
      : props.darkGreen
      ? theme.colors.fontDarkGreen
      : props.fontLightGreen
      ? theme.colors.fontLightGreen
      : theme.colors.fontMain};
  font-family: ${props =>
    props.sbold
      ? theme.family.semibold
      : props.medium
      ? theme.family.medium
      : props.bold
      ? theme.family.bold
      : theme.family.regular};
  text-align: ${props =>
    props.center ? 'center' : props.right ? 'right' : 'auto'};
  border-width: ${props => (props.roundBorder ? '1px' : '0px')};
  border-color: ${props =>
    props.main ? theme.colors.main : theme.colors.barGray};
`;

export const Icon = styled(FastImage)<any>`
  width: ${props => (props.size ? props.size : '25')}px;
  height: ${props => (props.size ? props.size : '25')}px;
  display: ${props => (props.hide ? 'none' : 'flex')};
`;

export const RowView = styled.View<any>`
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : 'flex-start')};
  display: ${props => (props.hide ? 'none' : 'flex')};
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
`;

export const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <Btn onPress={() => navigation.goBack()}>
      <Icon
        source={require('../Image/ic_back_black.png')}
        style={{width: 25, height: 25}}
      />
    </Btn>
  );
};

const LoadingView = styled.View`
  flex: 1;
  min-height: 300px;
  justify-content: center;
`;

export const Loading = () => {
  return (
    <LoadingView>
      <ActivityIndicator />
    </LoadingView>
  );
};
