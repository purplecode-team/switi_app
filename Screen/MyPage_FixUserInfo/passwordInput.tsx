import React from 'react';
import styled from 'styled-components/native';
import { InputProps, Status } from '../SignUp/inteface/index';

const getColor = ({ status }: { status: Status }) => {
  switch (status) {
    case Status.NORMARL:
      return '#e3e3e3';
    case Status.SUCCESS:
      return '#4fd5a7';
    case Status.ERROR:
      return '#ff0000';
    default:
      return '#e3e3e3';
  }
};

const PasswordInput: React.FC<InputProps> = ({ input, error }) => {
  return (
    <Container>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="8자리 이상 영문, 숫자, 특수문자"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={true}
        status={error.status}
      />
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
`;

const Input = styled.TextInput`
  font-size: 12px;
  border-width: 1px;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;
  border-color: ${getColor};
`;

export default PasswordInput;
