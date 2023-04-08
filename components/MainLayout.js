import React from 'react';
import { TouchableOpacity,View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from "./MainLayout.style"
const MainLayout = (props) => {
  const navigation = useNavigation();

  return (


    <View style={styles.HeadBar}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={50} color={"black"} style={{ marginTop: 20, marginLeft: 10 }} />
      </TouchableOpacity>
      <View style={styles.pageHeader}>
        <Text style={styles.text}> {props.header}</Text>
      </View>
    </View>

  );
};

export default MainLayout;
