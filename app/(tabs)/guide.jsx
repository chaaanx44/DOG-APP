import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ProgressBarAndroid,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

// Updated training data for your specified breeds
const trainingGuides = [
  {
    id: '1',
    breed: 'Doberman Pinscher',
    description:
      'Dobermans are highly trainable. Focus on basic obedience and protection commands.',
    steps: [
      'Step 1: Teach Sit and Stay',
      'Step 2: Recall Training',
      'Step 3: Leash Walking',
      'Step 4: Advanced Protection Commands',
    ],
    image: require('../../assets/images/doberman_pinscher.jpg'),
  },
  {
    id: '2',
    breed: 'Dogue de Bordeaux',
    description:
      'Dogue de Bordeaux are loyal and affectionate. Emphasize socialization and basic obedience.',
    steps: [
      'Step 1: Socialization with People and Animals',
      'Step 2: Basic Obedience Commands',
      'Step 3: Leash Training',
      'Step 4: House Training',
    ],
    image: require('../../assets/images/dogue_de_bordeaux.jpg'),
  },
  {
    id: '3',
    breed: 'German Pinscher',
    description:
      'German Pinschers are intelligent and energetic. Focus on mental stimulation and obedience.',
    steps: [
      'Step 1: Basic Obedience Commands',
      'Step 2: Mental Stimulation Games',
      'Step 3: Crate Training',
      'Step 4: Advanced Agility Training',
    ],
    image: require('../../assets/images/german.jpg'),
  },
  {
    id: '4',
    breed: 'Kuvasz',
    description:
      'Kuvasz dogs are independent and protective. Early socialization and firm training are key.',
    steps: [
      'Step 1: Early Socialization',
      'Step 2: Establish Leadership',
      'Step 3: Consistent Obedience Training',
      'Step 4: Boundary Training',
    ],
    image: require('../../assets/images/kuvasz.jpg'),
  },
  {
    id: '5',
    breed: 'Leonberger',
    description:
      'Leonbergers are gentle giants. Emphasize gentle training methods and socialization.',
    steps: [
      'Step 1: Puppy Socialization Classes',
      'Step 2: Basic Obedience Commands',
      'Step 3: Leash Training',
      'Step 4: Swimming and Water Activities',
    ],
    image: require('../../assets/images/leonberger.jpg'),
  },
  {
    id: '6',
    breed: 'Pyrenees',
    description:
      'Pyrenees are calm and protective. Focus on socialization and consistent training.',
    steps: [
      'Step 1: Socialization with Various Environments',
      'Step 2: Basic Obedience Commands',
      'Step 3: Leash Training',
      'Step 4: Livestock Guardian Training',
    ],
    image: require('../../assets/images/pyrenees.jpg'),
  },
  {
    id: '7',
    breed: 'Great Dane',
    description:
      'Great Danes are friendly and affectionate. Emphasize gentle obedience training.',
    steps: [
      'Step 1: Basic Obedience Commands',
      'Step 2: House Training',
      'Step 3: Leash Walking',
      'Step 4: Socialization with People and Dogs',
    ],
    image: require('../../assets/images/dane.jpg'),
  },
  {
    id: '8',
    breed: 'Mastiff',
    description:
      'Mastiffs are gentle and protective. Focus on early socialization and obedience.',
    steps: [
      'Step 1: Early Socialization',
      'Step 2: Basic Obedience Training',
      'Step 3: Leash Training',
      'Step 4: Positive Reinforcement Techniques',
    ],
    image: require('../../assets/images/mastiff.jpg'),
  },
];

const InteractiveTrainingGuide = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleStartTraining = (breed) => {
    setSelectedBreed(breed);
    setProgress(0); // Reset progress when a new breed is selected
    setCompleted(false);
  };

  const handleProgress = () => {
    const stepFraction = 1 / selectedBreed.steps.length;
    const newProgress = Math.min(progress + stepFraction, 1); // Cap progress at 100%
    setProgress(newProgress);

    if (newProgress >= 1) {
      setCompleted(true); // Mark training as complete when all steps are done
    }
  };

  const renderTrainingStep = (step, index) => (
    <TouchableOpacity key={index} style={styles.stepButton} onPress={handleProgress}>
      <Text style={styles.stepText}>{step}</Text>
    </TouchableOpacity>
  );

  const renderBreed = ({ item }) => (
    <TouchableOpacity style={styles.breedItem} onPress={() => handleStartTraining(item)}>
      <Image source={item.image} style={styles.breedImage} />
      <View style={styles.breedInfo}>
        <Text style={styles.breedTitle}>{item.breed}</Text>
        <Text style={styles.breedDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCompletionMessage = () => (
    <View style={styles.completionMessage}>
      <Text style={styles.completionTitle}>Congratulations!</Text>
      <Text style={styles.completionText}>
        You have successfully completed the training for your {selectedBreed.breed}.
      </Text>
      <Text style={styles.completionDetails}>Here's what you've achieved:</Text>
      <View style={styles.completionDetailsList}>
        {selectedBreed.steps.map((step, index) => (
          <Text key={index} style={styles.completionStep}>
            ✔ {step}
          </Text>
        ))}
      </View>
      <Text style={styles.completionText}>
        Your dog is now trained in these areas. Keep practicing to maintain and reinforce their
        skills!
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/wallpaper.jpg')} // Fullscreen background image
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.header}>Interactive Training Guide</Text>

      {!selectedBreed ? (
        <FlatList data={trainingGuides} keyExtractor={(item) => item.id} renderItem={renderBreed} />
      ) : (
        <View style={styles.trainingSection}>
          <Image source={selectedBreed.image} style={styles.selectedImage} />
          <Text style={styles.selectedBreed}>{selectedBreed.breed} Training Guide</Text>
          {!completed ? (
            <>
              <ScrollView style={styles.stepList}>
                {selectedBreed.steps.map((step, index) => renderTrainingStep(step, index))}
              </ScrollView>
              <ProgressBarAndroid styleAttr="Horizontal" progress={progress} color="#00796b" />
              <Text style={styles.progressText}>
                Training Progress: {(progress * 100).toFixed(0)}%
              </Text>
            </>
          ) : (
            renderCompletionMessage()
          )}
        </View>
      )}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  breedItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  breedImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  breedInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  breedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  breedDescription: {
    fontSize: 14,
    color: '#555',
  },
  trainingSection: {
    alignItems: 'center',
  },
  selectedImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedBreed: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  stepList: {
    width: '100%',
    marginBottom: 20,
  },
  stepButton: {
    backgroundColor: '#00796b',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  stepText: {
    color: '#fff',
    fontSize: 16,
  },
  progressText: {
    marginVertical: 10,
    fontSize: 16,
  },
  completionMessage: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
  },
  completionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#00796b',
  },
  completionText: {
    fontSize: 16,
    color: '#00796b',
    textAlign: 'center',
    marginBottom: 15,
  },
  completionDetails: {
    fontSize: 18,
    color: '#00796b',
    marginBottom: 10,
  },
  completionDetailsList: {
    width: '100%',
    marginBottom: 10,
  },
  completionStep: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 5,
  },
});

export default InteractiveTrainingGuide;
