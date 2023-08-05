import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './homeScreenStyles';
import CategoryComponent from '../../components/CategoryComponent';
import EventComponent from '../../components/EventComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {apiURL} from '../../components/Constants';

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => alert(error))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000),
      );
  }, []);

  const renderItem = ({item}) => <EventComponent item={item} />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderComponent />
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

        {isLoading ? (
          <ActivityIndicator style={{marginTop: 50}} />
        ) : (
          <View>
            <View style={styles.eventBrowserContainer}>
              <View style={styles.browserTitleContainer}>
                <Text style={styles.browserText}>UPCOMING EVENTS</Text>
                <TouchableOpacity>
                  <Text style={styles.browserExpandText}>View All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.eventsContainer}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data.sort((a, b) => b.date.localeCompare(a.date))}
                  renderItem={renderItem}
                />
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
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data.sort((a, b) => b.date.localeCompare(a.date))}
                  renderItem={renderItem}
                />
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
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={data.sort((a, b) => b.date.localeCompare(a.date))}
                  renderItem={renderItem}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
