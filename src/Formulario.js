import { View,Text,ImageBackground,TouchableOpacity,StyleSheet,TextInput, Alert} from "react-native";
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import React,{useState} from "react";

export default function Formulario(props){
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [cEnergia, setCEnergia] = useState('');
  const [tipoUso, setTipoUso] = useState('');

  const alertaCiudad =() => {
    Alert.alert('Ciudad','La ubicacion permite a la aplicacion conocer el clima de la zona, lo cual puede afectar el rendimiento de los paneles solares.');
  }

  const alertaArea =() => {
    Alert.alert('Area Disponible','El area disponible en metros donde puedas instalar un panel solar, no se recomendara un panel que no pueda entrar en el area especificada.');
  }

  const alertaConsumo =() => {
    Alert.alert('Consumo Electrico','El consumo electrico mensual en kWh se puede encontrar en tu recibo de Luz, esto permite seleccionar un panel que se adapte a tu consumo mensual.');
  }

  const alertaPresupuesto =() => {
    Alert.alert('Presupuesto','Los paneles solares pueden rondar entre los 3000 a 18000 pesos sin tomar en cuenta el costo de instalacion, se le recomendara un panel solar segun su presupuesto');
  }

  const alertaTipoDeUso =() => {
    Alert.alert('Tipo de uso','Los paneles solares suelen ser creados para el uso residencial o comercial, es decir para hogares o empresas');
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
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
           <Icon name="menu" size={46} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: -30}}>
      <Text style={{fontSize: 30, color: 'black', paddingHorizontal:60}}>Calculo Estandar</Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal:29,marginTop:0}}>
          Llene los datos para realizar una recomendacion estandar
        </Text>


        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Ciudad de la vivienda
        </Text>
        <View style={styles.ViewEstilo}>
        <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Ciudad"
              placeholderTextColor="black"
              style={{paddingHorizontal: 10, color: 'black', fontSize: 16}}
            />
            <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" onPress = {alertaCiudad}/>
            </TouchableOpacity>
        </View>

        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
        Área disponible
        </Text>
        <View style={styles.ViewEstilo}>
        <TextInput
              value={area}
              onChangeText={val => setArea(val)}
              placeholder="Área disponible para la instalación"
              placeholderTextColor="black"
              style={{paddingHorizontal: 10, color: 'black', fontSize: 16}}
            />
            <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" onPress = {alertaArea}/>
            </TouchableOpacity>
        </View>

        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Presupuesto disponible
        </Text>
        <View style={styles.ViewEstilo}>
        <TextInput
              value={presupuesto}
              onChangeText={val => setPresupuesto(val)}
              placeholder="Presupuesto para los paneles solares"
              placeholderTextColor="black"
              style={{paddingHorizontal: 10, color: 'black', fontSize: 16}}
            />
            <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" onPress = {alertaPresupuesto}/>
            </TouchableOpacity>
        </View>

        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Consumo de energia mensual
        </Text>
        <View style={styles.ViewEstilo}>
        <TextInput
              value={cEnergia}
              onChangeText={val => setCEnergia(val)}
              placeholder="Consumo mensual en kWh"
              placeholderTextColor="black"
              style={{paddingHorizontal: 10, color: 'black', fontSize: 16}}
            />
            <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" onPress = {alertaConsumo}/>
            </TouchableOpacity>
        </View>

        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Tipo de uso planeado
        </Text>
        <View style={styles.ViewEstilo}>
        <TextInput
              value={tipoUso}
              onChangeText={val => setTipoUso(val)}
              placeholder="Residencial / Comercial"
              placeholderTextColor="black"
              style={{paddingHorizontal: 10, color: 'black', fontSize: 16}}
            />
            <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" onPress = {alertaTipoDeUso} />
            </TouchableOpacity>
        </View>
        <View><Text></Text></View>
        
        <TouchableOpacity style={styles.appButtonContainer} onPress={() => props.navigation.navigate('Resultados',{vCiudad:city,vArea:area,vPresupuesto:presupuesto,vConsumo:cEnergia,cTipoUso:tipoUso})}>
         <Text style={styles.appButtonText}>Calcular</Text>
       </TouchableOpacity>

      </View>
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
});