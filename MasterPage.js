import React from 'react';
import {
  View, Text,
  Button,
} from 'react-native';

export default class MasterPage extends React.Component {
  static navigationOptions = {
    title: 'Master Page',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>MasterPage</Text>
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
      </View>
    );
  }
}