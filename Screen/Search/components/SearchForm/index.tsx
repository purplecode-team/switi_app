import React from 'react';
import SearchInput from './SearchInput';
import styled from 'styled-components/native';

interface Input {
  value: string;
  onChange: (value: string) => void;
}

interface SearchFormProps {
  searchInput: Input;
  onPress: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchInput, onPress }) => (
  <Container>
    <SearchInput
      value={searchInput.value}
      onChangeText={searchInput.onChange}
      placeholder="검색어를 입력해주세요"
      keyboardType="default"
      secureTextEntry={false}
      returnKeyType="send"
      onPress={onPress}
    />
  </Container>
);

const Container = styled.View`
  padding: 10px 20px;
  margin-bottom: 15px;
`;

export default SearchForm;
