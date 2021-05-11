import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight}  from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import internalData from "../data/internal_data"
import * as cartActions from "../redux/actions/cartActions"
import { useSelector, useDispatch } from 'react-redux'
// const olddata = [
//     {label: 'USA', value: 'usa'},
//     {label: 'UK', value: 'uk'},
//     {label: 'France', value: 'france'},
// ];

const ItemPage = ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: (props) => {
              return(
                <TouchableHighlight style={{marginRight:5}}onPress={()=>navigation.navigate("cart")}>
                  <MaterialCommunityIcons name="cart" size={24} color="white" />
                </TouchableHighlight>
              )
            },
            headerLeft: () => {
                return(
                    <TouchableHighlight style={{marginLeft:5}}onPress={()=>navigation.goBack()}>
                      <MaterialCommunityIcons name="arrow-left-bold-circle" size={24} color="white" />
                    </TouchableHighlight>
                  )
            },
            headerTitle: () => {
                
            }
            ,
            headerTransparent:true
        })
    }, [navigation])

    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false);
    const [item, setItem] = useState({label:"asd", value:"asd"}); //poor fix due to collision of data flow pre-render and post-render hooks
    const [amount, setAmount] = useState(1);
    const [data, setData] = useState([])

    //mongoDB call on searching database 
    useEffect(() => {
        let getCategory = route.params.item;
        let filtered = internalData.filter(value => value.category == getCategory);
        if(filtered.length != 0) {
            setData(filtered[0].list);
            setItem(filtered[0].list[0])
        }
        // setData(olddata);
    },[route])
    
    const changeAmount = (change) =>{
        if(amount - change >0) setAmount(amount - change);
    }

    const totalAmount = () => {
        const value = parseInt(item.value);
        return value *  amount;

    }

    return (
      <View style={styles.container}>
        <Image style={{width: "100%", height : "55%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30}} source={route.params.imageItem}/>
        <View style={styles.page}>
            <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center", margin: 10}}>
            <View>
                <Text style={{fontSize: 30, fontWeight:"500"}}>{route.params.item}</Text>
                <Text style={{fontSize: 15, fontWeight:"500"}}>{item.value}</Text>
            </View>
            {/* <TouchableOpacity onPress={() => setToggle(!toggle)} >
                {toggle ? <AntDesign name="caretdown" size={24} color="black" /> : <AntDesign name="caretup" size={24} color="black" />}
            </TouchableOpacity> */}
            </View>
            {/* {toggle? <View style={{backgroundColor: "grey"}}>
                <Text> asdlfjkhlkjasdhfkljasdhflkjhasdkljfhaslkdjhflk asdhflkj asdhlkjf hasdlkjf halksjd hflkjasdh fl kjahsdlkjf haslkdjh flkjasdhfkl jahsdlkj fhalkjsd hf lkjashdlkjf halskdj hflkjas dhlkfj hasdlkj hfkljasdhf lkjhasdlkjf hlkajsd hf lkjasdlkj </Text>
            </View>: null  
            } */}
        </View>
        <View style={{marginBottom: 60}}>
            <Text style={{margin:10, fontSize: 25, fontWeight: "500"}}>Choose your type :</Text>
            <DropDownPicker
                    items={data}
                    value={item}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setItem(item)}
                />
            <View style={styles.itemArea}>
                <TouchableOpacity onPress={() => changeAmount(-1)} >
                    <AntDesign name="pluscircle" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{marginHorizontal: 5 ,fontSize: 30}}>{amount}</Text>
                <TouchableOpacity onPress={() => changeAmount(1)} >
                    <AntDesign name="minuscircle" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{height: 60}}></View>
        </View>
        {parseInt(item.value) != 0 ? <TouchableOpacity style={[styles.addCartButton]} onPress={() => dispatch(cartActions.addToCart(item, amount))}>
                <Text>{totalAmount()}</Text>
                <Text>Add to cart</Text>
            </TouchableOpacity> : <TouchableOpacity disabled={true} style={[styles.addCartButton, {backgroundColor:"grey"}]}>
                <Text>Add to cart</Text>
            </TouchableOpacity>}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 30,
      width:"100%"
    },
    page :{
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.34,
        // shadowRadius: 6.27,

        // elevation: 10,
    },
    itemArea : {
    flexDirection:"row",
    justifyContent:"flex-end",
     margin:10,
      alignItems:"center"
    },
    addCartButton : {
        width:"80%",
        height: 40,
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 30,
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"center",
        alignSelf:"center",
        bottom: 10
    }
  });
export default ItemPage
