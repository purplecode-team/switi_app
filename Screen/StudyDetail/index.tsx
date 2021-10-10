import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import StudyInfo from './components/StudyInfo';
import BottomButton from './components/BottomButton';
import OtherInfo from './components/OtherInfo';
import { useGoHome } from '../../util/navigationHooks';
import ApplyModal from './components/ApplyModal';
import CancelModal from './components/CancelModal';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import { getStudyDetailRequest } from '../../redux/studyReducer';
import TitleFlag from '../Home/components/StudyFlatList/TitleFlag';
import StudyHeader from './components/StudyHeader';

const StudyDetail = ({ route }: any) => {
  const idx = route.params.idx;

  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  const { studyDetail } = useSelector(({ studyReducer }: rootState) => ({
    studyDetail: studyReducer.studyDetail,
  }));
  const { scrapList } = useSelector(({ userReducer }: rootState) => ({
    scrapList: userReducer.scrapList,
  }));
  const { myStudyList } = useSelector(({ manageReducer }: rootState) => ({
    myStudyList: manageReducer.myStudyList,
  }));
  const { myApplyList } = useSelector(({ manageReducer }: rootState) => ({
    myApplyList: manageReducer.myApplyList,
  }));

  const dispatch = useDispatch();
  const onGetStudyDetail = useCallback(
    (token, id) => dispatch(getStudyDetailRequest(token, id)),
    [dispatch]
  );

  useEffect(() => {
    onGetStudyDetail(login.token, idx);
  }, [idx, scrapList]);

  const goHome = useGoHome();
  const [modalVisible, setModalVisible] = useState(false);
  // const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const closeCancelModal = () => setCancelModalVisible(false);

  const onClick = () => {
    //showModal();
    setCancelModalVisible(true);
  };

  // 리더인지 확인하는 함수
  const checkLeader = () => {
    // 나의 모집글인 경우 true를 반환
    const leader = myStudyList.some((item: { id: number }) => {
      return item.id == studyDetail.id;
    });
    return leader;
  };

  // 신청여부 확인하는 함수
  const checkApply = () => {
    if (checkLeader()) return '모집 마감하기';
    // 신청했을 경우 true 아니면 false
    const apply = myApplyList.some((item: { id: number }) => {
      return item.id == studyDetail.id;
    });
    return apply ? '신청 취소하기' : '신청하기';
  };

  if (!studyDetail) return null;

  return (
    <Container>
      <StudyHeader onPress={goHome} id={studyDetail.id} />
      <Content>
        <TitleFlag
          title={studyDetail.title}
          done={studyDetail.flag}
          detail={true}
        />
        <OtherInfo
          idUser={studyDetail.idUser}
          username={studyDetail.User.nickname}
          createAt={studyDetail.createdAt.toString().split('T')[0]}
          scrap={studyDetail.scrapCount}
          id={studyDetail.id}
        />
        <Desc>{studyDetail.desc}</Desc>
      </Content>
      <StudyInfo item={studyDetail} />
      <BottomButton
        onPress={onClick}
        leader={checkLeader()}
        id={studyDetail.id}
        btnText={checkApply()}
      />
      <ApplyModal modalVisible={modalVisible} closeModal={closeModal} />
      <CancelModal
        modalVisible={cancelModalVisible}
        closeModal={closeCancelModal}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
`;
//font-family: 'NotoSans-Bold';

const Content = styled.View`
  padding: 0 24px;
  margin-bottom: 20px;
  flex: 4;
  border-bottom-width: 1px;
  border-color: #f3f3f3;
`;

const Desc = styled.Text`
  font-size: 12px;
  color: #2b2b2b;
  flex: 6;
`;

export default StudyDetail;
