import React , {useState, useEffect}from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import InnerPriceBar from "../component/innerPriceBar";
import PriceBar from "../component/priceBar"
import { useSelector, useDispatch } from 'react-redux'
import { SwipeListView } from 'react-native-swipe-list-view';
import {removeFromCart} from '../redux/actions/cartActions';



const Cart = ({navigation, route}) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.cart.cart);
    // const data = [{
    //     label : "d1",
    //     value : "1",
    //     amount : 1
    // },
    // {
    //     label : "d2",
    //     value : "2",
    //     amount: 2
    // },
    // {
    //     label : "d3",
    //     value : "3",
    //     amount : 3
    // },{
    //     label : "d3",
    //     value : "3",
    //     amount : 3
    // }]


    return (
        <View style={{height:"100%"}}>
            <SwipeListView
                data={data}
                renderItem={PriceBar}
                renderHiddenItem={(data, rowMap) => (
                    <InnerPriceBar onClick={()=> dispatch(removeFromCart(data.item))}/>
                )}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
            />
            <View style={styles.total}>
                <View style={styles.totalBar}/>
                <View style={styles.totalTextBox}>
                    <View style={styles.totalText}>
                    <Text style={styles.totalTextBold}>Total: </Text>
                    <Text>money</Text>
                    </View>
                    <View style={styles.totalText}>
                    <Text style={styles.totalTextBold}>Subcharge (10%):</Text>
                    <Text>money</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    total: {
      width: "100%",
      height: "30%",
      alignItems:"flex-end"
    },
    totalBar:{
      height: 3,
      width: "100%",
      backgroundColor:"black"
    },
    totalTextBox:{
      width: "100%",
      padding: 10
    },
    totalText:{
      flexDirection:"row",
      justifyContent:"space-between",
    },
    totalTextBold:{
      marginLeft: "50%",
      fontWeight: 600
    }
  });

export default Cart
