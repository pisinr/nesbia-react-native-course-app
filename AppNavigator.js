import { createStackNavigator, createAppContainer } from 'react-navigation';

import MasterPage from './MasterPage'
import DetailPage from './DetailPage'

const AppNavigator = createStackNavigator({
  Master: MasterPage,
  Detail: DetailPage,
}, {
    initialRouteName: "Master"
});

export default createAppContainer(AppNavigator);