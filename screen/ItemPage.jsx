import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity}  from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import internalData from "../data/internal_data"
import * as cartActions from "../redux/actions/cartActions"
import { useSelector, useDispatch } from 'react-redux'
// const data = [
//     {label: 'USA', value: 'usa'},
//     {label: 'UK', value: 'uk'},
//     {label: 'France', value: 'france'},
// ];

const ItemPage = ({navigation, route}) => {

    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false);
    const [item, setItem] = useState({name : "", value : 0});
    const [amount, setAmount] = useState(1);
    const [data, setData] = useState([])

    //mongoDB call on searching database 
    useEffect(() => {
        let getCategory = route.params.item;
        let filtered = internalData.filter(value => value.category == getCategory);
        if(filtered.length != 0) setData(filtered[0].list);
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
        <Image style={{width: "100%", height : 200}} source={route.params.imageItem}/>
        <View style={styles.page}>
            <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center", margin: 10}}>
            <Text style={{fontSize: 30, fontWeight:500}}>{route.params.item}</Text>
            <TouchableOpacity onPress={() => setToggle(!toggle)} >
                {toggle ? <AntDesign name="caretdown" size={24} color="black" /> : <AntDesign name="caretup" size={24} color="black" />}
            </TouchableOpacity>
            </View>
            {toggle? <View style={{backgroundColor: "grey"}}>
                <Text> Insert description here</Text>
            </View>: null  
            }
        </View>
        <View>
            <Text style={{margin:10, fontSize: 25, fontWeight: 500}}>Choose your type :</Text>
            <DropDownPicker
                    items={data}
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
            {parseInt(item.value) != 0 ? <TouchableOpacity style={[styles.addCartButton]} onPress={() => dispatch(cartActions.addToCart(item, amount))}>
                <Text>{totalAmount()}</Text>
                <Text>Add to cart</Text>
            </TouchableOpacity> : <TouchableOpacity disabled={true} style={[styles.addCartButton, {backgroundColor:"grey"}]}>
                <Text>Add to cart</Text>
            </TouchableOpacity>}
        </View>
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
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
        position: "fixed",
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
