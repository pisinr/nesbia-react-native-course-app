import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View,
  Image, ScrollView, FlatList,
  Button,
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp () {
    console.log('up')
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDown () {
    console.log('down')
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{this.state.count.toString()}</Text>
        <Button onPress={this.handleUp} color='green' title="เพิ่ม" />
        <Button onPress={this.handleDown} color='red' title="ลด" />
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
