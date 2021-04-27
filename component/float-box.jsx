import React from 'react';
import { ImageBackground, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import "../"

const FloatBox = ({height, width, color, topContent, bottomContent, opacity, onClick}) => {
    return (
    <TouchableOpacity style={{padding:10}} onPress={onClick} >
        <ImageBackground source={require("../assets/apple.jpg")} style={[styles.outerbox, {height: height, width: width, backgroundColor: color}]} imageStyle={{ borderRadius: 40, opacity: opacity}}>
        <View style={styles.contentBox}>
          <View style={{
              alignSelf: "flex-start"
            }}>
            {topContent}
          </View>
          <View style={{
              alignSelf: "flex-end"
            }}>
              {bottomContent}
        </View>
    </View>
        </ImageBackground>
        <View style={[styles.innerbox, {height: height, width: width}]}>
        </View>
  </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    outerbox: {
      zIndex: 1,
      borderRadius: 40,
      alignItems:"center",
      justifyContent: "center"
    },
    innerbox: {
      position: "absolute",
      top: 20,
      borderRadius: 40,
      backgroundColor: "rgba(130,130,130, 0.7)"
    },
    contentBox:{
      padding : 15,
      flex: 1,
      width:"100%",
      justifyContent:"space-between"
    }
  });
export default FloatBox
