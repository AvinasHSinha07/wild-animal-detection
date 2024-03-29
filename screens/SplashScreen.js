import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/wepik-gradient-cat-specialists-veterinary-clinic-logo-20240124064925YAoT.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2B53",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
