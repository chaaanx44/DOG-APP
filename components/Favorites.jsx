// Favorites.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Favorites = ({ favoriteBreeds, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Favorite Breeds</Text>
    <FlatList
      data={favoriteBreeds}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo)}>
          <View style={styles.favoriteItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  favoriteItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  image: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  text: { fontSize: 18 },
});

export default Favorites;
