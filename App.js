import React from 'react';
import {
  SafeAreaView,
  StyleSheet, View,
  Image, ScrollView, FlatList,
  Picker,
} from 'react-native';

import {
  Text, Button, Input,
  Card, Rating, Avatar, CheckBox,
  ListItem,
} from 'react-native-elements'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card>
            <Text h1>Header 1</Text>
            <Text h2>Header 2</Text>
            <Text h3>Header 3</Text>
          </Card>
          <Card>
            <Input placeholder="ชื่อ" />
            <Input placeholder="นามสกุล" />
          </Card>
          <Card>
            <Button title="คำนวณ"/>
          </Card>
          <Card>
            <Rating />
          </Card>
          <Card>
            <CheckBox title="ยอมรับข้อตกลง" checked />
          </Card>
          <Card>
            <ListItem bottomDivider
              title="รายการ 1"  subtitle="รายละเอียด 1"
              />
            <ListItem bottomDivider
              title="รายการ 2"  subtitle="รายละเอียด 2"
              checkBox={{checked: true}}
              />
            <ListItem bottomDivider
              title="รายการ 3"  subtitle="รายละเอียด 3"
              switch={{}}
              />
            <ListItem bottomDivider
              title="รายการ 4"  subtitle="รายละเอียด 4"
              chevron
              />
            <ListItem bottomDivider
              title="รายการ 5"  subtitle="รายละเอียด 5"
              badge={{status: 'success', value: '5'}}
              />
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
