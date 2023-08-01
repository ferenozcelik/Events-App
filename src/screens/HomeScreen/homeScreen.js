import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './homeScreenStyles';
import logo from '../../assets/images/eventsLogo-white.png';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import CategoryComponent from '../../components/CategoryComponent';
import EventComponent from '../../components/EventComponent';

const HomeScreen = ({navigation}) => {
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
        <View style={styles.categoryBrowserContainer}>
          <Text style={styles.browserText}>BROWSE BY CATEGORY</Text>

          <View style={styles.categoriesContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <CategoryComponent categoryName="Miscellaneous" />
              <CategoryComponent categoryName="Sports" />
              <CategoryComponent categoryName="Music" />
              <CategoryComponent categoryName="Arts & Theatre" />
              <CategoryComponent categoryName="Arts & Theatre" />
            </ScrollView>
          </View>
        </View>

        <View style={styles.eventBrowserContainer}>
          <View style={styles.browserTitleContainer}>
            <Text style={styles.browserText}>UPCOMING EVENTS</Text>
            <TouchableOpacity>
              <Text style={styles.browserExpandText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.eventsContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <EventComponent
                title="Mountain Climbing Training for Beginners"
                location="Noblesville, Indiana, US"
                month="January"
                day="26"
              />
              <EventComponent
                title="Athleta Mind Over Madness Yoga at The Fields"
                location="Los Angeles, Indiana, US"
                month="February"
                day="2"
              />
              <EventComponent
                title="The Uppsala River Rafting Event"
                location="Los Angeles, Indiana, US"
                month="February"
                day="3"
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.eventBrowserContainer}>
          <View style={styles.browserTitleContainer}>
            <Text style={styles.browserText}>NEARBY EVENTS</Text>
            <TouchableOpacity>
              <Text style={styles.browserExpandText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.eventsContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <EventComponent
                title="Mountain Climbing Training for Beginners"
                location="Noblesville, Indiana, US"
                month="January"
                day="26"
              />
              <EventComponent
                title="Curabitur malesuada laoreet volutpat fusce"
                location="Los Angeles, Indiana, US"
                month="January"
                day="8"
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.eventBrowserContainer}>
          <View style={styles.browserTitleContainer}>
            <Text style={styles.browserText}>FAVORITE EVENTS</Text>
            <TouchableOpacity>
              <Text style={styles.browserExpandText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.eventsContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <EventComponent
                title="Vestibulum auctor pharetra dolor sit"
                location="Los Angeles, Indiana, US"
                month="December"
                day="1"
              />
              <EventComponent
                title="Phasellus interdum dapibus sem vitae"
                location="Los Angeles, Indiana, US"
                month="December"
                day="13"
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
