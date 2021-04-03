import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export const useGoSignIn = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('SignIn'), [navigation]);
};

export const useGoSignUp = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('SignUp'), [navigation]);
};

export const useGoFirstProfile = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('firstProfile'), [navigation]);
};

export const useGoSecondProfile = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('secondProfile'), [navigation]);
};

export const useGoMyPageProfile = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage_profile'), [navigation]);
};

export const useGoMyPageUserInfo = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('UserInfo'), [navigation]);
};

export const useGoMyPage = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('MyPage'), [navigation]);
};

export const useGoTerms = (idx: number) => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('Terms', { idx: idx }), [
    navigation,
  ]);
};

export const useGoEmailAuth = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('emailAuth'), [navigation]);
};

export const useGoCertification = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('certification'), [navigation]);
};

export const useGoRenewPassword = () => {
  const navigation = useNavigation();
  return useCallback(() => navigation.navigate('renewPassword'), [navigation]);
};
