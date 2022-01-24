import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Components/Home';
import Dash from '../Components/Dash';


const screens = {
  Home: {
    screen: Home,
    navigationOptions : {
      headerShown: false
  }
  },
  Dash: {
    screen: Dash,
    navigationOptions : {
      headerShown: false
  }
  },
};


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);