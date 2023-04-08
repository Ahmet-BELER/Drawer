import React from 'react'
import { View, Text, SafeAreaView, FlatList, ActivityIndicator,TouchableWithoutFeedback } from 'react-native';
import styles from "./home.style"
import { StatusBar ,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {useDrawer} from '@react-navigation/drawer'
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainLayout from "../../components/MainLayout"



/* import * as Application from 'expo-application';


const apps = await Application.getInstalledApplicationsAsync();
console.log(apps);
 */










const Home = () => {

/*     const nav = useNavigation() ;
    const menu = () => {
        nav.openDrawer()
    }
 */

    return (
   
    <View style={styles.container}>
   
    <MainLayout header="Home"/>

{/*       <TouchableWithoutFeedback onPress={menu} style={styles.ımage}>
      <Image
      source={require('../../assets/menu.avif')}
      style={styles.ımage}
      onPress={() =>nav.openDrawer()}
    />
    </TouchableWithoutFeedback> */}
 

{/*     <Icon name="list" size={30} color="black"  onPress={() =>nav.openDrawer()}  style={styles.ıcon}/> */}

     </View>


    ) 



}


export default Home