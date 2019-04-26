import React from 'react';
import {
  StyleSheet, Text, View,
  Image
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Image style={styles.image} source={profileImage} />
        <Text style={styles.text}>Icon from FreePik!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    backgroundColor: '#eee',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#666',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3a3',
    padding: 5,
  },
  text: {
    color: '#3a3',
  },
});
