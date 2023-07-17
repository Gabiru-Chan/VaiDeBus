import React from 'react';
import { StyleSheet ,View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function Tutorial(){

  const navegar = useNavigation()
  
  return(
    
   <View style={estilo.container}>
          <View style={estilo.header}>

          <TouchableOpacity onPress={()=>{navegar.navigate('Config')}}>
                <AntDesign name="arrowleft" size={35} color="#fff" style={{marginTop:10}} />
                </TouchableOpacity>

               <Text style={estilo.textoHeader}>Como Utilizar?                               (Carteirinha Digital)  </Text>
          </View>
  
          <ScrollView style={estilo.feed} >
            
               <Text style={estilo.Textfeed}>Passo 1:</Text> 

               <View style={estilo.n1} > 
            <Text style={estilo.Texton1}>-Clique em "Carteirinha digital"  </Text>
            <Image
        style={{width:300,height:300, marginTop:20,}}
        source={require('../../Imagem/telaHome.jpeg')}
        />
        <View style={estilo.feed1}>
             <Text style={estilo.Textfeed1} > Passo 2:</Text>
            <Image
         style={{width:300,height:700, marginTop:20,}}
         source={require('../../Imagem/telaCard.jpeg')}
         />  
        
          </View>
          </View>

          
            </ScrollView>
         
          <View style={estilo.footer} >
                
          </View>
          
   </View> 
   
  );
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor:'#E1F0F5', 
        flex:1     
    },
    header:{
          backgroundColor:'#0093BB',
          height:160,
          flexDirection:'column',
          alignItems:'flex-start',
          borderBottomLeftRadius:15,
          borderBottomRightRadius:15

    },
    textoHeader:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginTop:25,
    marginStart:10    
    },
    
    feed:{
      flex:1, 
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
    padding:30,


   },
    
  Texton1:{
    fontSize:16,
    marginLeft:10,





  },
  feed1:{
    flex:1,
    alignItems:'center',
  },
  Textfeed1:{
    fontSize:19,
    marginLeft:10,
    fontWeight:'bold',
    marginTop:20,
    marginStart:2,
    marginBottom:5,
  }
});

export default Tutorial