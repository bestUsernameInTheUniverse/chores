import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View ,
  Alert, 
  Image
} from 'react-native';
import {
  Button
} from 'react-native-elements';

class PreRegistration2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require("../../assets/choresWhiteLogo.png")} 
          style={{width: 165, height: 250}}
          containerStyle={{flex: 6}}
        />

        <Button
          title='CREATE NEW FAMILY'
          onPress={() => { Alert.alert('You tapped the button!'); }}
          buttonStyle={styles.button}
          containerStyle={{flex: 1}}
        />

        <Button
          title='JOIN FAMILY'
          onPress={() => { Alert.alert('You tapped the button!'); }}
          buttonStyle={styles.button}
          containerStyle={{flex:1}}
        />

        <Text style={{color: 'white'}}>ALREADY HAVE AN ACCOUNT?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#006600',
//     borderRadius: 30
//   },

//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//     backgroundColor: '#ff794d',
//     alignItems: 'center',
//   },
});


export default PreRegistration2;