import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useGoFirstProfile, useGoSignIn } from '../../util/navigationHooks';

const SignUp = () => {
  const goLogin = useGoSignIn();
  const goFirstProfile = useGoFirstProfile();

  return (
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
      <Text onPress={goLogin}>로그인하기</Text>
      <Button title="가입하기" onPress={goFirstProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;
