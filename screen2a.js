import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function Screen2a() {
  var [username, setUsername] = useState('');
  var [password, setPassword] = useState('');
  var arr = [{username: 'admin', password: 'admin'}, {username: 'user', password: 'user'}, {username: 'test', password: 'test'  }];
  // onpress login button log username and password
  function checkLogin() {
    var found = false;
    for (var i = 0; i < arr.length; i++) {
      if (username == arr[i].username && password == arr[i].password) {
        found = true;
        break;
      }
    }
    if (found == true) {
      console.log('Login Success');
    } else {
      console.log('Login Fail');
    }
  }
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontWeight: 'bold', fontSize: '40px', textAlign: 'center' }}> LOGIN </Text>

            </View>
            <View style={styles.middle}>
                <View>
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder='Name'
                        textContentType='username'
                        inputMode='text'
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        inputMode='text'
                        onChangeText={(text) => setPassword(text)}
                    />
                   
                </View>

            </View>
            <View style={styles.middle1}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}
                      // onpress login button log username and password
                      onPress={checkLogin}
                    >LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(190deg, #FBCB10, #BF9A40)',
        width: '100%',
    },
    top: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middle: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    middle1: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottom: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: '320px',
        height: '50px',
        border: '1px solid #000000',
        padding: '5px',
        backgroundColor: '#000000',
        borderRadius: '5px',

    },
    textButton: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '30px',
        color: '#ffffff',
    },
    textInput: {
        height: 45,
        width: 320,
        margin: 1,
        border: '1px solid #ffffff',
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        paddingLeft: '50px',
    },
    iconEmail: {
        border: '3px solid #524f4e',
        margin: 12,
        height: 40,
        backgroundColor: '#C4C4C4'
    },
    buttonLink: {
        border: '1px solid #000000',
        width: 100
    }

})