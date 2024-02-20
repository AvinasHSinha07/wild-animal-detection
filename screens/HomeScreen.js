
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const HomeScreen = ({ navigation }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   const requestPermission = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       console.error('Permission to access media library denied');
//     }
//   };

//   const handleDetectAnimal = () => {
//     navigation.navigate('ImageDetail', { selectedImage });
//     console.log('pressed');
//   };

//   const handleImagePicker = async () => {
//     console.log('image');
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: false,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setSelectedImage(result.assets[0].uri);
//       console.log(result.assets[0].uri)
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Animal Detection App</Text>

//       {selectedImage && <Image source={{ uri: selectedImage }} style={styles.imagePreview} />}
//       <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
//         <Text style={styles.buttonText}>Select Image</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.detectButton}
//         onPress={handleDetectAnimal}
//         // disabled={!selectedImage}
      
//       >
//         <Text style={styles.buttonText}>Detect Animal</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1D2B53',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//     color: '#FAEF5D',
//   },
//   imagePreview: {
//     width: 250,
//     height: 250,
//     borderRadius: 4,
//     marginBottom: 16,
//   },
//   detectButton: {
//     backgroundColor: '#33CC66',
//     padding: 16,
//     borderRadius: 8,
//     width: '80%',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   imagePickerButton: {
//     backgroundColor: '#007BFF',
//     padding: 16,
//     borderRadius: 8,
//     width: '80%',
//     alignItems: 'center',
//     marginBottom: 16,
//     marginTop: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default HomeScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth } from '../firebaseConfig'; 

const HomeScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access media library denied');
    }
  };

  const handleDetectAnimal = () => {
    navigation.navigate('ImageDetail', { selectedImage });
    console.log('pressed');
  };

  const handleImagePicker = async () => {
    console.log('image');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result.assets[0].uri)
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log('User signed out successfully');
      // Navigate to your login screen or any other screen you desire
      navigation.navigate('Login');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animal Detection App</Text>

      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.imagePreview} />}
      <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.detectButton}
        onPress={handleDetectAnimal}
      >
        <Text style={styles.buttonText}>Detect Animal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D2B53',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#FAEF5D',
  },
  imagePreview: {
    width: 250,
    height: 250,
    borderRadius: 4,
    marginBottom: 16,
  },
  detectButton: {
    backgroundColor: '#33CC66',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 12,
  },
  imagePickerButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
