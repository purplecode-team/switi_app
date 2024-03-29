import React from 'react';
import styled from 'styled-components/native';
import SearchHeader from './header';

interface Props {
  headerTitle: string;
}

const Index: React.FC<Props> = ({ children, headerTitle }) => {
  return (
    <Wrap>
      <SearchHeader title={headerTitle} />
      <Container>{children}</Container>
    </Wrap>
  );
};

const Wrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default Index;
