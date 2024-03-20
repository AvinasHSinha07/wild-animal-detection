import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';

export default function Weather({ weatherData, fetchWeatherData }) {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const { weather, name, main: { temp, humidity, feels_like }, wind: { speed }, rain } = weatherData;
  const [{ main: weatherMain }] = weather;

  useEffect(() => {
    setBackgroundImage(getBackgroundImg(weatherMain));
  }, [weatherData]);

  function getBackgroundImg(weather) {
    if (weather === 'Snow') return snow;
    if (weather === 'Clear') return sunny;
    if (weather === 'Rain') return rainy;
    if (weather === 'Haze') return haze;
    return haze;
  }

  let textColor = backgroundImage !== sunny ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='darkgray' />
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImg}
        resizeMode='cover'
      >
        <SearchBar fetchWeatherData={fetchWeatherData} />

        <View style={styles.weatherInfoContainer}>
          <Text style={[styles.text, { color: textColor, fontWeight: 'bold', fontSize: 46 }]}>{name}</Text>
          <Text style={[styles.text, { color: textColor, fontWeight: 'bold' }]}>{weatherMain}</Text>
          <Text style={[styles.text, { color: textColor }]}>{temp} °C</Text>
          <Text style={[styles.text, { color: textColor }]}>Feels Like: {feels_like} °C</Text>
          {/* {rain && <Text style={[styles.text, { color: textColor }]}>Rain: {rain['1h']} mm</Text>} */}
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Text style={[styles.text, { fontSize: 22 }]}>Humidity</Text>
            <Text style={[styles.text, { fontSize: 22 }]}>{humidity} %</Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.text, { fontSize: 22 }]}>Wind Speed</Text>
            <Text style={[styles.text, { fontSize: 22 }]}>{speed} m/s</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF407D',
    color: 'white',
    alignItems: 'center',
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get('screen').width
  },
  weatherInfoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  extraInfo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  info: {
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
