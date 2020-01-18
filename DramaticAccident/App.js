import React from 'react';
import { StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import launchscreen from './screens/launchscreen';
import homescreen from './screens/homescreen';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

//Main Flow
const AppNavigator = createSwitchNavigator(
  {
    Launch:launchscreen,
    Homescreen:homescreen,
  },
  {
    initialRouteName: 'Launch',
  }
)

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80
  },

});
