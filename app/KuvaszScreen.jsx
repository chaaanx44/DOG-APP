import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const KuvaszScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/images/kuvaszp.jpg')} // Replace with actual image path
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Kuvasz</Text>

          <Text style={styles.subTitle}>Size</Text>
          <Text style={styles.description}>
            Height: 26 to 30 inches (66 to 76 cm) | Weight: 70 to 115 pounds (32 to 52 kg)
          </Text>

          <Text style={styles.subTitle}>Temperament</Text>
          <Text style={styles.description}>
            The Kuvasz is loyal, independent, and protective. Originally bred to guard livestock, they are brave and courageous, making them excellent guardians. They are also affectionate with their family.
          </Text>

          <Text style={styles.subTitle}>Grooming</Text>
          <Text style={styles.description}>
            Kuvasz have a thick, double coat that requires regular brushing to prevent matting. They shed heavily, especially during seasonal changes, and benefit from frequent grooming sessions.
          </Text>

          <Text style={styles.subTitle}>Health Concerns</Text>
          <Text style={styles.description}>
            Common health concerns include hip dysplasia, osteochondritis dissecans, and hypothyroidism. Regular vet check-ups and maintaining a healthy diet can help manage potential health issues.
          </Text>

          <Text style={styles.subTitle}>Exercise Needs</Text>
          <Text style={styles.description}>
            Kuvasz require regular exercise, about 1 to 2 hours daily, to stay fit and happy. Long walks, open spaces to roam, and mental stimulation activities are important for their well-being.
          </Text>

          <Text style={styles.subTitle}>Training</Text>
          <Text style={styles.description}>
            Kuvasz can be independent and strong-willed, so early socialization and consistent training are necessary. They respond well to positive reinforcement and firm, but fair leadership.
          </Text>

          <Text style={styles.subTitle}>Family Compatibility</Text>
          <Text style={styles.description}>
            Kuvasz are loyal and protective of their families. They are known to be excellent with children, but due to their size and strong guarding instincts, supervision is advised around smaller pets and young children.
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

export default KuvaszScreen;
