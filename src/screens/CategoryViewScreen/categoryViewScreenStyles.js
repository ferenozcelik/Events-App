import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    marginTop: 30,
    marginHorizontal: 10,
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
  titleText: {
    fontFamily: 'Montserrat-Bold',
    color: colors.darkblue,
    fontSize: 18,
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  searchBar: {
    width: 320,
    height: 45,
    borderWidth: 2,
    borderColor: colors.lightblue,
    borderRadius: 5,
    paddingLeft: 45,
    fontSize: 16,
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: 10,
  },
  filterButton: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: colors.lightblue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default styles;
