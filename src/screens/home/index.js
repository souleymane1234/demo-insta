import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

const API_URL = Platform.OS === 'ios' ? 'https://insta-log.herokuapp.com/api/login' : 'https://insta-log.herokuapp.com/api/login';

const Home = ({route}) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const {data} = route.params

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };
    console.debug(data)

    const onSubmitHandler = () => {
      var myHeaders = new Headers();
      myHeaders.append("Cache-Control", "no-cache");
      myHeaders.append("Accept", "*/*");
      myHeaders.append("Accept-Encoding", "gzip, deflate");
      myHeaders.append("Connection", "keep-alive");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "name": name,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://appforlogin.herokuapp.com/api/login", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
    };

    // const getMessage = () => {
    //     const status = isError ? `Error: ` : `Success: `;
    //     return status + message;
    // }

    return (
        <ImageBackground source={require('../../assests/img.jpg')} style={styles.image}>
            <View style={styles.card}>
                <Text style={styles.heading}>welcome to you</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },  
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '30%',
        color: 'black',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },  
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 16, 
        minHeight: 40,
    },
    button: {
        width: '80%',
        backgroundColor: 'black',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
});

export default Home;