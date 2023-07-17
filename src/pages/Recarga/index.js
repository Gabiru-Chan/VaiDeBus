import { StyleSheet, Text, View,TouchableOpacity,TextInput, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export default function Recarga() {
  const [valor, setValor] = useState('Outro Valor')
    const navegar = useNavigation()
    function voltar(){
        navegar.navigate('Principal')
    }
    function transferir(){
      navegar.navigate('Transferencia')
  }
  function real3(){
    setValor('3,00')
  }
  function real4(){
    setValor('4,50')
  }
  function real9(){
    setValor('9,00')
  }
  

  return (

    <View style={estilos.container}>
      <View style={estilos.header}>

      <TouchableOpacity style={{marginTop:10}} onPress={voltar}>
                <AntDesign name="arrowleft" size={35} color="#fff" />
                </TouchableOpacity>
        <Text style={estilos.headerTexto}>Recarga</Text>

      </View>

      <View style={estilos.caixa1}>
        <TouchableOpacity style={estilos.botao1} onPress={real3}>

          <Text style={estilos.botao1Texto}>R$</Text>
          <Text style={estilos.botao1Texto}>3,00</Text>

        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao1} onPress={real4}>

        <Text style={estilos.botao1Texto}>R$</Text>
          <Text style={estilos.botao1Texto}>4,50</Text>

        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao1} onPress={real9}>

        <Text style={estilos.botao1Texto}>R$</Text>
          <Text style={estilos.botao1Texto}>9,00</Text>

        </TouchableOpacity >
        
      </View>
      <View style={{alignItems:'center'}}>
      <TextInput style={estilos.botao2}
      placeholder = {valor}
      keyboardType='numeric'
      ChangeText={(texto) => setValor(texto)}
      
        /> 
      </View>
      <View style={estilos.caixa2}>

        <TouchableOpacity style={estilos.botao3} onPress={()=>{navegar.navigate('RecargaPix')}}>

          <Text style={estilos.botao3Texto}>RECARREGAR VIA PIX</Text>
          

        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao3} onPress={transferir}>

            <Text style={estilos.botao3Texto}>TRANSFERÊNCIA ENTRE CARTÕES</Text>
 
        </TouchableOpacity>

      </View>
    </View>
    
  );
  }

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    backgroundColor: '#0093bb',
    height:150,
    borderBottomStartRadius:20,
    borderBottomEndRadius:20, 
    padding:5
  },
  headerTexto:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:25,
    marginLeft:5,
    marginTop:25
  },
  caixa1:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15
  },
  botao1:{                                                                                                                      
    backgroundColor:'#AEE5F6',
    width:100,
    height:100,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  botao1Texto:{
    color:'#2E2594',
    fontSize:20,
    fontWeight:'bold'
  },
  botao2:{
    backgroundColor:'#AEE5F6',
    width:320,
    height:65,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
    marginBottom:25,
    fontSize:20,
    textAlign:'center'
  },
  botao2Texto:{
    color:'#2E2594',
    fontSize:25,
    fontWeight:'bold'
  },
  caixa2:{
    marginTop:40,
    alignItems:'center'
  },
  botao3:{
    backgroundColor:'#AEE5F6',
    width:360,
    height:110,
    borderRadius:15,
    padding:25,
    marginBottom:60,
    alignItems:'center'
  },
  botao3Texto:{
    color:'#2E2594',
    fontSize:17,
    fontWeight:'bold'
  },
});