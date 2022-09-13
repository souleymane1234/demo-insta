import React, { useState, useEffect, useContext } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Dimensions, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//custm import context
import { AppContext } from '../../context/AppContext';

const Home = ({route, navigation}) => {
  const {data} = useContext(AppContext)
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState([]);

    useEffect(() => {
      console.log("----------okkkkk----", data)
    }, [])
    
    console.log('la data est maintenat', data.following_count)

    return (
            <View style={styles.container}>
        <View style={{backgroundColor: '#76BAFF', borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
            <View style={styles.header}>
                <StatusBar animated={true} backgroundColor="#76BAFF" />
                <View style={styles.headerLogo}>
                    <Text style={styles.logo}>INSTA</Text>
                    <Text style={styles.logo}>PROJECT</Text>
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
                <Text style={styles.categoryText}>Welcome {data.full_name} </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>account_type</Text>
                        <Icon
                        style={{ justifyContent: "center"}}
                        name="cards-heart"
                        size={25}
                        color="red"
                        pack="material"
                    />
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.account_type} </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>country_code</Text>
                        <Icon
                        style={{ justifyContent: "center"}}
                        name="cards-heart"
                        size={25}
                        color="red"
                        pack="material"
                    />
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.country_code} </Text>
                    </View>
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