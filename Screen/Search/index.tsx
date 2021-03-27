import React, { useState, useRef, useCallback } from 'react';
import { AsyncStorage } from 'react-native';
import SearchContainer from './components/searchHeader/searchHeaderContainer';
import SearchForm from './components/SearchForm/SearchForm';
import styled from 'styled-components/native';
import useInput from '../SignIn/util/useInput';
import OptionMenu from './components/optionMenu';
import RecommendContainer from './components/Recommend/RecommendContainer';
import SearchStoryList from './record/searchStoryList';

const Search = () => {
  const [searches, setSearches] = useState([
    {
      id: 1,
      text: '토익공부',
    },
    {
      id: 2,
      text: '파이썬공부',
    },
    {
      id: 3,
      text: '코딩테스트',
    },
  ]);

  const nextId = useRef(4);

  const RealonPressSearchDelete = useCallback(() => {
    setSearches([]);
  }, [searches]);
  // 이게 맞을까? 배열 초기화

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
        console.log(searchVoca, '저장 완료');
      }
    );

    AsyncStorage.getItem('beforeSearch', (err, result) => {
      const BeforeSearch = JSON.parse(result);
      console.log(BeforeSearch, '가져옴');
      onInsert(BeforeSearch.text);
      //setSearches(BeforeSearch.searchVoca);
    });
  };

  return (
    <SearchContainer headerTitle="검색">
      <Container>
        <SearchForm searchInput={searchInput} onPress={searchSomething} />
        <OptionMenu onPressSearchDelete={RealonPressSearchDelete} />
        <ListContainer>
          <SearchStoryList searches={searches} onPressX={onRemove} />
        </ListContainer>
        <Line />
        <RecommendContainer />
      </Container>
    </SearchContainer>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const ListContainer = styled.View`
  height: 50px;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;
`;
const Line = styled.Text`
  width: 100%;
  height: 10px;
  background-color: #e3e3e3;
  margin: 10px 0;
`;

export default Search;
