import React from 'react';
import styled from 'styled-components/native';
import { ItemType } from '../../../Home/interface';
import {
  useGoManageRecruit,
  useGoStudyDetail,
} from '../../../../util/navigationHooks';
import ManageIcon from '../../../../Img/icon_memberManage.png';

//스터디 관리, 모집글
const Recruitment: React.FC<ItemType> = ({ item }) => {
  const goStudyDetail = useGoStudyDetail(item.id, item);
  const goManageRecruit = useGoManageRecruit(item.id, item.title);

  // 글자수 제한
  const limitTitle = (title: string) =>
    title.length > 17 ? title.substr(0, 17) + '...' : title;

  return (
    <Container activeOpacity={0.8} onPress={goStudyDetail}>
      <Title>{limitTitle(item.title)}</Title>
      <ManageMember onPress={goManageRecruit}>
        <ButtonImage source={ManageIcon} />
      </ManageMember>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 12px 0;
  align-items: center;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #2b2b2b;
  font-weight: bold;
`;

const ManageMember = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.Image`
  width: 18px;
  height: 16px;
`;

export default Recruitment;
