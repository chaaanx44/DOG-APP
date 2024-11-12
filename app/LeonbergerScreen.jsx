import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const LeonbergerScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/images/leon.jpg')} // Replace with actual image path
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Leonberger</Text>

          <Text style={styles.subTitle}>Size</Text>
          <Text style={styles.description}>
            Height: 25 to 31 inches (64 to 79 cm) | Weight: 90 to 170 pounds (41 to 77 kg)
          </Text>

          <Text style={styles.subTitle}>Temperament</Text>
          <Text style={styles.description}>
            Leonbergers are known for their friendly, gentle, and playful nature. They are loyal and protective of their families, making them excellent companions and family pets.
          </Text>

          <Text style={styles.subTitle}>Grooming</Text>
          <Text style={styles.description}>
            Their thick, water-resistant coat requires regular grooming, particularly during shedding seasons. A thorough brushing at least once a week helps keep their coat healthy.
          </Text>

          <Text style={styles.subTitle}>Health Concerns</Text>
          <Text style={styles.description}>
            Common health issues include hip dysplasia, elbow dysplasia, and certain types of heart disease. Regular veterinary check-ups and a healthy lifestyle can mitigate these risks.
          </Text>

          <Text style={styles.subTitle}>Exercise Needs</Text>
          <Text style={styles.description}>
            Leonbergers need regular exercise, ideally 1-2 hours a day. They enjoy walks, playtime, and swimming, and they thrive in homes with space to roam.
          </Text>

          <Text style={styles.subTitle}>Training</Text>
          <Text style={styles.description}>
            They are intelligent and eager to please, making them relatively easy to train. Early socialization and positive reinforcement techniques are recommended for best results.
          </Text>

          <Text style={styles.subTitle}>Family Compatibility</Text>
          <Text style={styles.description}>
            Leonbergers are excellent family dogs. They are gentle with children and get along well with other pets. Their affectionate nature makes them a great addition to any household.
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
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
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

export default LeonbergerScreen;
