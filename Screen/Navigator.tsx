import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Search from './Search';
import Management from './Management';
import MyPage from './MyPage';
import SignUp from './SignUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

const LoginNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="로그인" component={SignIn} />
    <Stack.Screen name="회원가입" component={SignUp} />
  </Stack.Navigator>
);

const HomeNavigation = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="오프라인" component={Home} />
      <MaterialTopTab.Screen name="온라인" component={Home} />
    </MaterialTopTab.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavi"
        component={HomeNavigation}
        options={{ tabBarLabel: '홈' }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarLabel: '검색' }}
      />
      <Tab.Screen
        name="Management"
        component={Management}
        options={{ tabBarLabel: '스터디 관리' }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{ tabBarLabel: '마이페이지' }}
      />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Switi" component={TabNavigation} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const user = true;
  return (
    <NavigationContainer>
      {user ? <MainNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigator;