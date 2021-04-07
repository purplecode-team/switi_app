import * as React from 'react';
import styled from 'styled-components/native';
import * as Progress from 'react-native-progress';
import SugarExpression from './sugarExpression';
import switi1 from './image/1switi.png';
import switi2 from './image/2switi.png';
import switi3 from './image/3switi.png';
import switi4 from './image/4switi.png';
import switi5 from './image/5switi.png';
import switi6 from './image/6switi.png';

const SugarContent = () => {
  const sugar = 50;
  const sugarData = [
    {
      grade: 1,
      image: switi1,
    },
    {
      grade: 2,
      image: switi2,
    },
    {
      grade: 3,
      image: switi3,
    },
    {
      grade: 4,
      image: switi4,
    },
    {
      grade: 5,
      image: switi5,
    },
    {
      grade: 6,
      image: switi6,
    },
  ];
  //grade key는 필요없을지도? sugarData[grade-1].image로 하면 되니

  const switiChoice = (switi: number) => {
    let grade = 0;
    console.log(switi);
    if (0 <= switi && switi <= 10) {
      grade = 1;
      console.log(grade);
    } else if (10 < switi && switi <= 40) {
      grade = 2;
      console.log(grade);
    } else if (40 < switi && switi <= 55) {
      grade = 3;
      console.log(grade);
    } else if (55 < switi && switi <= 80) {
      grade = 4;
      console.log(grade);
    } else if (80 < switi && switi <= 90) {
      grade = 5;
      console.log(grade);
    } else if (90 < switi && switi <= 100) {
      grade = 6;
      console.log(grade);
    } else console.log('오류');
    return grade;
  };

  const sugarGrade = switiChoice(sugar);
  // sugarGrade = switiChoice(sugar);

  //왜 오류가 나지? sugar : number, switi : number 함수 동작 안하는 이유?

  return (
    <Container>
      <SugarExpression
        imageSource={sugarData[sugarGrade - 1].image}
        sugarContent={sugar}
      />
      <ProgressContainer>
        <Progress.Bar
          progress={sugar / 100}
          width={270}
          height={10}
          color="#86E3C3"
          unfilledColor="#F3F3F3"
          borderWidth={0}
        />
      </ProgressContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 86px;
  background-color: #fffcf5;
  border-radius: 20px;
  justify-content: center;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const ProgressContainer = styled.View`
  padding-left: 20px;
  justify-content: center;
`;

export default SugarContent;
