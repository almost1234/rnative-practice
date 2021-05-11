import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Card = ({title, description, image, onClick}) => {
    return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode={"cover"}/>
      <View style={styles.topArea}>
        <Text style={{color:"white", fontSize: 25, fontWeight: "700"}}>{title}</Text>
      </View>
      <View style={styles.bottomArea}>
        <Text>{description}</Text>
        <TouchableHighlight style={styles.iconArea} onPress={onClick}>
        <MaterialCommunityIcons name="cart-arrow-down" size={24} color="black" />
      </TouchableHighlight>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: 200,
    paddingHorizontal: 10,
    marginTop: 20
  },
  image:{
    height: "75%",
    width: "100%",

  },
  iconArea:{
    height: 50,
    width: 50,
    borderRadius : 25,
    backgroundColor:"rgba(238,190,27,0.9)",
    top: -40,
    justifyContent:"center",
    alignItems:"center"

  },
  topArea:{
    flex: 1,
    position: "absolute",
    margin:10,
    marginLeft:15,
    backgroundColor: "rgba(130,130,130,0.9)",
    paddingHorizontal: 10,
    borderRadius: 30
  },
  bottomArea:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height:"25%",
    backgroundColor:"white",
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
export default Card
