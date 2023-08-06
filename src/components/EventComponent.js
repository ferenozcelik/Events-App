import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../assets/colors/colors';
import eventImage from '../assets/images/eventCover.png';
import {useNavigation} from '@react-navigation/native';
import {getMonthName} from './Constants';

const EventComponent = props => {
  const navigation = useNavigation();
  const item = props.item;

  var monthName = getMonthName(item.date);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('EventsStackNavigator', {
          screen: 'EventDetailsScreen',
          params: {
            item,
            monthName: monthName,
          },
        });
      }}>
      <View style={styles.eventBoxContainer}>
        <View style={styles.eventBox}>
          <View style={styles.eventInfoContainer}>
            <View style={styles.eventImageContainer}>
              <Image source={{uri: item.image}} style={styles.eventImage} />
            </View>
            <View style={styles.eventDetailsContainer}>
              <View style={styles.eventDateContainer}>
                <Text style={styles.eventDateText}>
                  {monthName.slice(0, 3)}
                </Text>
                <Text style={styles.eventDateText}>{item.date.slice(-2)}</Text>
              </View>
              <View style={styles.eventTitleContainer}>
                <Text style={styles.eventTitleText} numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.eventLocationText}>{item.city}, </Text>
                  <Text style={styles.eventLocationText}>{item.state}, </Text>
                  <Text style={styles.eventLocationText}>{item.country}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventBoxContainer: {
    marginRight: 10,
  },
  eventBox: {
    backgroundColor: colors.lightgrey,
    width: 320,
    height: 190,
    borderRadius: 5,
    // borderWidth: 1,
  },
  eventInfoContainer: {
    borderRadius: 5,
  },
  eventImageContainer: {},
  eventImage: {
    width: 320,
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  eventDetailsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  eventDateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
  },
  eventDateText: {
    fontFamily: 'Montserrat-Medium',
    color: colors.lightblue,
    fontSize: 14,
  },
  eventTitleContainer: {
    flexDirection: 'column',
  },
  eventTitleText: {
    fontFamily: 'Montserrat-Medium',
    color: colors.darkblue,
    fontSize: 14,
    maxWidth: 260,
    // minHeight: 36,
  },
  eventLocationText: {
    fontFamily: 'Montserrat-Medium',
    color: colors.midgrey,
    fontSize: 14,
    maxWidth: 260,
  },
});

export default EventComponent;
