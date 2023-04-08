import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import style from './producs.style'
import { Ionicons } from '@expo/vector-icons';
const ProductCard = ({ product, onSelect }) => {


    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={style.card}>
                <View style={style.imageContainer}>

                    <Image style={style.image}
                        source={{ uri: product.iconUrl }}
                           //  resizeMode="cover"
                 resizeMode="contain"
                    />

                </View>
                <View style={style.descriptionConatiner}>
                   
                    <Text style={style.name}>{product.name}</Text>
                    <View style={style.description}>
                        <Text style={style.ratingValue}> {product.ratingValue} <Ionicons name="star" size={13} color={"black"}/>   </Text>
                        <Text style={style.ratingCount}> {product.ratingCount} <Ionicons name="arrow-down-outline" size={15} color={"black"}/></Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )





}

export default ProductCard