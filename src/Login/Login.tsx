/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Background, ContentText} from '../Components/StyledComponent';
import {SafeAreaView, View, Alert} from 'react-native';
import theme from '../Components/theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAuth} from './hooks/useAuth'; // useAuth 훅 import

const Login: React.FC = () => {
  const navigation = useNavigation<any>();
  const {login} = useAuth();

  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (): Promise<void> => {
    if (!email || !pw) {
      Alert.alert('오류', '이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('오류', '올바른 이메일 형식을 입력해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      const userCredential: FirebaseAuthTypes.UserCredential =
        await auth().signInWithEmailAndPassword(email, pw);
      const user: FirebaseAuthTypes.User = userCredential.user;

      const idToken = await user.getIdToken();

      await login(idToken);

      navigation.goBack();
    } catch (error: any) {
      console.error('로그인 오류:', error);

      Alert.alert('로그인 실패');
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
          justifyContent: 'center',
        }}>
        <InsertView>
          <View style={{gap: 5}}>
            <ContentText bold>이메일</ContentText>
            <TextInput
              placeholderTextColor={theme.colors.fontLightGray}
              placeholder="이메일을 입력해주세요."
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              editable={!isLoading}
            />
          </View>
          <View style={{gap: 5}}>
            <ContentText bold>비밀번호</ContentText>
            <TextInput
              placeholderTextColor={theme.colors.fontLightGray}
              placeholder="비밀번호를 입력해주세요."
              secureTextEntry
              value={pw}
              onChangeText={(text: string) => setPw(text)}
              onSubmitEditing={handleLogin}
              editable={!isLoading}
            />
          </View>
        </InsertView>
        <LoginBtn
          onPress={handleLogin}
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.7 : 1,
          }}>
          <ContentText title white sbold>
            {isLoading ? '로그인 중...' : '로그인'}
          </ContentText>
        </LoginBtn>
        <JoinBtn
          onPress={() => {
            navigation.navigate('LoginStacks', {
              screen: '회원가입',
            });
          }}
          disabled={isLoading}>
          <ContentText title gray sbold>
            회원가입
          </ContentText>
        </JoinBtn>
      </SafeAreaView>
    </Background>
  );
};

export default Login;

const InsertView = styled.View`
  align-self: center;
  width: 100%;
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

const LoginBtn = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${theme.colors.fontBlue};
  margin-top: 25px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-color: ${theme.colors.border};
`;

const JoinBtn = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: ${theme.colors.barGray};
  margin-top: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-color: ${theme.colors.barGray};
`;
