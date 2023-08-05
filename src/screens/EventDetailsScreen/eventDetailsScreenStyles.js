import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  eventImage: {
    width: width,
    height: 230,
  },
  eventDetailsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  eventTitleContainer: {
    marginBottom: 20,
  },
  eventTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: colors.darkblue,
  },
  eventDateTimeContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  dateTimeText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.darkblue,
  },
  eventLocationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.darkblue,
  },
  locationSubText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.darkblue,
  },
  mapContainer: {
    width: 350,
    height: 180,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.midgrey,
    alignSelf: 'center',
    // alignItems: 'center',
  },
  map: {
    alignSelf: 'center',
    width: 345,
    height: 175,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  subDetailsContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  subDetailsText: {
    fontFamily: 'Montserrat-Bold',
    color: colors.darkblue,
    fontSize: 18,
  },
  subDetailsSubText: {
    fontFamily: 'Montserrat-Regular',
    color: colors.darkgrey,
    fontSize: 16,
  },
});

export default styles;
