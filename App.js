import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View,
  Image, ScrollView, FlatList,
  Button, TextInput, WebView,
} from 'react-native';

import profileImage from './assets/profile.png';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      gourl: '',
    }

    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleGo = this.handleGo.bind(this);
  }

  handleURLChange (text) {
    this.setState({
      url: text
    })
  }

  handleGo () {
    this.setState({
      gourl: this.state.url
    })
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          style={styles.textinput}
          onChangeText={this.handleURLChange}
          value={this.state.firstname} />
        <Button onPress={this.handleGo}
          title='ไป' />
        <WebView source={{ uri: this.state.gourl }} style={styles.webview} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },

  webview: {
    flex: 1,
  },

  textinput: {
    backgroundColor: 'yellow',
    fontSize: 28,
    padding: 3,
    margin: 6,
  }
});
