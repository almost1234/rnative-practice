import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Searchbar } from 'react-native-paper';
import FloatBox from '../component/float-box'

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

const CategoryScreen = ({route, navigation}) => {
  
  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle : (props)=>{
          return(
            <View>
              <Text style={{fontSize: 30, fontWeight: "700"}}>Categories</Text>
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

    // const {test} = route.params;
    // console.log(test);
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  
    const categoryCard = (category, image)=>{
      const headerText = () => {return(<Text style={{color:"black", fontSize:40, fontWeight:"700"}}>{category}</Text>);}
  
      return(<FloatBox height={200} width={"95%"} topContent={headerText()} image={image} onClick={() => navigation.navigate(
        "list", {cat : category}
      )}/>);
    }
    
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
        </View> */}
        <View>
          <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{margin: 10, borderRadius: 30}}
        />
        </View>
        <ScrollView style={{flex:1, width:"100%"}} >
          {filterCategory().map(value => {
            console.log(value.category);
            return categoryCard(value.category, value.image);
          })}
        </ScrollView>
      </View>
    );
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
export default CategoryScreen
