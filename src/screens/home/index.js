import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Dimensions, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = ({route}) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState([]);


    const onSubmitHandler = () => {
        var myHeaders = new Headers();
        myHeaders.append("Cache-Control", "no-cache");
        myHeaders.append("Accept", "*/*");
        myHeaders.append("Accept-Encoding", "gzip, deflate");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://instaprojectapp.herokuapp.com/api/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    };
      useEffect(() => {
        onSubmitHandler();
    }, [onSubmitHandler]);
    console.log('la data est maintenat', isLogin)

    return (
            <View style={styles.container}>
        <View style={{backgroundColor: '#76BAFF', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
            <View style={styles.header}>
                <StatusBar animated={true} backgroundColor="#76BAFF" />
                <View style={styles.headerLogo}>
                    <Text style={styles.logo}>BOCOUM</Text>
                    <Text style={styles.logo}>SERVICES</Text>
                </View>
                <View style={{ justifyContent: "center", flexDirection: "row" }}>
                    <TouchableOpacity underlayColor="transparent">
                    <Icon
                        style={{ justifyContent: "center", top: 10 }}
                        name="account-circle"
                        size={45}
                        color="#000"
                        pack="material"
                    />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView>
            <View style={styles.categoryHeaderView}>
                <Text style={styles.categoryText}>Categories</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>following_count</Text>
                        <Text>hello</Text>
                    </View>
                    <View>
                        <Text> {isLogin.following_count} </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>

                </TouchableOpacity>
            </View>
        </ScrollView>

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    width: windowWidth,
    height: windowHeight,
  },
  statusBarColor: {
    backgroundColor: "#fff"
  },
    header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
    headerLogo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  logo: {
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 20
  },
  categoryHeaderView:{
    margin: 10
  },
  categoryText: {
    fontSize: 20, 
    fontWeight: 'bold'
  },
  card: {
    width: '42%', 
    height: 120, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    elevation: 4
  }
});

export default Home;