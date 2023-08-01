import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoContainer: {
    paddingTop: '2%',
    alignItems: 'center',
    // marginBottom: '10%',
  },
  logo: {
    resizeMode: 'contain',
    width: '80%',
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputBox: {
    backgroundColor: colors.lightgrey,
    width: '80%',
    fontFamily: 'Montserrat-Medium',
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: '4%',

    shadowColor: '#000000',
    elevation: 2,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: '2%',
  },
  buttonText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: colors.white,
  },
  divider: {
    height: StyleSheet.hairlineWidth + 0.1,
    backgroundColor: colors.midgrey,
    width: '85%',
    alignSelf: 'center',
    marginTop: '6%',
    marginBottom: '6%',
  },
  signUpRouterContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signUpText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    color: colors.midgrey,
    marginRight: '2%',
  },
  signUpButton: {},
  signUpButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.lightblue,
  },
});

export default styles;
