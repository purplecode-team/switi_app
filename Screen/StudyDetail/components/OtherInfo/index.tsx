import React from 'react';
import styled from 'styled-components/native';
import Scrap from '../../../Home/components/StudyFlatList/Scrap';
import WriterInfo from './WriterInfo';

interface Props {
  username?: string;
  createAt?: string;
  scrap?: number;
  idUser: number;
  id: number;
}

const OtherInfo: React.FC<Props> = ({
  idUser,
  username,
  createAt,
  scrap,
  id,
}) => {
  return (
    <Container>
      <WriterInfo username={username} idUser={idUser} id={id} />
      <Content>
        <StartDate>{createAt}</StartDate>
        <Scrap scrap={scrap} id={id} />
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  flex: 1;
`;

const Content = styled.View`
  flex-direction: row;
`;
const StartDate = styled.Text`
  color: #b4b4b4;
  font-size: 10px;
  padding-right: 10px;
`;

export default OtherInfo;
