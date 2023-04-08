import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, } from 'react-native';
import styles from './sos.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import MainLayout from '../../components/MainLayout';
import ProductCard from '../../components/Products/Product';
import Loading from '../../components/Loading/loading';




const SosScreen = ({ navigation }) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://m104e.wiremockapi.cloud/v1/colorlights", {
        headers: { 'JsonStub-User-Key': 'f5e0861a-b53d-4b80-9c28-2233780c3d5d' }
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }


  /*   const handleProduct = item => {
  
      navigation.navigate('DetailPage', { item })
  
  }
   */

  const renderProduct = ({ item }) =>


    (<ProductCard product={item} onSelect={() => handleProduct(item)} />)






  return (

    <View style={styles.container}>
      <View>
        <MainLayout header="Colorlights"/>


      </View>



      <FlatList
        style={styles.header}
        data={data}
        renderItem={renderProduct}
        /* ItemSeparatorComponent={speratorProduct}*/
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
      />

    </View>

  )
}

export default SosScreen