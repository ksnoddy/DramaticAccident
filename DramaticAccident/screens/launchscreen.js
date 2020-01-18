import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, } from 'react-native-paper';

class launchscreen extends React.Component {  
    render() {
        return (
            <View>
                <Appbar.Header style={{backgroundColor:'#964B00'}}>
                    <Appbar.Content titleStyle={{textAlign: 'center', fontWeight: 'bold'}} title="I Need to Go Now"/>
                </Appbar.Header>
                <View>
                    <View>
                        <Text style={{lineHeight: 400, textAlign: 'center', fontSize: 30, fontWeight: 'bold',}}>Welcome to TITLE!</Text>
                    </View>
                    <View style = {styles.container}>
                        <Button mode = "contained" style={{backgroundColor:'#964B00'}} onPress={() => this.props.navigation.navigate('Homescreen')}>
                            I NEED TO GO NOW!
                        </Button>   
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

export default launchscreen;
