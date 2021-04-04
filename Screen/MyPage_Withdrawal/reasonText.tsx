import React from 'react';
import styled from 'styled-components/native';
import { InputProps } from './interface';

const ReasonText: React.FC<InputProps> = ({ input }) => {
  return (
    <InputContainer>
      <Input
        value={input.value}
        onChangeText={input.onChange}
        placeholder="기타 불편했던 점을 적어주세요"
        keyboardType="email-address"
        returnKeyType="next"
        secureTextEntry={false}
        multiline
        numberOfLines={4}
        maxLength={400}
        textAlignVertical="top"
      />
    </InputContainer>
  );
};

const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 4px;
  height: 128px;
  font-size: 12px;
  border-color: #e3e3e3;
  padding: 10px;
`;

const InputContainer = styled.View``;

export default ReasonText;
