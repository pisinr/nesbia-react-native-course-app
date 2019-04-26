import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View,
  Image, ScrollView, FlatList,
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  render() {
    const renderRow = (rowData)=>{
      const item = rowData.item;
      return (
        <View style={styles.row}>
          <Text style={styles.rowText}>{item.name}</Text>
        </View>
      )
    };

    const students = [
      {key: '1', name: 'student 1'},
      {key: '2', name: 'student 2'},
      {key: '3', name: 'student 3'},
      {key: '4', name: 'student 4'},
      {key: '5', name: 'student 5'},
      {key: '6', name: 'student 6'},
      {key: '7', name: 'student 7'},
      {key: '8', name: 'student 8'},
      {key: '9', name: 'student 9'},
      {key: '10', name: 'student 10'},
      {key: '11', name: 'student 11'},
      {key: '12', name: 'student 12'},
      {key: '13', name: 'student 13'},
      {key: '14', name: 'student 14'},
      {key: '15', name: 'student 15'},
    ]

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.expandedText}>1</Text>
          <Text style={styles.expandedText}>2</Text>
          <Text style={styles.expandedText}>3</Text>
        </View>
        <ScrollView style={styles.main}>
          <FlatList data={students} renderItem={renderRow} />
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

  row: {
    padding: 5,
  },
  rowText: {
    fontWeight: 'bold',
    fontSize: 48,
  }
});
