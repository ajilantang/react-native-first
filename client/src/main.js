import React,  {Component } from 'react';
import {
  Text,
  AppRegistry,
  Image,
  View
} from 'react-native';
import axois  from 'axios';
import styles from './style';
import profile from './profile';



class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profile}
          source={require('../img/ajirokok.jpg')}
        />
        <Text style={styles.batch}>
          {profile.batch}
        </Text>
        <Text>
          Mongol
        </Text>
        <Text style={styles.name}>
          {profile.name}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent(
  'DisplayAnImageWithStyle',
  () => DisplayAnImageWithStyle
);



export default App;
