import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const GreatdaneScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/images/great.jpg')} // Replace with the actual image path
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Great Dane</Text>

          <Text style={styles.subTitle}>Size</Text>
          <Text style={styles.description}>
            Height: 28 to 34 inches (71 to 86 cm) | Weight: 110 to 175 pounds (50 to 79 kg)
          </Text>

          <Text style={styles.subTitle}>Temperament</Text>
          <Text style={styles.description}>
            Great Danes are known for their friendly and gentle nature. They are affectionate, loyal, and get along well with children and other pets.
          </Text>

          <Text style={styles.subTitle}>Grooming</Text>
          <Text style={styles.description}>
            Their short coat requires minimal grooming, just a weekly brushing to remove loose hair. Regular nail trimming is also recommended.
          </Text>

          <Text style={styles.subTitle}>Health Concerns</Text>
          <Text style={styles.description}>
            Common health issues include hip dysplasia, bloat, and heart problems. Regular vet visits and a balanced diet are essential for their well-being.
          </Text>

          <Text style={styles.subTitle}>Exercise Needs</Text>
          <Text style={styles.description}>
            Great Danes require moderate exercise, ideally 30-60 minutes a day. They enjoy walks, playtime, and socialization with other dogs.
          </Text>

          <Text style={styles.subTitle}>Training</Text>
          <Text style={styles.description}>
            Great Danes are intelligent and eager to please, making them relatively easy to train. Early socialization and positive reinforcement are important.
          </Text>

          <Text style={styles.subTitle}>Family Compatibility</Text>
          <Text style={styles.description}>
            Great Danes are gentle giants that make excellent family pets. They are patient and affectionate, though their size requires supervision around small children.
          </Text>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for better visibility
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFD700', // Gold color for better visibility
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
    marginTop: 15,
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF', // White for better contrast
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 20,
    lineHeight: 26,
    paddingHorizontal: 10, // Horizontal padding for text
  },
});

export default GreatdaneScreen;
