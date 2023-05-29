import React,{useState} from "react";
import { SafeAreaView,Text,View,Alert } from "react-native";
import Input from '../components/Input';
import Button from "../components/Button";

function Sign({navigation}){
    const [username,setusername] = useState(null);
    const [usersurname,setusersurname] = useState(null);
    const [userage,setuserage] = useState(null);
    const [useremail,setuseremail] = useState(null);
    const [useraddress,setuseraddress] = useState(null);

    function handlesubmit(){
        if (!username || !usersurname || !userage || !useremail || !useraddress ) {
            Alert.alert('Fitness Center', 'Bilgiler Boş Birakilamaz');
            return;
          }
        const user = {
            username,
            usersurname,
            userage,
            useremail,
            useraddress
        };
        navigation.navigate('resultscreen', {user});
        

    }
    return(
        <SafeAreaView>
            
            <Input label="Uye Adi" placeholder="Uye Ismi" onChange={setusername} />
            <Input label="Uye Soyadi" placeholder="Uye Soyadi" onChange={setusersurname}></Input>
            <Input label="Uye Yasi" placeholder="Uye Yasi" onChange={setuserage} ></Input>
            <Input label="Uye E-mail" placeholder="Uye E-mail" onChange={setuseremail} ></Input>
            <Input label="Uye Adres" placeholder="Uye Adres" onChange={setuseraddress}></Input>
            <Button text="Uye Ol"  onPress={handlesubmit}  ></Button>
             </SafeAreaView>
    )
}

export default Sign;