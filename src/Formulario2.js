import { View,Text,ImageBackground, TouchableOpacity,TextInput,Button,StyleSheet} from "react-native";
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component, useState,FC } from "react";

export default function Formulario2(props){


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
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
           <Icon name="menu" size={46} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: -20}}>
      <Text style={{fontSize: 30, color: 'black', paddingHorizontal:55}}>Calculo Detallado</Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal:40,marginTop:5}}>
          Seleccione una opcion para calcular el mejor panel solar
        </Text>
        </View>

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => props.navigation.navigate('ResultadosD')}>
         <Text style={styles.appButtonText}>Calcular</Text>
       </TouchableOpacity>
    </View>
</View>
    )
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

