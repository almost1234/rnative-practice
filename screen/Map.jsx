import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Dimensions} from 'react-native'
// import MapView, {Marker, Polyline} from 'react-native-maps'
import * as Location from 'expo-location';
import MapCard from "../component/map-card"

const {height, width} = Dimensions.get("screen");

const Map = () => {
    const position ={
        latitude: 22.336131909163964, 
        longitude: 114.26595872668995,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    }
    
    const [location, setLocation] = useState(null)
    const verifyPermission = async () =>{
        const result = await Location.requestForegroundPermissionsAsync();
        console.log(result)
        if( result.status != 'granted'){
            console.log("aww")
            return;
        }
        
        let location = await Location.getCurrentPositionAsync({});
        console.log("yay");
        console.log(location)
        setLocation(location);

        let initialLocation = "hkust"
        let finalLocation = "hang hau"
        let url = 'https://maps.googleapis.com/maps/api/directions/json?origin=hkust&destination=hang+hau&key=AIzaSyCvxjOnnwToehRQuv40k7Uw8zra0Qpd9to';
        const endres = await fetch(url);
        const demit = await endres.json();
        console.log(demit);

    }

    const formatLocation = (data) => {
        if(data == null) return null;
        const {coords} = data;
        return {
            latitude: coords.latitude, 
            longitude: coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
        }
    };

    useEffect(() => {
        verifyPermission();
    }, [])

    return (
        // <View style={{flex:1}}>
        //     <Text>{location}</Text>
        // </View>
        <View style={{flex:1}}>
            {/* <MapView style={styles.map} region={position}>
            {location && <Marker coordinate={formatLocation(location)}/>}
                <Polyline
            coordinates={[
                { latitude: 22.336131909163964, longitude: 114.26595872668995 },
                { latitude: 23.336131909163964, longitude: 115.26595872668995 },
                { latitude: 21.336131909163964, longitude: 151.26595872668995 },
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            ]}
            strokeWidth={6}
            />
            </MapView> */}
            <Text>asdasd</Text>
            <MapCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    map:{
        flex:1
    },
    information:{
        position:"absolute",
        height: height/4,
        width : width * 0.9,
        backgroundColor:"grey",
        alignSelf:"center",
        bottom:20,
    }
});

export default Map
