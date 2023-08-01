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
import styles from './signUpScreenStyles';
import colors from '../../assets/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="default"
          placeholder="Full Name"
          placeholderTextColor={colors.midgrey}
          autoCapitalize="words"
          autoCorrect={false}
          style={styles.inputBox}
        />
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

      <TouchableOpacity style={styles.button}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.lightblue, colors.midblue]}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.divider}></View>

      <View style={styles.signInRouterContainer}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}
          hitSlop={5}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
