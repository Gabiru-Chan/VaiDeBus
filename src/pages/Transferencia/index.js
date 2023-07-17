import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Tranferencia() {
  const [valor, setValor] = useState('R$00,00')
  const navegar = useNavigation()

  function real4(){
    setValor('4,50')
  }
  function real9(){
    setValor('9,00')
  }
  function real13(){
    setValor('13,50')
  }
  console.log(valor)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
    <View style={estilos.container}>
      <View style={estilos.header}>
        <View style={{marginTop:5}}>

        <TouchableOpacity style={{marginTop:10}} onPress={()=>{navegar.navigate('Recarga')}}>
                <AntDesign name="arrowleft" size={35} color="#fff" />
                </TouchableOpacity>
        

        <Text style={estilos.headertext}>Transferencia entre cartões</Text>
        </View>
      </View>
      <View style={estilos.caixa1}>
        <Text style={estilos.text1}>
        insira o codigo da carteira que deseja transferir :
        </Text>

        <TextInput
        style={estilos.input1}
        placeholder='***************'
        keyboardType='numeric'
        />
      </View>
      <View style={{alignItems:'center',marginTop:30,marginBottom:30}}>
      <Text>insira o valor que dejesa trânsferir:</Text>
      </View>
      <View style={estilos.caixa2}>
        <TouchableOpacity style={estilos.miniCaixa} onPress={real4}>

          <Text style={estilos.miniCaixatext}>R$</Text>
          <Text style={estilos.miniCaixatext}>4,50</Text>

        </TouchableOpacity>

        <TouchableOpacity style={estilos.miniCaixa} onPress={real9}>

          <Text style={estilos.miniCaixatext}>R$</Text>
          <Text style={estilos.miniCaixatext}>9,00</Text>
          
        </TouchableOpacity>

        <TouchableOpacity style={estilos.miniCaixa} onPress={real13}>

          <Text style={estilos.miniCaixatext}>R$</Text>
          <Text style={estilos.miniCaixatext}>13,50</Text>
          
        </TouchableOpacity>

      </View>
      <View style={estilos.caixa3}>
        <Text>Outros valores:</Text>
        <TextInput style={estilos.input2}
        keyboardType='numeric'
        placeholder={valor}
        onChangeText={(texto) => setValor(texto)}
        />
        <TouchableOpacity style={estilos.botao} onPress={()=>{navegar.navigate('Comprovante')}}>
          <Text style={estilos.texto}>EFETUAR TRASNFERÊNCIA </Text>
        </TouchableOpacity>
      </View>
      
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    backgroundColor:'#0093BB',
    height:150,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    padding:5
  },
  headertext:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginTop:25
  },
  caixa1:{
    alignItems:'center',
    marginTop:50,
  },
  input1:{
    width:350,
    height:50,
    backgroundColor:'#E0EFEF',
    borderRadius:15,
    textAlign:'center'
  },
  text1:{
    fontSize:15,
    marginBottom:50,
  },
  caixa2:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15
  },
  miniCaixa:{
    backgroundColor:'#AEE5F6',
    width:100,
    height:100,
    borderRadius:20,
    alignItems:'center',
    padding:20
  },
  miniCaixatext:{
    fontSize:18.5,
    color:'#2E2594',
    fontWeight:'bold'
  },
  botao:{
    backgroundColor:'#0A3B87',
    width:250,
    height:50,
    borderRadius:20,
    alignItems:'center',
    padding:15,
    marginBottom:100
  },
  caixa3:{
    alignItems:'center',
    marginTop:40,
  },
  input2:{
    backgroundColor:'#E0EFEF',
    height:50,
    width:350,
    marginBottom:40,
    marginTop:30,
    borderRadius:15,
    textAlign:'center'
  },
  texto:{
    color:'#fff',
    fontWeight:'bold'
  },

});