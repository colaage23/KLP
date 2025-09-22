/**
 * 스토리지 유틸 함수
 * get : 스토리지로부터 데이터 가져오기
 * set : 스토리지에 데이터 저장하기
 * remove : 스토리지에서 데이터 삭제하기
 *
 * 현재 스토리지에 저장하는 목록
 * accessToken : 액세스 토큰
 * refreshToken : 리프레쉬 토큰
 */

interface StorageKey {
  authToken?: string;
  accessToken?: string;
  refreshToken?: string;
}

const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const storageKey = `${key}`;

  // storage로부터 데이터 가져오기
  const get = (): StorageKey[T] => {
    const value = storage.getItem(storageKey);

    return JSON.parse(value as string);
  };

  // storage에 데이터 저장하기
  const set = (value: StorageKey[T]) => {
    if (value == undefined || value == null) {
      return storage.removeItem(storageKey);
    }

    const stringifiedValue = JSON.stringify(value);

    storage.setItem(storageKey, stringifiedValue);
  };

  // storage의 데이터 삭제하기
  const remove = () => {
    storage.removeItem(storageKey);
  };

  return {get, set, remove};
};

export const authLocalStorage = initStorage('accessToken', localStorage);
export const refreshStorage = initStorage('refreshToken', localStorage);
