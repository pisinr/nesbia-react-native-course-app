import React from 'react';
import {
  View, Text, Button
} from 'react-native';

export default class DetailPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DetailPage for {this.props.navigation.getParam('name', '')}</Text>
        <Button
          title="John"
          onPress={() => this.props.navigation.push('Detail', {
            name: 'John'
          })}
        />
        <Button
          title="Jane"
          onPress={() => this.props.navigation.push('Detail', {
            name: "Jane"
          })}
        />
        <Button
          title="Joe"
          onPress={() => this.props.navigation.push('Detail', {
            name: 'Joe'
          })}
        />
        <Button
          title="Back"
          color="red"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}