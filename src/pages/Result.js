import React from 'react';
import { SafeAreaView,View,Text,StyleSheet } from 'react-native';


function Result ({route}) {
    const {user} = route.params;
    return (
        <SafeAreaView>
            <Text style={styles.message} >Kayit Basarili</Text>
            <Text style={styles.label} >Üye adi: {user.username} </Text>
            <Text style={styles.label} >Üye Soyadi: {user.usersurname}</Text>
            <Text style={styles.label}>Üye yasi: {user.userage}</Text>
            <Text style={styles.label}>Üye e-mail: {user.useremail}</Text>
            <Text style={styles.label}>Üye Adres: {user.useraddress}</Text>
            


        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:20,
        margin:5
    },
    message:{
        fontWeight:'bold',
        fontSize:50,
        textAlign:'center'
    }
})
export default Result;