import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  TextInput,
  Modal,
  Animated,
  ImageBackground,
} from 'react-native';

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState([
    {
      id: '1',
      title: 'Doberman Pinscher',
      description: 'Known for loyalty and intelligence, often used in police work.',
      image: require('../../assets/images/doberman.jpg'),
      category: 'Working Dogs',
    },
    {
      id: '2',
      title: 'Dogue De Bordeaux',
      description: 'A large, muscular French mastiff with a calm and devoted temperament.',
      image: require('../../assets/images/dogue_de_bordeaux.jpg'),
      category: 'Guard Dogs',
    },
    {
      id: '3',
      title: 'German Pinscher',
      description: 'Medium-sized working dog, known for its alertness and intelligence.',
      image: require('../../assets/images/german.jpg'),
      category: 'Working Dogs',
    },
    {
      id: '4',
      title: 'Pyrenees',
      description: 'Breed of livestock guardian dog from France, known for its deter sheep-stealing wolves and other predators on snowy mountaintops.',
      image: require('../../assets/images/pyrenees.jpg'),
      category: 'Working Dogs',
    },
  ]);

  const [filteredBookmarks, setFilteredBookmarks] = useState(bookmarks);
  const [searchText, setSearchText] = useState('');
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [animationValue] = useState(new Animated.Value(0));

  // Function to handle removing a bookmark
  const removeBookmark = (id) => {
    Alert.alert('Remove Bookmark', 'Are you sure you want to remove this bookmark?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: () => {
          const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
          setBookmarks(updatedBookmarks);
          setFilteredBookmarks(updatedBookmarks);
        },
      },
    ]);
  };

  // Function to handle search filtering
  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filteredData = bookmarks.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.category.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBookmarks(filteredData);
    } else {
      setFilteredBookmarks(bookmarks);
    }
  };

  // Animation for removing bookmarks
  const triggerAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  // Render the detailed view in modal
  const renderModalContent = () => {
    if (!selectedBookmark) return null;
    return (
      <View style={styles.modalContent}>
        <Image source={selectedBookmark.image} style={styles.modalImage} />
        <Text style={styles.modalTitle}>{selectedBookmark.title}</Text>
        <Text style={styles.modalCategory}>{selectedBookmark.category}</Text>
        <Text style={styles.modalDescription}>{selectedBookmark.description}</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Render a single bookmarked item
  const renderBookmark = ({ item }) => (
    <Animated.View
      style={[
        styles.bookmarkItem,
        {
          opacity: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          setSelectedBookmark(item);
          setModalVisible(true);
        }}
      >
        <Image source={item.image} style={styles.bookmarkImage} />
        <View style={styles.bookmarkInfo}>
          <Text style={styles.bookmarkTitle}>{item.title}</Text>
          <Text style={styles.bookmarkDescription}>{item.description}</Text>
          <Text style={styles.bookmarkCategory}>{item.category}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => {
              removeBookmark(item.id);
              triggerAnimation();
            }}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/wallpaper.jpg')} // Path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Bookmarks</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search bookmarks..."
          value={searchText}
          onChangeText={handleSearch}
        />

        {filteredBookmarks.length > 0 ? (
          <FlatList
            data={filteredBookmarks}
            keyExtractor={(item) => item.id}
            renderItem={renderBookmark}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noBookmarksText}>No bookmarks found.</Text>
        )}

        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>{renderModalContent()}</View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centers vertically
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Slightly transparent to show background
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
  },
  listContent: {
    paddingBottom: 20,
    width: '100%',
  },
  bookmarkItem: {
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
  bookmarkImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  bookmarkInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bookmarkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bookmarkDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  bookmarkCategory: {
    fontSize: 12,
    color: '#00796b',
  },
  removeButton: {
    backgroundColor: '#ff6961',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  noBookmarksText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalCategory: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#ff6961',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BookmarkPage;
