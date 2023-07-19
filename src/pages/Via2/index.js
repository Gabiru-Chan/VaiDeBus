import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,View, Text,ScrollView, TextInput, Button, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Camera } from 'expo-camera';


function Via2(){
    const navegar = useNavigation()
  
  return(
    
    <ScrollView showsVerticalScrollIndicator={false}>
   <View style={estilo.container}>
          <View style={estilo.header}>

          <TouchableOpacity onPress={()=>{navegar.navigate('Principal')}}>
                <AntDesign name="arrowleft" size={35} color="#fff" style={{marginTop:40}}/>
                </TouchableOpacity>

               <Text style={estilo.textoHeader}
               >Solicitar 2ªVia </Text>
          </View>
          <View style={estilo.feed}>
            <View style={estilo.n1}>
              <Text style={estilo.Texton1}> Documentação necesaria: </Text>
              <Text style={estilo.Texton2}>1-(um)documento de identificação com foto :RG, CNH  </Text>
              <Text style={estilo.Texton2}>2-Tire uma foto</Text>
            </View>
            <Text>
            </Text>
          </View>
          <View style={estilo.feed2}>
            <TouchableOpacity style={estilo.n2}>
              <Text style={estilo.Texton4}> Upload foto </Text> 
            </TouchableOpacity>
            <TouchableOpacity style={estilo.n3}>

                <Text style={estilo.Texton4}>Upload</Text>
                <Text style={estilo.Texton4}> Doc.Identificação</Text>
                <Text style={estilo.Texton4}>(Frente e verso)</Text>

            </TouchableOpacity>
            </View>
           
            <TextInput
            style={estilo.textInpt}
            placeholder='Insira sua Senha'
            />
            
          <TouchableOpacity style={estilo.solicitar}>
           <Text style={{
            fontSize: 20,
            fontWeight:'bold',
            color:'#FFF',
            marginTop:10,
            marginRight:5,
           }}>           SOLICITAR</Text>
           
          </TouchableOpacity>

          <StatusBar style="auto"
           backgroundColor='#088cb0'/>
           

   </View>
   </ScrollView> 
   
  );
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor:'#E1F0F5', 
        height:1000
       
        
    },
    header:{
          backgroundColor:'#0093BB',
          height:150,
          flexDirection:'column',
          alignItems:'flex-start',
          borderBottomLeftRadius:15,
          borderBottomRightRadius:15

    },
    textoHeader:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginTop:20,
    marginStart:10
       
    },
    
    feed:{
      height:180,
      marginTop:2
    },
    feed2:{
        height:200,
        marginTop:2,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15
        
    },
    Textfeed:{
    fontSize:19,
    fontWeight:'bold',
    color:'#000',
    marginTop:20,
    marginStart:2,
    marginBottom:5,
    },

   n1:{
    padding:20,
    flex:1,
    marginTop:20,
    marginLeft:25,
    marginRight:20,
    
    

   },
    
  Texton1:{
    fontSize:19,
    color:'#000',
    fontWeight:'bold'
  },
  Texton2:{
    fontSize:19,
    color:'#000',
  },
  n2:{
    backgroundColor:'#fff',
    width:140,
    height:140,
    borderRadius:20,
    justifyContent:'center',
    padding:10
  },
  n3:{
    backgroundColor:'#fff',
    width:200,
    height:140,
    borderRadius:20,
    justifyContent:'center',
    padding:10
  },
  Texton4:{
    fontSize:19,
    color:'#000',

  },
  solicitar:{
  height: 50,
  backgroundColor:'#0A3B87',
  borderRadius:40,
  marginTop:80,
  marginHorizontal:90,
  },
  textInpt:{
    backgroundColor:'#fff',
    height:50,
    width:350,
    borderRadius:10,
    marginLeft:30
  },
});

export default Via2