import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const PyreneesScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/images/pyre.jpg')} // Replace with actual image path
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Great Pyrenees</Text>

          <Text style={styles.subTitle}>Size</Text>
          <Text style={styles.description}>
            Height: 25 to 32 inches (63 to 81 cm) | Weight: 85 to 160 pounds (39 to 73 kg)
          </Text>

          <Text style={styles.subTitle}>Temperament</Text>
          <Text style={styles.description}>
            Great Pyrenees are known for their calm, gentle, and affectionate nature. They are loyal and protective, making them excellent family companions and guardians.
          </Text>

          <Text style={styles.subTitle}>Grooming</Text>
          <Text style={styles.description}>
            Their thick double coat requires regular grooming, particularly during shedding seasons. Brushing at least twice a week helps manage loose fur and keeps their coat healthy.
          </Text>

          <Text style={styles.subTitle}>Health Concerns</Text>
          <Text style={styles.description}>
            Common health issues include hip dysplasia, elbow dysplasia, and certain heart conditions. Regular vet check-ups and a balanced diet are essential for their health.
          </Text>

          <Text style={styles.subTitle}>Exercise Needs</Text>
          <Text style={styles.description}>
            Great Pyrenees need moderate exercise, ideally 30-60 minutes a day. They enjoy walks, playtime, and activities that engage their natural instincts.
          </Text>

          <Text style={styles.subTitle}>Training</Text>
          <Text style={styles.description}>
            They are intelligent and independent, which can make training a challenge. Early socialization and consistent, positive reinforcement methods are recommended.
          </Text>

          <Text style={styles.subTitle}>Family Compatibility</Text>
          <Text style={styles.description}>
            Great Pyrenees are excellent family pets. They are gentle with children and can get along well with other animals, but supervision is advised due to their protective nature.
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

export default PyreneesScreen;
