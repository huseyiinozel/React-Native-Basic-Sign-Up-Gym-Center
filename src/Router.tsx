import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './pages/Welcome';
import Sign from "./pages/Sign";
import Result from "./pages/Result";

const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} 
         />
        <Stack.Screen  name='signscreen' component={Sign}
        />
        <Stack.Screen  name='resultscreen' component={Result}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;