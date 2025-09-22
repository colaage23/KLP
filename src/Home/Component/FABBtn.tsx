/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useRef} from 'react';
import {ContentText, Icon, RowView} from '../../Components/StyledComponent';
import theme from '../../Components/theme';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../Login/hooks/useAuth'; // 위에서 만든 훅 import
import LoginModal, {LoginModalRef} from '../../Components/Modal/LoginModal';

interface FABProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const FABBtn = ({isExpanded, setIsExpanded}: FABProps) => {
  const navigation = useNavigation<any>();
  const loginModal = useRef<LoginModalRef>(null);
  const {isLogin, logout, checkLoginStatus} = useAuth();

  const handleFabClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogoutPress = async () => {
    setIsExpanded(false);
    await logout();
  };

  return (
    <>
      {isExpanded && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setIsExpanded(false);
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
            position: 'absolute',
            flex: 1,
            width: '120%',
            height: '120%',
            top: -50,
            left: -20,
          }}
        />
      )}
      <FAB
        icon={() => {
          if (!isExpanded) {
            return <Icon source={require('../../Image/ic_pen_black.png')} />;
          } else {
            return (
              <Icon
                style={{alignSelf: 'center', top: 5}}
                size={15}
                source={require('../../Image/ic_x_black.png')}
              />
            );
          }
        }}
        animated={true}
        style={{
          backgroundColor: theme.colors.fontBlue,
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 15,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          borderRadius: 50,
        }}
        onPress={handleFabClick}
      />
      {isExpanded && (
        <>
          {/* 추가 버튼 1 */}
          <RowView
            style={{
              right: 3,
              bottom: 80,
              position: 'absolute',
              zIndex: 2,
            }}>
            <ContentText style={{marginRight: 8}} white medium>
              글 작성
            </ContentText>
            <FAB
              icon={() => {
                return (
                  <Icon source={require('../../Image/ic_pen_black.png')} />
                );
              }}
              style={{
                backgroundColor: 'white',
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}
              onPress={() => {
                isLogin
                  ? navigation.navigate('HomeStacks', {screen: 'PostWrite'})
                  : loginModal.current?.visible();
                setIsExpanded(false);
                // navigation.navigate('Home_Stacks', {
                //   screen: 'Regist',
                // });
              }}
            />
          </RowView>
          {isLogin && (
            <RowView
              style={{right: 3, bottom: 135, position: 'absolute', zIndex: 2}}>
              <ContentText style={{marginRight: 8}} white medium>
                로그아웃
              </ContentText>
              <FAB
                icon={() => (
                  <Icon
                    size={24}
                    source={require('../../Image/ic_people_black.png')}
                  />
                )}
                style={{
                  backgroundColor: 'white',
                  width: 45,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
                onPress={handleLogoutPress}
              />
            </RowView>
          )}

          {!isLogin && (
            <RowView
              style={{right: 3, bottom: 135, position: 'absolute', zIndex: 2}}>
              <ContentText style={{marginRight: 8}} white medium>
                로그인
              </ContentText>
              <FAB
                icon={() => (
                  <Icon
                    size={24}
                    source={require('../../Image/ic_people_black.png')}
                  />
                )}
                style={{
                  backgroundColor: 'white',
                  width: 45,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}
                onPress={() => {
                  setIsExpanded(false);
                  navigation.navigate('LoginStacks', {
                    screen: 'Login',
                  });
                }}
              />
            </RowView>
          )}
        </>
      )}
      <LoginModal ref={loginModal} />
    </>
  );
};

export default FABBtn;
