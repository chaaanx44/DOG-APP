// Search.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Search = ({ breeds, navigation }) => {
  const [query, setQuery] = useState('');
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a breed..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <FlatList
        data={filteredBreeds}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo)}>
            <Text style={styles.result}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  result: { fontSize: 18, paddingVertical: 10 },
});

export default Search;
