import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './categoryViewScreenStyles';
import colors from '../../assets/colors/colors';
import logo from '../../assets/images/eventsLogo-white.png';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import BigEventComponent from '../../components/BigEventComponent';

const CategoryViewScreen = ({route, navigation}) => {
  const {categoryName} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.lightblue, colors.midblue]}
          style={styles.linearGradient}>
          <Image source={logo} style={styles.logo} />
        </LinearGradient>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{categoryName} Events</Text>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            keyboardType="default"
            placeholderTextColor={colors.midgrey}
            autoCapitalize="none"
            autoCorrect={false}></TextInput>
          <Feather
            name="search"
            size={28}
            color={colors.lightblue}
            style={styles.searchIcon}
          />
          <View style={styles.filterButton}>
            <TouchableOpacity hitSlop={10}>
              <Feather
                name="filter"
                size={28}
                color={colors.lightblue}
                style={{}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eventsContainer}>
          <BigEventComponent
            title="Athleta Mind Over Madness Yoga at The Fields"
            location="Noblesville, Indiana, US"
            month="January"
            day="2"
          />
          <BigEventComponent
            title="Mountain Climbing Training for Beginners"
            location="Los Angeles, Indiana, US"
            month="January"
            day="9"
          />
          <BigEventComponent
            title="The Uppsala River Rafting Event"
            location="Los Angeles, Indiana, US"
            month="January"
            day="11"
          />
          <BigEventComponent
            title="Curabitur malesuada laoreet volutpat fusce"
            location="Los Angeles, Indiana, US"
            month="January"
            day="17"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryViewScreen;