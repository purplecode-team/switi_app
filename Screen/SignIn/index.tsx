import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthButton from './EmailPassword/AuthButton';
import useInput from './Hooks/useInput';
import { Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import SocialLogin from './Social/SocialLogin';
import Division from './etc/Division';
import SignInForm from './EmailPassword/SignInForm';
import OptionMenu from './etc/OptionMenu';

export default () => {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChecked = () => setChecked(!checked);

  const handleLogin = () => {
    const { value } = emailInput;
    //const { value } = passwordInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsLoading(true);
    // 추후에 if 결과 변경, 비밀번호 체크
    if (value === '') {
      Alert.alert("Email can't be empty");
    } else if (!value.includes('@') || !value.includes('.')) {
      Alert.alert('Please write an email');
    } else if (!emailRegex.test(value)) {
      Alert.alert('That email is invalid');
    }
    // } else if (secretValue === '') {
    //   Alert.alert("Password can't be empty");
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <SocialLogin />
        <Division />
        <SignInForm emailInput={emailInput} passwordInput={passwordInput} />
        <CheckBoxContainer>
          <CheckBox
            rightText="로그인 기억하기"
            rightTextStyle={{ fontSize: 12 }}
            checkBoxColor="#E3E3E3"
            isChecked={checked}
            onClick={toggleChecked}
          />
        </CheckBoxContainer>
        <AuthButton onPress={handleLogin} loading={isLoading} text="로그인" />
        <OptionMenu />
      </Container>
    </TouchableWithoutFeedback>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0 20px;
`;

const CheckBoxContainer = styled.View`
  width: 100%;
  padding: 0 10px;
`;
