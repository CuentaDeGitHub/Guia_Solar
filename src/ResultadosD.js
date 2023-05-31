import { View,Text,ImageBackground,TouchableOpacity,StyleSheet} from "react-native";
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import React,{useEffect, useState} from "react";
import {API_KEY} from './Constants';
import fetch from 'node-fetch'



export default function ResultadosD(props){
    return(
    <View>
    <ImageBackground
      source={require('../assets/Talvez2.jpg')}
      style={{height: deviceHeight, width: deviceWidth}}
      imageStyle={{opacity: 1, backgroundColor: 'black'}}
    />
    <View
      style={{
        position: 'absolute',
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: deviceWidth - 20,
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Formulario2')}>
           <Icon name="menu" size={46} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: -20}}>
      <Text style={{fontSize: 40, color: 'black', paddingHorizontal:70}}>Resultados</Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal:45,marginTop:5}}>
        </Text>
        </View>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Informacion del panel solar :
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:40,marginTop:20}}>
           * Nombre del Panel Solar : 
        </Text>

        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', paddingHorizontal:40,marginTop:20}}>
           * Marca : 
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:40,marginTop:20}}>
           * Potencia : 
        <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" />
            </TouchableOpacity>
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:40,marginTop:20}}>
           * Eficiencia : 
        <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" />
            </TouchableOpacity>
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:40,marginTop:20}}>
           * Tamaño : 
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:40,marginTop:20}}>
           * Precio : 
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Rendimiento estimado :
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Ahorro estimado :
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Tiempo de retorno de inversion :
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Impacto ambiental :
        </Text>


      
    </View>
</View>
    )
}

const styles = StyleSheet.create({
  ViewEstilo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 16,
    paddingHorizontal: 10,
  }
});