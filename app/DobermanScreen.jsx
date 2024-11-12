import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const DobermanScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/images/doberman.jpg')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Doberman Pinscher</Text>

          <Text style={styles.subTitle}>Size</Text>
          <Text style={styles.description}>
            Height: 24 to 28 inches (61 to 71 cm) | Weight: 60 to 100 pounds (27 to 45 kg)
          </Text>

          <Text style={styles.subTitle}>Temperament</Text>
          <Text style={styles.description}>
            Dobermans are loyal, intelligent, and protective. They are fearless and confident, making them excellent guard dogs, but they are also affectionate with family when properly trained.
          </Text>

          <Text style={styles.subTitle}>Grooming</Text>
          <Text style={styles.description}>
            Their short, smooth coat requires minimal grooming—just a weekly brushing and regular nail trimming. Dobermans shed minimally year-round.
          </Text>

          <Text style={styles.subTitle}>Health Concerns</Text>
          <Text style={styles.description}>
            Common health issues include Dilated Cardiomyopathy (DCM), hip dysplasia, and Von Willebrand's disease. Regular vet visits and a healthy lifestyle are essential.
          </Text>

          <Text style={styles.subTitle}>Exercise Needs</Text>
          <Text style={styles.description}>
            Dobermans need 1-2 hours of exercise daily to stay healthy and mentally stimulated. They excel in obedience training, agility, and other dog sports.
          </Text>

          <Text style={styles.subTitle}>Training</Text>
          <Text style={styles.description}>
            Dobermans are highly trainable and intelligent. Early socialization and consistent, positive reinforcement training help them reach their full potential.
          </Text>

          <Text style={styles.subTitle}>Family Compatibility</Text>
          <Text style={styles.description}>
            Dobermans can be great family pets with proper training and socialization. They are protective of children and can get along with other pets, though supervision is recommended.
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
    paddingVertical: 40, // Increased vertical padding for more space
  },
  title: {
    fontSize: 32, // Increased title font size
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for better visibility
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 24, // Increased subtitle font size
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
    marginBottom: 20, // Increased bottom margin for spacing
    lineHeight: 26, // Adjusted line height for better readability
    paddingHorizontal: 10, // Horizontal padding for text
  },
});

export default DobermanScreen;
