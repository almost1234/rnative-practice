import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Dimensions, Image, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const {height, width} = Dimensions.get("screen");

const Star = (amount) => {
    let array = []
    for(let i = 0; i < 5; i++){
        let newStar = <MaterialCommunityIcons key={i} name="star" size={24} color={i+ 1 <= amount? "yellow": "black"} />
        array.push(newStar);
    }
    return array;
}

const MapCard = () => {
    return (
        <View style={styles.card} >
            <View style={styles.topCard}>
                <Image style={styles.avatar} source={require("../assets/dairy.png")}/>
                <View style={styles.information}>
                    <Text style={{fontSize: 30, fontWeight:"bold"}}> Name </Text>
                    <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
                        {Star(0)}
                    </View>
                </View>
            </View>
            <View style={[{height: 3, marginVertical: 5, backgroundColor:"#d9dbde", borderRadius:30}, styles.lightShadow]}/>
            <View style={styles.bottomCard}>
                <TouchableOpacity style={styles.button} onPress={() => console.log("asjhdg")}>
                    <MaterialCommunityIcons name="phone" size={24} color="black" />
                    <Text>Call</Text>
                </TouchableOpacity>
                <View style={[{height: "90%", width:5 , backgroundColor:"#d9dbde", borderRadius:30}]}/>
                <TouchableOpacity style={styles.button}>
                <View style={{width:"100%", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
                        <MaterialCommunityIcons name="android-messages" size={24} color="black" />
                        <Text>Message</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        position:"absolute",
        height: height/4,
        width : width * 0.9,
        backgroundColor:"white",
        alignSelf:"center",
        bottom:20,
        borderRadius: 20,
        padding: 10
    },
    topCard:{
        height: "70%",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding: 10
    },
    bottomCard:{
        height: "25%",
        width:"100%",
        flexDirection:"row"
    },
    avatar:{
        height: 100,
        width: 100,
        borderRadius: 50
    },
    information:{
        height: "100%",
        width: "60%",
        justifyContent:"space-around",
        alignItems:"flex-start",
        marginVertical: 40
    },
    button:{
        height:"100%",
        width:"47%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    lightShadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});

export default MapCard
