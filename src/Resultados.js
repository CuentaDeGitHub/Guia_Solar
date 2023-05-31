import { View,Text,ImageBackground,TouchableOpacity,Alert,StyleSheet,Linking} from "react-native";
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import React,{useEffect, useState} from "react";
import {API_KEY} from './Constants';
import fetch from 'node-fetch';






export default function Resultados(props){
  
  const Ciudad = props.route.params.vCiudad
  const Area = props.route.params.vArea
  const Presupuesto = props.route.params.vPresupuesto
  const Consumo = props.route.params.vConsumo
  const TipoUso = props.route.params.cTipoUso
  const [temperature, setTemperature] = useState(null);

  const handlePress = () => {
    Linking.openURL(panelRecomendado.url);
  }


  const alertaPotencia =() => {
    Alert.alert('Potencia de un panel solar','La potencia determina la cantidad de Watts que un panel genera durante condiciones optimas, es decir, horas pico del sol, en promedio un dia tiene 8 horas donde el panel solar trabaja a maxima capacidad.');
  }

  const alertaEficiencia =() => {
    Alert.alert('Eficiencia','Es la cantidad de energia solar que es convertida en Watts por el panel solar.');
  }

  const alertaAclaraciones =() => {
    Alert.alert('Aclaracion','Estos calculos son simplemente aproximaciones, hay muchos factores que tienen importancia al momento de elegir un panel solar, como las horas de luz solar, la tarifa por unidad electrica en tu zona, el costo de la instalacion, costo de mantenimiento, etc. El proposito de esta aplicacion es el de servir como un inicio al mundo de los paneles solares');
  }


  var panelesSolares = [
    {
      modelo: "Panel Solar Fotovoltaico De 380w",
      tipodeUso: "Comercial",
      eficiencia: 19.16,
      capacidadPotencia: 380, 
      fabricante: "Jinko",
      LargoMM: 1046,
      AnchoMM: 1690,
      toleranciaTemperatura: 0.37, 
      precio: 3500,
      url: "https://articulo.mercadolibre.com.mx/MLM-1814681019-panel-solar-fotovoltaico-de-380w-marca-jinko-oferta-_JM#position=1&search_layout=grid&type=item&tracking_id=296fdfd4-f7eb-497f-98db-ad498c52f7c5",
    },
    {
      modelo: "Panel Solar Ja Solar Mono De 545w",
      tipodeUso: "Comercial",
      eficiencia: 21.1,
      capacidadPotencia: 545, 
      fabricante: "Ja Solar",
      LargoMM: 1134,
      AnchoMM: 2278,
      toleranciaTemperatura: 0.35, 
      precio: 5500,
      url: "https://articulo.mercadolibre.com.mx/MLM-1524261654-panel-solar-ja-solar-mono-de-545w-_JM#position=3&search_layout=grid&type=item&tracking_id=65723d41-fdfa-4fbb-a26b-f2dc396c78a9",
    },
    {
      modelo: "Panel Solar 450w Monocristalino 144 Cell",
      tipodeUso: "Residencial",
      eficiencia: 20.6,
      capacidadPotencia: 450, 
      fabricante: "Solar Smart",
      LargoMM: 1040,
      AnchoMM: 2102,
      toleranciaTemperatura: 0.35, 
      precio: 3696,
      url: "https://articulo.mercadolibre.com.mx/MLM-937610848-panel-solar-450w-monocristalino-144-cell-super-precio-_JM",
    },
    {
      modelo: "IUSA Panel Solar Fotovoltaico de 330 w Monocristalino",
      tipodeUso: "Residencial",
      eficiencia: 20,
      capacidadPotencia: 330, 
      fabricante: "IUSA",
      LargoMM: 992,
      AnchoMM: 1665,
      toleranciaTemperatura: 0.35, 
      precio: 3700,
      url: "https://articulo.mercadolibre.com.mx/MLM-922081095-panel-solar-fotovoltaico-de-330-w-monocristalino-_JM",
    },
  ];

  function obtenerPanelSolarRecomendado() {
    var panelesFiltrados = panelesSolares.filter(function(panel) {
      return panel.tipodeUso === TipoUso && panel.precio <= Presupuesto;
    });
  
    var capacidadRequerida = Consumo / 30; 
  
    panelesFiltrados.sort(function(a, b) {
      var diferenciaA = Math.abs(a.capacidadPotencia - capacidadRequerida); 
      var diferenciaB = Math.abs(b.capacidadPotencia - capacidadRequerida);
      return diferenciaA - diferenciaB;
    });
  
    var panelesFiltradosPorArea = panelesFiltrados.filter(function(panel) {
      return panel.LargoMM * panel.AnchoMM / 1000000 <= Area;
    });
  
    return panelesFiltradosPorArea[0];
  }

  useEffect(() => {

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${Ciudad}&appid=${API_KEY}`
        );

        const data = await response.json();
        const temperatureInCelsius = data.main.temp - 273.15;
        setTemperature(temperatureInCelsius);
      } catch (error) {
        console.error('Error al obtener la temperatura:', error);
      }
    };

    fetchWeather();
  }, []);

  var panelRecomendado = obtenerPanelSolarRecomendado();
  var tamaño = panelRecomendado.AnchoMM * panelRecomendado.LargoMM
  tamaño = tamaño/1000000

  var capacidadPotencia = panelRecomendado.capacidadPotencia;
  var rendimientoAnual = 0;

  function calcularRendimiento() {
    var diferencia = 0;
    var perdida = 0;
    if ({temperature} > 25) {
      diferencia = {temperature} - 25;
      for (var i = 0; i < diferencia; i++){
        perdida += panelRecomendado.toleranciaTemperatura;
      }
    }
    capacidadPotencia = (capacidadPotencia * 6)/1000
    rendimientoAnual = capacidadPotencia * 365
    if (perdida != 0){
      perdida = perdida/100;
      perdida = 1 - perdida;
      rendimientoAnual = rendimientoAnual * perdida;
    }else{
    }
  }

  calcularRendimiento()

  var ahorro = 100;
  function CalcularAhorro(){
    var cobertura = (rendimientoAnual * 100) / (Consumo * 12)
    ahorro = (rendimientoAnual) * (0.645) * (cobertura) - (Consumo * 12)
  }

  CalcularAhorro()

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
        <TouchableOpacity onPress={() => props.navigation.navigate('Formulario')}>
           <Icon name="menu" size={46} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: -20}}>
      <Text style={{fontSize: 40, color: 'black', paddingHorizontal:70}}>Resultados</Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', paddingHorizontal:45,marginTop:5}}>
        </Text>
        </View>

        <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold', paddingHorizontal:50,marginTop:-35}}>
          Informacion del panel solar
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:35}}>
           * Nombre del Panel Solar : {panelRecomendado.modelo}
        </Text>

        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
           * Marca : {panelRecomendado.fabricante}
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
        * Potencia: {panelRecomendado.capacidadPotencia + 'W '}
        <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" onPress = {alertaPotencia} />
            </TouchableOpacity>
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
           * Eficiencia : {panelRecomendado.eficiencia + '% '}
        <TouchableOpacity>
              <Icon name="information-circle" size={22} color="black" onPress = {alertaEficiencia} />
            </TouchableOpacity>
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
           * Tamaño : {tamaño.toFixed(2)} Metros
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
           * Precio : {panelRecomendado.precio} Pesos
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Rendimiento estimado : {rendimientoAnual.toFixed(2)} kWh al año
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Ahorro estimado $: {ahorro.toFixed(2)} al año
        </Text>

        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingHorizontal:20,marginTop:20}}>
          Impacto ambiental : P r o x i m a m e n t e 
        </Text>

        <View>
        <TouchableOpacity onPress = {alertaAclaraciones}>
        <Text style={{fontSize: 30, color: 'black', paddingHorizontal:122,fontWeight: 'bold', marginTop:50 }}>
          Aclaracion
        </Text>
        </TouchableOpacity>
      </View>
        <View><Text></Text></View>
      <TouchableOpacity style={styles.appButtonContainer} onPress={handlePress}>
         <Text style={styles.appButtonText}>Ver Panel Solar</Text>
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