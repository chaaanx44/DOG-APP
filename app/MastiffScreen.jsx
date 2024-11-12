import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const MastiffScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/images/mastiffp.jpg')} // Replace with the actual image path
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Mastiff</Text>

          <Text style={styles.subTitle}>Size</Text>
          <Text style={styles.description}>
            Height: 24 to 30 inches (61 to 76 cm) | Weight: 110 to 230 pounds (50 to 104 kg)
          </Text>

          <Text style={styles.subTitle}>Temperament</Text>
          <Text style={styles.description}>
            Mastiffs are known for their gentle and affectionate nature. They are loyal, protective, and can be quite playful with family members.
          </Text>

          <Text style={styles.subTitle}>Grooming</Text>
          <Text style={styles.description}>
            Their short coat requires minimal grooming, with occasional brushing to manage shedding. Regular nail trimming and dental care are also recommended.
          </Text>

          <Text style={styles.subTitle}>Health Concerns</Text>
          <Text style={styles.description}>
            Common health issues include hip dysplasia, heart conditions, and obesity. Routine vet visits and a healthy diet are crucial for their longevity.
          </Text>

          <Text style={styles.subTitle}>Exercise Needs</Text>
          <Text style={styles.description}>
            Mastiffs require moderate exercise, around 30-60 minutes daily. Short walks and playtime are sufficient to keep them healthy and happy.
          </Text>

          <Text style={styles.subTitle}>Training</Text>
          <Text style={styles.description}>
            Mastiffs are intelligent but can be stubborn. Early socialization and consistent, positive reinforcement training are essential for good behavior.
          </Text>

          <Text style={styles.subTitle}>Family Compatibility</Text>
          <Text style={styles.description}>
            Mastiffs are great family pets. They are gentle with children and can be protective of their family, making them excellent companions.
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

export default MastiffScreen;
