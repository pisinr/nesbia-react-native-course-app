import React from 'react';
import {
  View, Text,
  Button,
} from 'react-native';

export default class MasterPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>MasterPage</Text>
        <Button
          title="John"
        />
        <Button
          title="Jane"
        />
        <Button
          title="Joe"
        />
      </View>
    );
  }
}