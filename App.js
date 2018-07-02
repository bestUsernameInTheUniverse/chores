import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import { StyleSheet, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // button: {
  //   backgroundColor: '#006699',
  //   borderRadius: 30
  // },

  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'space-evenly',
  //   backgroundColor: '#ff794d',
  //   alignItems: 'center',
  // },
});

export default App;