import React, { useState } from 'react';
import styled from 'styled-components/native';
import ProfileContent from './Layout/ProfileContent';
import SelectButton from '../../../Component/SelectButton';
import BasicModal from '../../../Component/BasicModal';
import { FlatList } from 'react-native';
import { InterestList } from '../../../Data';
import IconCheck from '../../../Img/icon_check.png';

interface dataType {
  key: number;
  name: string;
}

interface itemType {
  index: number;
  item: dataType;
}

interface Props {
  check: boolean;
}

const InterestField = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [select, setSelect] = useState<number[]>([]);

  const FlatListItemSeparator = () => <Line />;

  const itemClick = (isChecked: boolean, index: number): void => {
    if (!isChecked && select.length !== 3) {
      setSelect((prev) => [...prev, index]);
      return;
    }

    setSelect((prev) => prev.filter((i) => i !== index));
  };

  const renderItem = (data: itemType) => {
    const isChecked = !!select.filter((i) => i === data.index).length;
    return (
      <Container
        activeOpacity={0.8}
        onPress={() => {
          itemClick(isChecked, data.index);
        }}
      >
        <Category check={isChecked}>{data.item.name}</Category>
        <Icon check={isChecked} source={IconCheck} />
      </Container>
    );
  };

  return (
    <ProfileContent title="관심분야 (3개 이하 선택)">
      <SelectButton onPress={onPress} />
      <BasicModal modalVisible={modalVisible} closeModal={closeModal}>
        <FlatList
          ItemSeparatorComponent={FlatListItemSeparator}
          data={InterestList}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.key.toString()}
          extraData={InterestList}
        />
      </BasicModal>
    </ProfileContent>
  );
};

const Container = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 0;
`;

const Category = styled.Text<Props>`
  font-size: 12px;
  color: ${(props) => (props.check ? '#4fd5a7' : '#2b2b2b')};
`;

const Icon = styled.Image<Props>`
  width: 12px;
  height: 12px;
  display: ${(props) => (props.check ? 'flex' : 'none')};
`;

const Line = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

export default InterestField;
