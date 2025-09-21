/* eslint-disable no-unused-vars */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import theme from './theme';
import FastImage from 'react-native-fast-image';

// 간단하게 any 타입 사용
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
      : props.bold
        ? theme.family.medium
        : props.bold2
          ? theme.family.bold
          : theme.family.regular};
  text-align: ${props =>
    props.center ? 'center' : props.right ? 'right' : 'auto'};
  border-width: ${props => (props.roundBorder ? '1px' : '0px')};
  border-color: ${props =>
    props.main ? theme.colors.main : theme.colors.barGray};
`;

export const Icon = styled(FastImage) <any>`
  width: ${props => (props.size ? props.size : '25')}px;
  height: ${props => (props.size ? props.size : '25')}px;
  display: ${props => (props.hide ? 'none' : 'flex')};
`;

export const Button = styled.TouchableOpacity<any>`
  background-color: ${props =>
    props.main
      ? theme.colors.main
      : props.blue
        ? theme.colors.fontBlue
        : props.red
          ? theme.colors.fontRed
          : props.gray
            ? theme.colors.btnGray
            : theme.colors.fontWhite};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${props =>
    props.main
      ? theme.colors.main
      : props.blue
        ? theme.colors.fontBlue
        : props.red
          ? theme.colors.fontRed
          : props.gray
            ? theme.colors.btnGray
            : theme.colors.barGray};
  align-items: center;
  justify-content: center;
  margin: 0px 4px;
  flex: 1;
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
        source={require('../Image/back.png')}
        style={{ width: 25, height: 25 }}
      />
    </Btn>
  );
};

export const BarView = styled.View<any>`
  height: ${props => (props.height ? props.height : '10px')};
  border-top-width: 0.5px;
  border-color: ${props => (props.color ? props.color : theme.colors.barGray)};
  background-color: ${theme.colors.bgGray};
  margin-top: ${props => (props.top ? props.top : '0px')};
`;

export const FlexView = styled.View<any>`
  flex: 1;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: center;
`;

const MoreBtn = styled.TouchableOpacity``;

export const MoreButton = ({ onPress }: any) => {
  return (
    <MoreBtn onPress={onPress}>
      <RowView>
        <ContentText small gray>
          {'더보기 '}
        </ContentText>
        <Icon size="13" source={require('../Image/right.png')} />
      </RowView>
    </MoreBtn>
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