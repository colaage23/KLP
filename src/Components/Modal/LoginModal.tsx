/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import theme from '../theme';
import {ContentText} from '../StyledComponent';

export interface LoginModalRef {
  visible: () => void;
}

const LoginModal = forwardRef<LoginModalRef>((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<any>();

  useImperativeHandle(ref, () => ({
    visible: () => {
      setModalVisible(true);
    },
  }));

  return (
    <Modal
      style={{margin: 0, justifyContent: 'center'}}
      onBackdropPress={() => {
        setModalVisible(false);
      }}
      onBackButtonPress={() => {
        setModalVisible(false);
      }}
      backdropOpacity={0.5}
      isVisible={modalVisible}>
      <Modal_Container>
        <PopUpView>
          <Modal_ContentView>
            <ContentText content bold2>
              로그인이 필요합니다.
            </ContentText>
          </Modal_ContentView>
          <Modal_BottomView>
            <Modal_OrderBtn
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('LoginStacks', {
                  screen: 'Login',
                });
              }}>
              <ContentText bold white>
                로그인
              </ContentText>
            </Modal_OrderBtn>
          </Modal_BottomView>
        </PopUpView>
      </Modal_Container>
    </Modal>
  );
});
export default LoginModal;

const Modal_Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const PopUpView = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`;

const Modal_ContentView = styled.View`
  min-height: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const Modal_BottomView = styled.View`
  height: 42px;
  margin: 12px;
  flex-direction: row;
`;

const Modal_OrderBtn = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.buttonBlue};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
