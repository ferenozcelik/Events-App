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
  const {title, location, month, day} = route.params;

  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={eventImage} style={styles.eventImage}>
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
          <Text style={styles.eventTitle}>{title}</Text>
        </View>
        <View style={styles.eventDateTimeContainer}>
          <Feather
            name="calendar"
            size={25}
            color={colors.darkblue}
            style={{marginRight: 10}}
          />
          <Text style={styles.dateTimeText}>{day} </Text>
          <Text style={styles.dateTimeText}>{month} </Text>
          <Text style={styles.dateTimeText}>2023</Text>
        </View>
        <View style={styles.eventDateTimeContainer}>
          <Feather
            name="clock"
            size={25}
            color={colors.darkblue}
            style={{marginRight: 10}}
          />
          <Text style={styles.dateTimeText}>Start Time: </Text>
          <Text style={styles.dateTimeText}>19.30</Text>
        </View>
        <View style={styles.eventLocationContainer}>
          <Feather
            name="map-pin"
            size={25}
            color={colors.darkblue}
            style={{marginRight: 10}}
          />
          <View>
            <Text style={styles.locationText}>{location}</Text>
            <Text style={styles.locationSubText}>12880 E. 146th St.</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
          <Image source={map} style={styles.map} />
        </View>

        <View style={styles.subDetailsContainer}>
          <Text style={styles.subDetailsText}>Details</Text>
          <Text style={styles.subDetailsSubText}>
            This is an outdoor venue with portions of the reserved seats under
            cover. The show will take place rain or shine. All dates, acts, &
            ticket prices subject to change without notice. All tickets are
            subject to applicable service fees via all points of sale. Children
            under 2 are free as long as they don't take up a seat.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetailsScreen;
