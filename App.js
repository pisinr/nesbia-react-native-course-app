import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View,
  Image, ScrollView,
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.expandedText}>1</Text>
          <Text style={styles.expandedText}>2</Text>
          <Text style={styles.expandedText}>3</Text>
        </View>
        <ScrollView style={styles.main}>
          <Image style={styles.image} source={profileImage} />
          <Image style={styles.image} source={profileImage} />
          <Image style={styles.image} source={profileImage} />
          <Image style={styles.image} source={profileImage} />
          <Image style={styles.image} source={profileImage} />
          <Image style={styles.image} source={profileImage} />
        </ScrollView>
        <View style={styles.bottombar}>
          <Text style={styles.text}>I am bottom text</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },

  topbar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#fff'
  },
  expandedText: {
    flex: 1,
  },

  main: {
    flex: 1,
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
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

  bottombar: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#fff'
  },

});
