import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {},
  linearGradient: {
    alignItems: 'center',
    padding: 5,
  },
  logo: {
    resizeMode: 'contain',
    height: 40,
  },
  contentContainer: {
    marginBottom: 20,
  },
  categoryBrowserContainer: {
    marginTop: 30,
    marginHorizontal: 10,
  },
  browserText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.darkblue,
    marginBottom: 15,
  },
  categoriesContainer: {
    // flexDirection: 'row',
  },
  eventBrowserContainer: {
    marginTop: 30,
    marginHorizontal: 10,
  },
  browserTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  browserExpandText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.lightblue,
  },
  eventsContainer: {},
});

export default styles;
