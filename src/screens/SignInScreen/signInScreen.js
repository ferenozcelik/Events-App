import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import logo from '../../assets/images/eventsLogo.png';
import styles from './signInScreenStyles';
import colors from '../../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colors.midgrey}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputBox}
        />
        <TextInput
          keyboardType="default"
          placeholder="Password"
          placeholderTextColor={colors.midgrey}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputBox}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('TabNavigator');
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: 'TabNavigator'}],
          // });
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.lightblue, colors.midblue]}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.divider}></View>

      <View style={styles.signUpRouterContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
          hitSlop={5}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
