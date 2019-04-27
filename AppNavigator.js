import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomePage from './HomePage'
import FeedPage from './FeedPage'
import SettingPage from './SettingPage'

const AppNavigator = createBottomTabNavigator({
  Home: HomePage,
  Feed: FeedPage,
  Setting: SettingPage,
}, {
    initialRouteName: "Home"
});

export default createAppContainer(AppNavigator);