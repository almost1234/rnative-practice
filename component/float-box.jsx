import React from 'react';
import { ImageBackground, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
const FloatBox = ({height, width, color, topContent, bottomContent, opacity, onClick, image}) => {
    return (
    <TouchableOpacity style={{paddingVertical:10}} onPress={onClick} >
        <ImageBackground source={image} style={[styles.outerbox, {height: height, width: width, backgroundColor: color}]} imageStyle={{width:"100%", borderRadius: 40, opacity: 1}}>
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
      alignSelf:"center"
    },
    innerbox: {
      position: "absolute",
      top: 20,
      borderRadius: 40,
      backgroundColor: "rgba(130,130,130, 0.7)",
      alignSelf:"center"
    },
    contentBox:{
      padding : 15,
      flex: 1,
      width:"100%",
      justifyContent:"space-between"
    }
  });
export default FloatBox
