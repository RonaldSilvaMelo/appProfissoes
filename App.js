// Import serve para "puxar ferramentas de uma caixa de ferramentas"
import * as React from "react";
import {Text, View, StyleSheet,Image, ScrollView } from "react-native";

//Função aplicativo
//Para dar espaço em js "{"\n"}"
export default function App(){
  return(
    
    <View style={estilo.container}>

      <View>
        <Text style={estilo.titulo}>Profissões de TI</Text>
      </View>

      <ScrollView>
        <View>
          <Text style={estilo.subtitulo}>Programador de Mobile</Text>
          <Image style={estilo.img} source={require("./assets/moblie.jpg")}/>

          <Text style={estilo.subtitulo}>Programador de Backend</Text>
          <Image style={estilo.img} source={require("./assets/backend.jpg")}/>

          <Text style={estilo.subtitulo}>Programador de Frontend</Text>
          <Image style={estilo.img} source={require("./assets/frontend.jpg")}/>

          <Text style={estilo.subtitulo}>Analista de DevOps</Text>
          <Image style={estilo.img} source={require("./assets/devops.jpg")}/>
          </View>
      </ScrollView>

    </View>
    
  );
}

const estilo = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#212121",
  },

  titulo:{
    fontSize: 45,
    color: "#FF6D0A",
    margin: 20
  },

  subtitulo:{
    color: "#ffffff",
    margin: 10
  },

  img:{
    width: 250,
    height: 250,
    borderRadius: 20
  }
})