import React from "react";
import { SafeAreaView,Text,View ,TextInput} from "react-native";
import styles from './Input.style';
function Input({label,onChange,placeholder}){
    return (
        <View style={styles.container}>
         <Text style={styles.label} >{label}</Text>
         <View style={styles.input}> 
        <TextInput  onChangeText={onChange} placeholder={placeholder} />
        </View>  
        </View>
    )
}

export default Input;