
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Searchbar } from 'react-native-paper';
import Card from '../component/card'

const data =[
    {category: "Fruit",
    image: require("../assets/apple.jpg")
    },
    {category: "Veggie",
    image: require("../assets/veggie.jpg")
    },{category: "Dairy",
    image: require("../assets/dairy.png")
    },
    {category: "Can",
    image: require("../assets/apple.jpg")
    }
]

const CategoryList = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    
    const filterCategory = () => {
      if(searchQuery == "") return data;
      return data.filter(value => value.category.toLowerCase().includes(searchQuery));
    }
  

    return (
        <View style={styles.container}>
        <View style={{flexDirection:"row", margin: 10, justifyContent:"space-between"}}> 
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
        </View>
        <FlatList
        data={data}
        renderItem={({item}) => {
          return(<Card title={item.category} description={"test"} image={item.image} />)
        }}
        key={item =>item.category}
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
