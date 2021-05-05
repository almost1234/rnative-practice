import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux'
import * as cartActions from "../redux/reducers/cartReducer" 
const InnerPriceBar = ({onClick}) => {
    // const dispatch = useDispatch();
    return (
        <View style={{width:"100%", height: 100, backgroundColor: "grey", justifyContent:"flex-end", flexDirection:"row", alignItems:"center"}}>
        <TouchableOpacity style={styles.deleteBox} onPress={onClick}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    deleteBox: {
      marginRight: 10,
      backgroundColor:"red",
      height: "100%",
      width: "20%",
      alignItems:"center",
      justifyContent:"center"
    }
  });

export default InnerPriceBar
