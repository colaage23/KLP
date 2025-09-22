import {useState, useEffect} from 'react';
import {authLocalStorage} from '../../Utils/storage';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    // Firebase Auth 상태 변화 리스너
    const unsubscribe = auth().onAuthStateChanged(async firebaseUser => {
      try {
        if (firebaseUser) {
          // 사용자가 로그인되어 있는 경우
          const idToken = await firebaseUser.getIdToken();
          await authLocalStorage.set(idToken);
          setUser(firebaseUser);
          setIsLogin(true);
        } else {
          // 사용자가 로그아웃되어 있는 경우
          await authLocalStorage.remove();
          setUser(null);
          setIsLogin(false);
        }
      } catch (error) {
        console.error('Auth state change error:', error);
        setIsLogin(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    });

    // 컴포넌트 언마운트 시 리스너 해제
    return unsubscribe;
  }, []);

  const checkLoginStatus = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const currentUser = auth().currentUser;

      if (currentUser) {
        const idToken = await currentUser.getIdToken(true); // force refresh
        await authLocalStorage.set(idToken);
        setUser(currentUser);
        setIsLogin(true);
      } else {
        await authLocalStorage.remove();
        setUser(null);
        setIsLogin(false);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLogin(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (token: string): Promise<void> => {
    try {
      await authLocalStorage.set(token);
      // Firebase Auth 상태는 onAuthStateChanged에서 자동으로 처리됩니다
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await auth().signOut(); // Firebase Auth에서 로그아웃
      await authLocalStorage.remove();
      // Firebase Auth 상태는 onAuthStateChanged에서 자동으로 처리됩니다
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  // 토큰 새로고침
  const refreshToken = async (): Promise<string | null> => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const newToken = await currentUser.getIdToken(true);
        await authLocalStorage.set(newToken);
        return newToken;
      }
      return null;
    } catch (error) {
      console.error('Token refresh error:', error);
      return null;
    }
  };

  // 현재 사용자 정보 가져오기
  const getCurrentUser = (): FirebaseAuthTypes.User | null => {
    return auth().currentUser;
  };

  return {
    isLogin,
    isLoading,
    user,
    login,
    logout,
    checkLoginStatus,
    refreshToken,
    getCurrentUser,
  };
};
