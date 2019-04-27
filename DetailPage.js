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
        />
        <Button
          title="Jane"
        />
        <Button
          title="Joe"
        />
        <Button
          title="Back"
          color="red"
        />
      </View>
    );
  }
}