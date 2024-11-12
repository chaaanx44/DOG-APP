import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <ImageBackground
      source={require('../assets/images/wallpaper.jpg')}
      style={styles.background} 
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/happy.png')}  // Path to your logo image
          style={styles.logo} 
          resizeMode="contain" 
        />
        <Text style={styles.header}>DOGS</Text>
        <View style={styles.buttonContainer}>
          <Link href="/home" style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Link>
        </View>
        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0)', // Semi-transparent background
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 180,  // Adjust width and height of the logo
    height: 180,
    marginBottom: 0, // Adds space between the logo and header
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#E85C0D',
    marginBottom: 200,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#004d40',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
