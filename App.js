import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View,
  Image, ScrollView, FlatList,
  Button, TextInput,
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.textinput}
          value={''} />
        <TextInput style={styles.textinput}
          value={''} />
        <Text style={styles.title}>คุณชื่อ:</Text>
        <Text style={styles.title}>ยาวทั้งหมด: 0 ตัวอักษร</Text>
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

  textinput: {
    backgroundColor: 'yellow',
    fontSize: 28,
    padding: 3,
    margin: 6,
  }
});
