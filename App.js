import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
