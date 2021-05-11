import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import data from '../data/data';

const PriceBar = (data) => {
    return (
        <TouchableOpacity style={{width:"100%", height: 100, backgroundColor: "grey"}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", }}>
          <View style={{flexDirection:"row", width:"45%", alignItems:"center"}}>
            <Image source={require("../assets/dairy.png")} style={{height: 100, width: "40%"}}></Image>
            <View style={{margin:10}} >
              <Text style={{fontSize: 25, fontWeight: "600"}}>{data.item.label}</Text>
              <Text style={{fontSize: 12, color:"black"}}>{data.item.amount}</Text>
              <Text style={{fontSize: 12, color:"black"}}></Text>
            </View>
          </View>
          <Text style={{fontSize: 30, fontWeight: "600", alignSelf:"center", marginRight: 10}}>{data.item.amount}</Text>
        </View>
      </TouchableOpacity>
    )
}

export default PriceBar
