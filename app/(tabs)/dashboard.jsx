import { View, Text, StyleSheet, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Sample data for popular breeds and user preferences with images
const analyticsData = {
  popularBreeds: [
    {
      id: '1',
      name: 'Doberman',
      views: 120,
      image: require('../../assets/images/doberman_pinscher.jpg'), // Local image
      screen: 'DobermanScreen', // Screen to navigate
    },
    {
      id: '2',
      name: 'Mastiff',
      views: 90,
      image: require('../../assets/images/mastiff.jpg'), // Local image
      screen: 'MastiffScreen', // Screen to navigate
    },
    {
      id: '3',
      name: 'Leonberger',
      views: 75,
      image: require('../../assets/images/leonberger.jpg'), // Local image
      screen: 'LeonbergerScreen', // Screen to navigate
    },
    {
      id: '4',
      name: 'Kuvasz',
      views: 50,
      image: require('../../assets/images/kuvasz.jpg'), // Local image
      screen: 'KuvaszScreen', // Screen to navigate
    },
    {
      id: '5',
      name: 'Pyrenees',
      views: 45,
      image: require('../../assets/images/pyrenees.jpg'), // Local image
      screen: 'PyreneesScreen', // Screen to navigate
    },
  ],
  userPreferences: [
    { id: '1', name: 'Active Breeds', count: 150 },
    { id: '2', name: 'Small Breeds', count: 80 },
    { id: '3', name: 'Family-Friendly', count: 200 },
  ],
};

const Plus = () => {
  const navigation = useNavigation();

  const renderPopularBreed = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.breedImage} />
        <Text style={styles.itemText}>
          {item.name} - <Text style={styles.viewCount}>{item.views} views</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderUserPreference = ({ item }) => (
    <View style={styles.preferenceContainer}>
      <Text style={styles.itemText}>
        {item.name} - <Text style={styles.viewCount}>{item.count} users</Text>
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/wallpaper.jpg')} // Fullscreen background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Analytics Dashboard</Text>

        <Text style={styles.subHeader}>Popular Breeds</Text>
        <FlatList
          data={analyticsData.popularBreeds}
          renderItem={renderPopularBreed}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />

        <Text style={styles.subHeader}>User Preferences</Text>
        <FlatList
          data={analyticsData.userPreferences}
          renderItem={renderUserPreference}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '95%',
    flex: 1,
    padding: 5,
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subHeader: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    color: '#555',
  },
  listContainer: {
    paddingBottom: 10, // Add space at the bottom of the list
  },
  itemContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 5,
    elevation: 2, // Slightly raised for better visibility
    borderColor: '#ccc',
    borderWidth: 1,
  },
  preferenceContainer: {
    padding: 20,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  breedImage: {
    width: 95, // Set desired width
    height: 95, // Set desired height
    borderRadius: 20, // Make it circular
    marginRight: 15, // Spacing between image and text
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  viewCount: {
    fontWeight: 'bold',
    color: '#007BFF', // Highlight view count
  },
});

export default Plus;
