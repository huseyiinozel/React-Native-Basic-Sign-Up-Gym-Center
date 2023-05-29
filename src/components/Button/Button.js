import React from "react";
import { TouchableOpacity,Text } from "react-native";
import styles from './Button.Style';


const Button = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}  >
            <Text style={styles.text}  >{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;