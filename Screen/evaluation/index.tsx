import React, { useState } from 'react';
import styled from 'styled-components/native';
import BasicHeader from '../../Component/BasicHeader';
import { useGoManageRecruit } from '../../util/navigationHooks';
import EvaluationRadio from './EvaluationRadio';

const Evaluation = ({ route }: any) => {
  const idx = route.params.idx;
  const title = route.params.title;

  const GoManageRecruit = useGoManageRecruit(idx, title);
  const [checked, setChecked] = useState({ participation: null });
  return (
    <Container>
      <BasicHeader
        title={'상호평가'}
        onPress={GoManageRecruit}
        display={true}
      />
      <Content>
        <Text>
          평가결과는 모든 스터디원 평가 점수를 평균으로 환산하여 상대방의 당도에
          반영됩니다.
        </Text>
        <OpponentContainer>
          <OpponentImg></OpponentImg>
          <OpponentText>상대 닉네임</OpponentText>
        </OpponentContainer>
        <EvaluationRadio
          title="participation"
          checkedValue={checked['participation']}
          setChecked={setChecked}
        />
      </Content>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Content = styled.View`
  flex: 12;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 26px;
`;

const Text = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
`;

const OpponentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
`;

const OpponentImg = styled.View`
  background-color: #d1d1d1;
  width: 46px;
  height: 46px;
  border-radius: 50px;
  margin-right: 10px;
`;

const OpponentText = styled.Text`
  font-size: 16px;
`;

export default Evaluation;
