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
      firstname: '',
      lastname: '',
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleFirstNameChange (text) {
    this.setState({
      firstname: text
    })
  }

  handleLastNameChange (text) {
    this.setState({
      lastname: text
    })
  }

  render() {
    const nameLength = this.state.firstname.length + this.state.lastname.length;

    return (
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.textinput}
          onChangeText={this.handleFirstNameChange}
          value={this.state.firstname} />
        <TextInput style={styles.textinput}
          onChangeText={this.handleLastNameChange}
          value={this.state.lastname} />
        <Text style={styles.title}>คุณชื่อ: {this.state.firstname} {this.state.lastname}</Text>
        <Text style={styles.title}>ยาวทั้งหมด: {nameLength} ตัวอักษร</Text>
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
