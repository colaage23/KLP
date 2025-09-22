/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {Background, ContentText} from '../Components/StyledComponent';
import {SafeAreaView, View, Alert} from 'react-native';
import styled from 'styled-components/native';
import theme from '../Components/theme';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [pwcheck, setPwcheck] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 이메일 확인
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 비밀번호 확인
  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleSignUp = async (): Promise<void> => {
    if (!email || !pw || !pwcheck) {
      Alert.alert('오류', '모든 필드를 입력해주세요.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('오류', '올바른 이메일 형식을 입력해주세요.');
      return;
    }

    if (!validatePassword(pw)) {
      Alert.alert('오류', '비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    if (pw !== pwcheck) {
      Alert.alert('오류', '비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsLoading(true);

    try {
      const userCredential: FirebaseAuthTypes.UserCredential =
        await auth().createUserWithEmailAndPassword(email, pw);
      const user: FirebaseAuthTypes.User = userCredential.user;

      Alert.alert('회원가입 완료', '회원가입이 성공적으로 완료되었습니다.', [
        {
          text: '확인',
          onPress: () => {
            // 회원가입 성공 후 처리 (예: 로그인 화면으로 이동)
            navigation.goBack();
          },
        },
      ]);

      setEmail('');
      setPw('');
      setPwcheck('');
    } catch (error: any) {
      console.error('회원가입 오류:', error);

      Alert.alert('회원가입 실패');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <InsertView bounces={false}>
          <View style={{gap: 5}}>
            <ContentText bold>이메일</ContentText>
            <TextInput
              placeholderTextColor={theme.colors.fontLightGray}
              placeholder="이메일을 입력해주세요."
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>
          <View style={{gap: 5}}>
            <ContentText bold>비밀번호</ContentText>
            <TextInput
              placeholderTextColor={theme.colors.fontLightGray}
              placeholder="비밀번호를 입력해주세요. (최소 6자)"
              secureTextEntry
              value={pw}
              onChangeText={(text: string) => setPw(text)}
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>
          <View style={{gap: 5}}>
            <ContentText bold>비밀번호 확인</ContentText>
            <TextInput
              placeholderTextColor={theme.colors.fontLightGray}
              placeholder="비밀번호를 다시 입력해주세요."
              secureTextEntry
              value={pwcheck}
              onChangeText={(text: string) => setPwcheck(text)}
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>
        </InsertView>
        <SignUpBtn
          onPress={handleSignUp}
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.7 : 1,
          }}>
          <ContentText title white sbold>
            {isLoading ? '처리 중...' : '회원가입'}
          </ContentText>
        </SignUpBtn>
      </SafeAreaView>
    </Background>
  );
};

export default SignUp;

const InsertView = styled.ScrollView`
  align-self: center;
  width: 100%;
  gap: 10px;
`;

const TextInput = styled.TextInput`
  color: ${theme.colors.fontMain};
  width: 100%;
  height: 40px;
  background-color: #fff;
  margin-bottom: 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.barGray};
  margin-top: 5px;
  padding: 10px;
`;

const SignUpBtn = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${theme.colors.fontBlue};
  margin-top: 25px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-color: ${theme.colors.border};
  position: absolute;
  bottom: 15px;
`;
