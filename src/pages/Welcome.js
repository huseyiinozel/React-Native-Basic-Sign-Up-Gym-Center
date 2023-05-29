import React from 'react';
import {SafeAreaView,Text,View,StyleSheet} from "react-native";
import Button from '../components/Button';

function Welcome ({navigation}) {
    function gotosign(){
        navigation.navigate('signscreen');
    }


    return (
        <SafeAreaView style={styles.container} >
        <Text style={styles.header} >Fitness Center</Text>
        <Button text='Uye Ol' onPress={gotosign} ></Button>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        margin:10
    }
});
export default Welcome;