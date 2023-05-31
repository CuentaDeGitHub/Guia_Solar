import {View,Text, ImageBackground,TouchableOpacity,Button,Alert,StyleSheet,SafeAreaView,Image} from 'react-native'
import React,{useState} from 'react'
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Home(props){

  const alertaAcerca =() => {
    Alert.alert('Acerca de la aplicacion','El objetivo de Guia Solar es el de servir como una base o inicio al mundo de los paneles solares. Proporcionando recomendaciones simples y personalizadas asi como informacion basica sobre los paneles solares');
  }


  
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
        <Icon name="menu" size={46} color="black" />
      </View>

      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <Text style={{fontSize: 41, color: 'black', paddingHorizontal:80}}>Guía Solar</Text>
        <Image source={require('../assets/Logo.png')} style={{height:300,width:350}} />
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold', paddingHorizontal:10,marginTop:-30}}>
          Seleccione el tipo de calculo
        </Text>
        
        <View><Text></Text></View>
        <TouchableOpacity style={styles.appButtonContainer} onPress={() => props.navigation.navigate('Formulario')}>
         <Text style={styles.appButtonText}>Calculo estandar</Text>
       </TouchableOpacity>
        <View><Text></Text></View>
       <TouchableOpacity style={styles.appButtonContainer}>
         <Text style={styles.appButtonText}>Calculo detallado</Text>
       </TouchableOpacity>
       <View><Text></Text></View>
       <View><Text></Text></View>
       <View>
        <TouchableOpacity onPress = {alertaAcerca}>
        <Text style={{fontSize: 20, color: 'black', paddingHorizontal:85,fontWeight: 'bold' }}>
          Sobre la aplicacion
        </Text>
        </TouchableOpacity>
      </View>

      </View>
    </View>
  </View>  
  );
}

const styles = StyleSheet.create({
    Separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 50,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
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
  })

