import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import CategoryViewScreen from './src/screens/CategoryViewScreen/categoryViewScreen';
import EventDetailsScreen from './src/screens/EventDetailsScreen/eventDetailsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen/favoritesScreen';
import HomeScreen from './src/screens/HomeScreen/homeScreen';
import ProfileScreen from './src/screens/ProfileScreen/profileScreen';
import SearchScreen from './src/screens/SearchScreen/searchScreen';
import SignInScreen from './src/screens/SignInScreen/signInScreen';
import SignUpScreen from './src/screens/SignUpScreen/signUpScreen';
import colors from './src/assets/colors/colors';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SignInStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const EventsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryViewScreen"
        component={CategoryViewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventDetailsScreen"
        component={EventDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="EventsStackNavigator"
      screenOptions={{
        tabBarActiveTintColor: colors.lightblue,
        tabBarInactiveTintColor: colors.midgrey,
        tabBarShowLabel: false,
        tabBarStyle: {height: '8%', backgroundColor: colors.lightgrey},
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="EventsStackNavigator" // buraya stack screen koyulacak?
        component={EventsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather
              name="home"
              size={30}
              color={color}
              // style={{paddingTop: 5}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather
              name="search"
              size={30}
              color={color}
              // style={{marginTop: 5}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather
              name="star"
              size={30}
              color={color}
              // style={{marginTop: 5}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="user" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignInStackNavigator"
          component={SignInStackNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EventsStackNavigator"
          component={EventsStackNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
