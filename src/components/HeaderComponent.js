import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/colors/colors';
import logo from '../assets/images/eventsLogo-white.png';

const HeaderComponent = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[colors.lightblue, colors.midblue]}
      style={styles.linearGradient}>
      <Image source={logo} style={styles.logo} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    padding: 5,
  },
  logo: {
    resizeMode: 'contain',
    height: 40,
  },
});

export default HeaderComponent;
