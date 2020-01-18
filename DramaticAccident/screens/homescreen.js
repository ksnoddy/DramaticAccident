import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, } from 'react-native-paper';

class homescreen extends React.Component {  
    render() {
        return (
            <View>
                <Appbar.Header style={{backgroundColor:'#964B00'}}>
                    <Appbar.Content titleStyle={{textAlign: 'center', fontWeight: 'bold'}} title="Find Bathroom"/>
                </Appbar.Header>
                <View>
                    <View>
                        <Text style={{lineHeight: 400, textAlign: 'center', fontSize: 30, fontWeight: 'bold',}}>MAP</Text>
                    </View>
                </View>
            </View>
        );
    }
        
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80
  },

});

export default homescreen;
