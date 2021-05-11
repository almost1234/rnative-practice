import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import FloatBox from '../component/float-box'
import LineHeader from '../component/line-header'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={{flexDirection:"row", margin: 10, justifyContent:"space-between"}}> 
            <MaterialCommunityIcons name="face-profile" size={24} color="black" />
            <MaterialCommunityIcons name="cart" size={24} color="black" />
          </View>
          <View style={styles.header}>
            <Text style={{fontSize: 50, fontWeight: "700"}}>Hello Linda,</Text>
            <Text style={{fontSize: 20, fontWeight: "600"}}>lets start shopping!</Text>
          </View>
          <View style={{width:"100%", paddingTop:30}}
          contentContainerStyle={{
            paddingTop: 25,
            paddingBottom: 25,
            paddingHorizontal: 10
          }}>
            <LineHeader text={"Categories"} size={30} lineWidth={"60%"} lineColor={"green"} />
            <ScrollView  horizontal={true}>
              <FloatBox 
              height={100} 
              width={100} 
              color={"grey"}
              opacity={0.7}
              topContent={
                <Text style={{color: "white", fontSize:20, fontWeight:"600"}}>Fruit</Text>
              }
              bottomContent={
                <MaterialCommunityIcons name="apple" size={24} color="white" />
              }
              
              />
              <FloatBox 
              height={100} 
              width={100} 
              color={"grey"}
              opacity={0.7}
              topContent={
                <Text style={{color: "white", fontSize:20, fontWeight:"600"}}>Veggie</Text>
              }
              bottomContent={
                <MaterialCommunityIcons name="leaf" size={24} color="white" />
              }/>
              <FloatBox 
              height={100} 
              width={100} 
              color={"grey"}
              opacity={0.7}
              topContent={
                <Text style={{color: "white", fontSize:20, fontWeight:"600"}}>Dairy</Text>
              }
              bottomContent={
                <MaterialCommunityIcons name="cheese" size={24} color="white" />
              }/>
            </ScrollView>
            </View>
        <View style={{width:"100%", paddingTop:30}}
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 25,
          paddingHorizontal: 10
        }}>
          <LineHeader text={"News"} size={40} lineWidth={"72%"} lineColor={"green"} />
          <ScrollView  horizontal={true}>
            <FloatBox height={200} width={300} color={"blue"}/>
            <FloatBox height={200} width={300} color={"blue"}/>
            <FloatBox height={200} width={300} color={"blue"}/>
          </ScrollView>
        </View>
        <Button title={"fasjh"} onPress={()=>{navigation.navigate("shop", {
          test:"yay"}
        )}}>sadkjfh</Button>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:"flex-start"
    },
    header:{
      margin: 20
    }
  });

export default HomeScreen
