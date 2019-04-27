import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View,
  Image, ScrollView, FlatList,
  Button, TextInput,
  Picker
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: 'THB'
    }
  }

  render() {
    const renderRow = (rowData) => {
      const item = rowData.item;
      return (
        <View>
          <Text>{item.key}:</Text>
          <Text>{item.value}</Text>
        </View>
      )
    }

    const data = [
      {key: 'USD', value: 1},
      {key: 'THB', value: 30},
    ]

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>เงิน: </Text>
          <TextInput style={styles.textinput}
            value={'1'} />
        </View>
        <Picker style={{backgroundColor: 'red'}}
          selectedValue={this.state.currency}>
          <Picker.Item label="THB" value="THB" />
          <Picker.Item label="JPY" value="JPY" />
          <Picker.Item label="USD" value="USD" />
        </Picker>
        <Button title="คำนวณ"/>
        <FlatList data={data}
          renderItem={renderRow}
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },

  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3a3',
    padding: 3,
    marginRight: 10,
  },

  textinput: {
    flex: 1,
    backgroundColor: 'yellow',
    fontSize: 28,
    padding: 3,
    margin: 6,
  },

  row: {
    flexDirection: 'row',
    padding: 3,
  }
});
