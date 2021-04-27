import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const LineHeader = ({ text, size, lineWidth, lineColor}) => {
    return (
        <View style={styles.area}>
            <Text style={{fontSize: size, margin: 10}}>{text}</Text>
            <View style={[styles.line, {width : lineWidth, backgroundColor : lineColor}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    area:{
      flexDirection: "row",
      width : "100%",
      height : 50,
      justifyContent: "space-between",
      alignItems : "center",
      padding: 10,
      borderWidth: 0
    },
    line: {
      width : "70%",
      height : 10,
      borderRadius: 40,
      backgroundColor: "red",
    },
  
  });

export default LineHeader
