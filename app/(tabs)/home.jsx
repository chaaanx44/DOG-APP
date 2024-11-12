import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DogBreeds = () => {
  const navigation = useNavigation();

  const dogData = [
    {
      name: 'Doberman Pinscher',
      image: require('../../assets/images/doberman_pinscher.jpg'),
      navigateTo: 'DobermanScreen', // Navigation target
    },
    {
      name: 'Dogue De Bordeaux',
      image: require('../../assets/images/dogue_de_bordeaux.jpg'),
      navigateTo: 'DogueScreen',
    },
    {
      name: 'German Pinscher',
      image: require('../../assets/images/german.jpg'),
      navigateTo: 'GermanScreen'
    },
    {
      name: 'Kuvasz',
      image: require('../../assets/images/kuvasz.jpg'),
      navigateTo: 'KuvaszScreen'
    },
    {
      name: 'Leonberger',
      image: require('../../assets/images/leonberger.jpg'),
      navigateTo: 'LeonbergerScreen'
    },
    {
      name: 'Pyrenees',
      image: require('../../assets/images/pyrenees.jpg'),
      navigateTo: 'PyreneesScreen'
    },
    {
      name: 'Great Dane',
      image: require('../../assets/images/dane.jpg'),
      navigateTo: 'GreatdaneScreen'
    },
    {
      name: 'Mastiff',
      image: require('../../assets/images/mastiff.jpg'),
      navigateTo: 'MastiffScreen'
    },
  ];

  const handlePress = (dog) => {
    if (dog.navigateTo) {
      navigation.navigate(dog.navigateTo);
    } else {
      alert(`${dog.name} selected!`);
    }
    const handleCompare = () => {
      if (selectedBreeds.length === 0) {
        Alert.alert('No Breeds Selected', 'Please select at least one breed to compare.');
      } else {
        navigation.navigate('ComparisonScreen', { selectedBreeds });
      }
    };
    
  };

  return (
    <ImageBackground
      source={require('../../assets/images/wallpaper.jpg')} // Fullscreen background image
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Types of Dogs</Text>
        <View style={styles.grid}>
          {dogData.map((dog, index) => (
            <TouchableOpacity key={index} style={styles.dogItem} onPress={() => handlePress(dog)}>
              <Image source={dog.image} style={styles.dogImage} />
              <Text style={styles.dogName}>{dog.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',

  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dogItem: {
    width: '45%',
    marginVertical: 20,
    alignItems: 'center',
  },
  dogImage: {
    width: 180,
    height: 180,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  dogName: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default DogBreeds;
