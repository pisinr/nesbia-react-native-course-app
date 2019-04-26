import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View,
  Image, ScrollView, FlatList,
  Button,
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>0</Text>
        <Button color='green' title="เพิ่ม" />
        <Button color='red' title="ลด" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3a3',
    padding: 5,
    margin: 20,
    alignSelf: 'center',
  },
});
