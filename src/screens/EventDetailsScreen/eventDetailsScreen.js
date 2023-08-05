import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import eventImage from '../../assets/images/eventCover.png';
import styles from './eventDetailsScreenStyles';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../assets/colors/colors';
import map from '../../assets/images/map.png';

const EventDetailsScreen = ({route, navigation}) => {
  // const {title, location, month, day} = route.params;
  const {item, monthName} = route.params;

  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={{uri: item.image}} style={styles.eventImage}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Feather
                name="chevron-left"
                size={40}
                color={colors.white}
                style={{marginTop: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFavorite}>
              {favorite ? (
                <Octicons
                  name="star-fill"
                  size={32}
                  color={colors.white}
                  style={{marginTop: 15, marginRight: 15}}
                />
              ) : (
                <Octicons
                  name="star"
                  size={32}
                  color={colors.white}
                  style={{marginTop: 15, marginRight: 15}}
                />
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.eventDetailsContainer}>
        <View style={styles.eventTitleContainer}>
          <Text style={styles.eventTitle}>{item.title}</Text>
        </View>
        <View style={styles.eventDateTimeContainer}>
          <Feather
            name="calendar"
            size={25}
            color={colors.darkblue}
            style={{marginRight: 10}}
          />
          <Text style={styles.dateTimeText}>{item.date.slice(-2)} </Text>
          <Text style={styles.dateTimeText}>{monthName} </Text>
          <Text style={styles.dateTimeText}>{item.date.slice(0, 4)}</Text>
        </View>
        <View style={styles.eventDateTimeContainer}>
          <Feather
            name="clock"
            size={25}
            color={colors.darkblue}
            style={{marginRight: 10}}
          />
          <Text style={styles.dateTimeText}>Start Time: </Text>
          <Text style={styles.dateTimeText}>{item.time}</Text>
        </View>
        <View style={styles.eventLocationContainer}>
          <Feather
            name="map-pin"
            size={25}
            color={colors.darkblue}
            style={{marginRight: 10}}
          />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.locationText}>{item.city}, </Text>
              <Text style={styles.locationText}>{item.state}, </Text>
              <Text style={styles.locationText}>{item.country}</Text>
            </View>
            <Text style={styles.locationSubText}>{item.address}</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
          <Image source={map} style={styles.map} />
        </View>

        <View style={styles.subDetailsContainer}>
          <Text style={styles.subDetailsText}>Details</Text>
          <Text style={styles.subDetailsSubText}>{item.details}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetailsScreen;
