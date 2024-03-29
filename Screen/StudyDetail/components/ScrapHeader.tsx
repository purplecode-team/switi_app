import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import BackIcon from '../../../Img/btn_back.png';
import ScrapIcon from '../../../Img/icon_scrap.png';
import NotScrapIcon from '../../../Img/icon_notScrap.png';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../redux';
import axios from 'axios';
import { getScrapListRequest } from '../../../redux/userReducer';
import { searchHistoryRequest } from '../../../redux/search/searchReducer';
import { HostURL } from '../../../redux/url';

interface Props {
  onPress: () => void;
  id: number;
  setPopupVisible: (v: boolean) => void;
  setPopupText: (v: string) => void;
}

const ScrapHeader: React.FC<Props> = ({
  onPress,
  id,
  setPopupVisible,
  setPopupText,
}) => {
  const [icon, setIcon] = useState(NotScrapIcon);
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));

  const dispatch = useDispatch();
  const onGetScrapList = useCallback(
    // 스크랩리스트 불러오기
    (token) => dispatch(getScrapListRequest(token)),
    [dispatch, scrapList]
  );

  useEffect(() => {
    confirmScrap();
  }, [id]);

  // 스크랩된 스터디인지 확인하는 함수
  const confirmScrap = () => {
    // some: 배열 요소 중 하나라도 스크랩된 스터디 아이디에 해당하면 true 반환
    // scrap이 true면 이미 스크랩된 스터디란 의미 !
    const scrap = scrapList.scrapList.some((item: { id: number }) => {
      return item.id == id;
    });
    scrap ? setIcon(ScrapIcon) : setIcon(NotScrapIcon);
  };

  // 스크랩 / 스크랩취소 함수
  const goScrap = () => {
    const scrap = scrapList.scrapList.some((item: { id: number }) => {
      return item.id == id;
    });

    scrap
      ? axios({
          method: 'delete',
          url: `${HostURL}/study/deleteScrap/${id}`,
          headers: { Authorization: login.token },
        }).then(() => {
          setPopupText('모집글이 스크랩이 취소되었습니다.');
          setPopupVisible(true);
          setIcon(NotScrapIcon);
          setTimeout(() => {
            setPopupVisible(false);
          }, 1000);
        })
      : axios({
          method: 'post',
          url: `${HostURL}/study/scrapStudy/${id}`,
          headers: { Authorization: login.token },
        }).then(() => {
          dispatch(searchHistoryRequest(login.token));
          setPopupText('모집글이 스크랩되었습니다.');
          setPopupVisible(true);
          setIcon(ScrapIcon);
          setTimeout(() => {
            setPopupVisible(false);
          }, 1000);
        });
  };

  useEffect(() => {
    onGetScrapList(login.token);
  }, [icon]);

  return (
    <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 40 }}>
      <Wrap
        onPress={onPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Icon source={BackIcon} />
      </Wrap>
      <Wrap
        onPress={goScrap}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <RightIcon source={icon} />
      </Wrap>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  left: 24px;
  right: 24px;
  top: 24px;
`;

const Wrap = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;

const RightIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export default ScrapHeader;
