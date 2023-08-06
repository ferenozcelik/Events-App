import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './categoryViewScreenStyles';
import colors from '../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import BigEventComponent from '../../components/BigEventComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {apiURL} from '../../components/Constants';

const CategoryViewScreen = ({route, navigation}) => {
  const {categoryName} = route.params;
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

  const renderItem = ({item}) => <BigEventComponent item={item} />;

  const pageHeaderComponent = () => (
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
  );

  const pageFooterComponent = () => <View style={{marginTop: 100}}></View>;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderComponent />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{categoryName} Events</Text>

        {isLoading ? (
          <ActivityIndicator style={{marginTop: 30}} />
        ) : (
          <View style={styles.eventsContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data.sort((a, b) => a.date.localeCompare(b.date))}
              renderItem={renderItem}
              ListHeaderComponent={pageHeaderComponent}
              ListFooterComponent={pageFooterComponent}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CategoryViewScreen;
