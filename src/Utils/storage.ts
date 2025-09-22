/**
 * React Native 스토리지 유틸 함수
 * get : AsyncStorage로부터 데이터 가져오기
 * set : AsyncStorage에 데이터 저장하기
 * remove : AsyncStorage에서 데이터 삭제하기
 *
 * 현재 스토리지에 저장하는 목록
 * accessToken : 액세스 토큰
 * refreshToken : 리프레쉬 토큰
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

interface StorageKey {
  authToken?: string;
  accessToken?: string;
  refreshToken?: string;
}

const initStorage = <T extends keyof StorageKey>(key: T) => {
  const storageKey = `${key}`;

  // 로그인 데이터 가져오기
  const get = async (): Promise<StorageKey[T] | null> => {
    try {
      const value = await AsyncStorage.getItem(storageKey);
      if (value === null) return null;
      return JSON.parse(value);
    } catch (error) {
      console.error(`Error getting ${storageKey} from storage:`, error);
      return null;
    }
  };

  // 로그인 데이터 저장
  const set = async (value: StorageKey[T]): Promise<void> => {
    try {
      if (value == undefined || value == null) {
        await AsyncStorage.removeItem(storageKey);
        return;
      }

      const stringifiedValue = JSON.stringify(value);
      await AsyncStorage.setItem(storageKey, stringifiedValue);
    } catch (error) {
      console.error(`Error setting ${storageKey} to storage:`, error);
    }
  };

  // 로그인 데이터 삭제
  const remove = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(storageKey);
    } catch (error) {
      console.error(`Error removing ${storageKey} from storage:`, error);
    }
  };

  return {get, set, remove};
};

export const authLocalStorage = initStorage('accessToken');
export const refreshStorage = initStorage('refreshToken');

// 사용 예시:
/*
// 토큰 저장
await authLocalStorage.set('accessToken');

// 토큰 가져오기
const token = await authLocalStorage.get();

// 토큰 삭제
await authLocalStorage.remove();
*/
