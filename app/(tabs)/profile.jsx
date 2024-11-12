import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const Profile = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/wallpaper.jpg')} 
      style={styles.background}
    >
      {/* Semi-transparent overlay */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require('../../assets/images/cj.png')} style={styles.profileImage} />
          <Text style={styles.nameText}>CJ</Text>
          <Text style={styles.emailText}>cj21@gmail.com</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.heading}>Contact Information:</Text>
            <Text style={styles.infoText}>Phone: +93 456 7890</Text>
            <Text style={styles.infoText}>Address: Toledo City</Text>
            <Text style={styles.heading}>Hobbies:</Text>
            <Text style={styles.infoText}>- Traveling</Text>
            <Text style={styles.infoText}>- Playing Online Games</Text>
            <Text style={styles.infoText}>- Listening to Music</Text>
          </View>
        </View>
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
  // Semi-transparent overlay for the background
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)', // 50% opacity
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#3498db',
    marginBottom: 15,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  infoText: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 5,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});

export default Profile;
