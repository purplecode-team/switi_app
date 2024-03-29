import React, { useState, useEffect } from 'react';
import useInput from '../SignIn/util/useInput';
import ContainerWithBell from '../../Component/ContainerWithBell';
import SearchForm from './components/SearchForm';
import { UseGoAlarm } from '../../util/navigationHooks';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../redux';
import {
  searchAllDeleteThunk,
  searchDeleteThunk,
  searchHistoryRequest,
  searchRequest,
} from '../../redux/search/searchReducer';
import SearchWord from './components/searchWord';
import { REFRESH_STUDY_LIST_SUCCESS } from '../../redux/action';
import SearchFlatList from './searchFlatList';

const Search = () => {
  const dispatch = useDispatch();
  const { login } = useSelector(({ userReducer }: rootState) => ({
    login: userReducer.login,
  }));
  //axios default token 검색 -> axios interceptors 사용

  const { searchStudyList, searchHistoryList } = useSelector(
    (state: rootState) => ({
      searchStudyList: state.searchReducer.searchStudyList,
      searchHistoryList: state.searchReducer.searchHistoryList,
    }),
    shallowEqual
  );

  const searchInput = useInput('');

  const refreshSearch = () => {
    dispatch(searchHistoryRequest(login.token));
    dispatch({ type: REFRESH_STUDY_LIST_SUCCESS });
  };

  const handleSearchAllDelete = () => {
    dispatch(searchAllDeleteThunk(login.token));
  };

  const handleSearchDelete = (id: number) => {
    dispatch(searchDeleteThunk(login.token, id));
  };

  useEffect(() => {
    dispatch(searchHistoryRequest(login.token));
  }, [dispatch]);

  const handleWordPress = async (searchKeyword: string) => {
    searchInput.onChange('');
    await dispatch(searchRequest(login.token, searchKeyword));
    await dispatch(searchHistoryRequest(login.token));
  };

  const handleSearch = async () => {
    const searchKeyword = searchInput.value;
    if (searchKeyword.trim() === '') {
      searchInput.onChange('');
      return;
    } else {
      searchInput.onChange('');
      await dispatch(searchRequest(login.token, searchKeyword));
      await dispatch(searchHistoryRequest(login.token));
    }
  };

  const goAlarm = UseGoAlarm;

  const [isRefreshing, setIsRefreshing] = useState(false); // X flatList 내부의 로딩

  const refreshScreen = () => {
    setIsRefreshing(true);
    refreshSearch();
    setIsRefreshing(false);
  };

  return (
    <ContainerWithBell
      title="검색"
      onPressBell={goAlarm()}
      onPressTitle={refreshScreen}
    >
      <SearchForm searchInput={searchInput} onPress={handleSearch} />
      {searchStudyList ? (
        <SearchFlatList
          refreshScreen={refreshScreen}
          isRefreshing={isRefreshing}
          searchStudyList={searchStudyList}
        />
      ) : (
        <SearchWord
          searches={searchHistoryList}
          onPressSearchDelete={handleSearchAllDelete}
          onPressX={handleSearchDelete}
          onPressWord={handleWordPress}
          onRecommendWord={handleWordPress}
        />
      )}
    </ContainerWithBell>
  );
};

export default Search;
