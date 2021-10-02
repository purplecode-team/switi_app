import React, { useState, useRef, useCallback, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import useInput from '../SignIn/util/useInput';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  searchAllDeleteRequest,
  searchHistoryRequest,
  searchRequest,
} from '../../redux/searchReducer';
import { FlatList } from 'react-native';
import RenderItem from '../Home/components/StudyFlatList/RenderItem';
import { DataType } from '../Home/interface';
import OptionMenu from './components/optionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';
import SearchStoryList from './record/searchStoryList';

const Search = () => {
  const dispatch = useDispatch(); //action 받아서 store의 Reducer에서 넘김
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  })); //리덕스 상태값 조회

  //검색 + 검색어 저장 post
  const fetchOnSearch = (token: any, keyword: string) =>
    dispatch(searchRequest(token, keyword)); //dispatch 사용

  //검색 기록 get
  const fetchOnSearchHistory = (token: any) =>
    dispatch(searchHistoryRequest(token)); //dispatch 사용

  //검색 기록 all delete
  const fetchSearchDelete = (token: any) => {
    dispatch(searchAllDeleteRequest(token));
  };

  const { searchStudyList, searchHistoryList } = useSelector(
    (state: rootState) => state.searchReducer
  ); //리덕스 상태값 조회

  useEffect(() => {
    fetchOnSearch(login.token, searchInput.value);
    fetchOnSearchHistory(login.token);
    // console.log(`useEffect ${searchHistoryList}`);
  }, [dispatch]); //dispatch 일어나면 다시 실행

  const initialSearchHistory = [
    {
      id: 1,
      keyword: '코딩테스트',
      idUser: 55,
    },
    {
      id: 2,
      keyword: '코딩테스트',
      idUser: 55,
    },
    {
      id: 3,
      keyword: '코딩테스트',
      idUser: 55,
    },
  ];

  const [searches, setSearches] = useState(initialSearchHistory);
  const nextId = useRef(4);

  const RealOnPressSearchDelete = useCallback(() => {
    setSearches([]);
  }, [searches]);

  const onInsert = useCallback(
    (text) => {
      const search = {
        id: nextId.current,
        text,
      };
      setSearches(searches.concat(search));
      nextId.current += 1;
    },
    [searches]
  );

  const onRemove = useCallback(
    (id) => {
      setSearches(searches.filter((search) => search.id !== id));
    },
    [searches]
  );

  const searchInput = useInput('');

  const searchSomething = () => {
    const searchVoca = searchInput.value;
    AsyncStorage.setItem(
      'beforeSearch',
      JSON.stringify({ id: nextId.current, text: searchVoca }),
      () => {
        // console.log(searchVoca, '저장 완료');
      }
    );

    AsyncStorage.getItem('beforeSearch', (err, result) => {
      if (typeof result === 'string') {
        const BeforeSearch = JSON.parse(result);
        // console.log(BeforeSearch, '가져옴');
        onInsert(BeforeSearch.text);
        fetchOnSearch(login.token, searchVoca); //사용
      }
    });
  };

  const goAlarm = UseGoAlarm;

  const FlatListItemSeparator = () => <SeparatorLine />;
  const [isRefreshing, setIsRefreshing] = useState(false); // flatList 내부의 로딩

  const fetchItem = () => {
    setIsRefreshing(true);
    fetchOnSearch(login.token, searchInput.value);
    setIsRefreshing(false);
  };

  const handleLoadMore = () => {
    console.log('검색 완료');
  };

  useEffect(() => {
    if (searchHistoryList) setSearches(searchHistoryList);
  }, [searchHistoryList]);

  return (
    <ContainerWithBell title="검색" onPress={goAlarm()}>
      <SearchForm searchInput={searchInput} onPress={searchSomething} />
      <Container>
        <OptionMenu onPressSearchDelete={RealOnPressSearchDelete} />
        <ListContainer>
          <SearchStoryList searches={searches} onPressX={onRemove} />
        </ListContainer>
        <Line />
        <RecommendContainer />
      </Container>
      {/*<FlatList*/}
      {/*  ItemSeparatorComponent={FlatListItemSeparator}*/}
      {/*  onRefresh={fetchItem}*/}
      {/*  refreshing={isRefreshing}*/}
      {/*  data={searchStudyList}*/}
      {/*  renderItem={useCallback(*/}
      {/*    ({ item }) => (*/}
      {/*      <RenderItem index={item.id} item={item} />*/}
      {/*    ),*/}
      {/*    []*/}
      {/*  )}*/}
      {/*  keyExtractor={(item: DataType) => item.id.toString()}*/}
      {/*  extraData={searchStudyList}*/}
      {/*  contentContainerStyle={{ paddingBottom: 80 }}*/}
      {/*  onEndReached={handleLoadMore}*/}
      {/*  onEndReachedThreshold={0}*/}
      {/*  showsVerticalScrollIndicator={false}*/}
      {/*  ListEmptyComponent={() => (*/}
      {/*    <EmptyContainer>*/}
      {/*      <EmptyFont>데이터 랜더링 실패 </EmptyFont>*/}
      {/*    </EmptyContainer>*/}
      {/*  )}*/}
      {/*/>*/}
    </ContainerWithBell>
  );
};

const EmptyContainer = styled.View`
  margin-top: 10px;
`;

const EmptyFont = styled.Text`
  font-size: 12px;
`;

const SeparatorLine = styled.View`
  height: 1px;
  background-color: #f3f3f3;
`;

const Container = styled.View``;

const ListContainer = styled.View`
  margin: 20px 0;
`;
const Line = styled.Text`
  height: 10px;
  background-color: #f3f3f3;
  margin-top: 8px;
  margin-bottom: 10px;
`;

const ImcyComponent = styled.Text`
  font-size: 10px;
`;

export default Search;
