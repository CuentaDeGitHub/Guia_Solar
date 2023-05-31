import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home';
import Formulario from './src/Formulario';
import Formulario2 from './src/Formulario2';
import Resultados from './src/Resultados';
import ResultadosD from './src/ResultadosD';


const Stack = createNativeStackNavigator();

export default function App(){  
  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: 
            false}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Formulario' component={Formulario}/>
                <Stack.Screen name='Formulario2' component={Formulario2}/>
                <Stack.Screen name='Resultados' component={Resultados}/>
                <Stack.Screen name='ResultadosD' component={ResultadosD}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}