import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import MapView, { Marker } from "react-native-maps";

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* YouTube Video Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Watch Our Video</Text>
          <View style={styles.YTcontainer}>
            <WebView
              style={styles.video}
              javaScriptEnabled={true}
              source={{
                uri:
                  "https://www.youtube.com/embed/K6cGZgEch-4?si=60kY6UzHtAoeGp_y",
              }}
            />
          </View>
        </View>

        {/* Map Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Explore Our Location</Text>
          <View style={styles.mapViewContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 22.4716,
                longitude: 91.7877,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0921,
              }}
            >
              <Marker
                coordinate={{ latitude: 22.4716, longitude: 91.7877 }}
                title="Animal Detection"
                description="Nothing"
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  YTcontainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  video: {
    height: 250,
    width: "100%",
  },
  mapViewContainer: {
    backgroundColor: "#FFF",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  map: {
    height: 300,
    width: "100%",
    borderRadius: 10,
  },
});

export default LocationScreen;
