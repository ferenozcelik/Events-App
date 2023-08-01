import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import colors from '../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';

const CategoryComponent = props => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({pressed}) => [
        styles.categoryBox,
        pressed && styles.categoryBoxOnPressed,
      ]}
      onPress={() => {
        navigation.navigate('EventsStackNavigator', {
          screen: 'CategoryViewScreen',
          params: {
            categoryName: props.categoryName,
          },
        });
      }}>
      {({pressed}) => {
        return (
          <Text
            style={[
              styles.categoryText,
              pressed && styles.categoryTextOnPress,
            ]}>
            {props.categoryName}
          </Text>
        );
      }}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightblue,
    padding: 5,
    marginRight: 10,
  },
  categoryBoxOnPressed: {
    backgroundColor: colors.lightblue,
  },
  categoryText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
  },
  categoryTextOnPress: {
    color: colors.white,
  },
});

export default CategoryComponent;
