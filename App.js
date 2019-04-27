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
      amount: '0',
      currency: 'THB',
      data: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleSubmit() {
    const currency = this.state.currency;
    fetch('https://api.exchangeratesapi.io/latest?base=' + currency)
      .then((response) => { return response.json() })
      .then((json) => {
        let rates = json.rates;
        let data = [];
        for(let key in rates) {
          data.push({
            key: key,
            value: rates[key]
          })
        }
        this.setState({
          data: data
        })
      })
  }

  handleAmountChange(text) {
    this.setState({
      amount: text
    })
  }

  handleCurrencyChange(value) {
    this.setState({
      currency: value
    })
  }


  render() {
    let amountFloat = parseFloat(this.state.amount)


    const renderRow = (rowData) => {
      const item = rowData.item;
      return (
        <View style={styles.row}>
          <Text style={{flex: 1}}>{item.key}:</Text>
          <Text style={{flex: 1}}>{item.value}</Text>
          <Text style={{flex: 1, textAlign: 'right'}}>{parseFloat(item.value) * amountFloat}</Text>
        </View>
      )
    }

    const data = this.state.data;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>เงิน: </Text>
          <TextInput
            onChangeText={this.handleAmountChange}
            style={styles.textinput}
            value={this.state.amount} />
        </View>
        <Picker
          onValueChange={this.handleCurrencyChange}
          style={{backgroundColor: 'red'}}
          selectedValue={this.state.currency}>
          <Picker.Item label="THB" value="THB" />
          <Picker.Item label="JPY" value="JPY" />
          <Picker.Item label="USD" value="USD" />
        </Picker>
        <Button onPress={this.handleSubmit}
          title="คำนวณ"/>
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
