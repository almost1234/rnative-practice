
import React , {useLayoutEffect, useState, useEffect}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Searchbar } from 'react-native-paper';
import Card from '../component/card'

//assuming mongo call
import data from "../data/data"

// const data =[
//     {category: "Fruit",
//     image: require("../assets/apple.jpg")
//     },
//     {category: "Veggie",
//     image: require("../assets/veggie.jpg")
//     },{category: "Dairy",
//     image: require("../assets/dairy.png")
//     },
//     {category: "Can",
//     image: require("../assets/apple.jpg")
//     }
// ]

const CategoryList = ({navigation, route}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle : (props)=>{
          return(
            <View>
              <Text style={{fontSize: 30, fontWeight: 700}}>{route.params.cat}</Text>
            </View>
          );
        },
        headerRight: (props) => {
          return(
            <TouchableHighlight onPress={()=>console.log("CLICK")}>
              <MaterialCommunityIcons name="cart" size={24} color="black" />
            </TouchableHighlight>
          )
        }
    })
}, [navigation])

    //hardcode implementation, try improve
    
    const [filData, setFilData] = useState([])
    useEffect(() => {
      const convData = data.filter( value => value.category == route.params.cat.toLowerCase());
      console.log(convData[0].list)
      setFilData(convData[0].list);
    })

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    
    const filterCategory = () => {
      if(searchQuery == "") return data;
      return data.filter(value => value.category.toLowerCase().includes(searchQuery));
    }
  

    return (
        <View style={styles.container}>
        {/* <View style={{flexDirection:"row", margin: 10, justifyContent:"space-between"}}> 
          <MaterialCommunityIcons name="face-profile" size={24} color="black" />
          <MaterialCommunityIcons name="cart" size={24} color="black" />
        </View>
        <View style={styles.header}>
          <Text style={{fontSize: 50, fontWeight: 700}}>Categories</Text>
        </View>
        <View>
          <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{margin: 10, borderRadius: 30}}
        />
        </View> */}
        <FlatList
        data={filData}
        renderItem={({item}) => {
          console.log(item);
          return(<Card title={item.item} description={item.data} image={item.image} />)
        }}
        key={item =>item.item}
        />
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
  

export default CategoryList
