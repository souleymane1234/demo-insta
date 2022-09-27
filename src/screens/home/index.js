import React, { useState, useEffect, useContext } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Dimensions, ScrollView , Image} from 'react-native';
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
                    <Text style={styles.logo}>{data.username}</Text>
                </View>
                <View style={{ justifyContent: "center", flexDirection: "row" }}>
                    <TouchableOpacity underlayColor="transparent">
                                  <Image
                          style={{ width: 100, height: 100, borderRadius: 30 }}
                          source={{
                            uri: data.profile_pic_url,
                          }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView>
            <View style={styles.categoryHeaderView}>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize'}}>account type</Text>
                        <View style={styles.viewIconRed}>
                          <Icon
                            style={{ alignSelf: "center"}}
                            name="account"
                            size={25}
                            color="red"
                            pack="material"
                          />
                        </View>
   
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.account_type} </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize'}}>username</Text>
                        <View style={styles.viewIconRed}>
                             <Icon
                            style={{ alignSelf: 'center'}}
                            name="account-check"
                            size={25}
                            color="red"
                            pack="material"
                        />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.username} </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', textTransform: 'capitalize'}}>following</Text>
                        <View style={styles.viewIconRed}>
                          <Icon
                            style={{ alignSelf: "center"}}
                            name="account-group"
                            size={25}
                            color="red"
                            pack="material"
                          />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.following_count} </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', textTransform: 'capitalize'}}>total clips count</Text>
                        <View style={styles.viewIconBlue}>
                          <Icon
                          style={{ alignSelf: "center"}}
                          name="clipboard-text-play"
                          size={25}
                          color="#76BAFF"
                          pack="material"
                          />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.total_clips_count} </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', textTransform: 'capitalize'}}>follower</Text>
                        <View style={styles.viewIconBlue}>
                          <Icon
                          style={{ alignSelf: "center"}}
                          name="account-circle-outline"
                          size={25}
                          color="#76BAFF"
                          pack="material"
                          />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.follower_count} </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom:20}}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', textTransform: 'capitalize'}}>total igtv videos</Text>
                        <View style={styles.viewIconBlue}>
                          <Icon
                          style={{ alignSelf: "center"}}
                          name="video-outline"
                          size={25}
                          color="#76BAFF"
                          pack="material"
                          />
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {data.total_igtv_videos} </Text>
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
  },
  viewIconRed: {
    backgroundColor: '#ffcaca',
    width: 35, 
    height: 35, 
    justifyContent: "center",
    borderRadius: 10
  },
    viewIconBlue: {
    backgroundColor: '#bedbfa',
    width: 35, 
    height: 35, 
    justifyContent: "center",
    borderRadius: 10
  }
});

export default Home;