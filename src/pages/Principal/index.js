
import { StyleSheet, Text, TouchableOpacity,View,StatusBar }from 'react-native';
import { Entypo,MaterialIcons,MaterialCommunityIcons,AntDesign,FontAwesome,Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';


  export default function Principal() {
    const navegar=useNavigation()

    async function logout(){
      await firebase.auth().signOut();
  
      alert('Deslogado com sucesso!');
      navegar.navigate('Login');
    }   
    const [textValue, setTextValue] = useState(<MaterialCommunityIcons name="dots-horizontal" size={40} color="#fff" />);

    const handlePress = () => {
      setTextValue('0,00');
      setEye(<Entypo name="eye-with-line" size={24} color="#fff" onPress={retorno}/>)
    };
    const [eye,setEye] = useState(<Feather name="eye" size={30} color="#fff"/>)
    
    function retorno(){
      setEye(<Feather name="eye" size={24} color="#fff"/>);
      setTextValue(<MaterialCommunityIcons name="dots-horizontal" size={40} color="#fff" />);
    }

  return (
      <View style={estilos.container}>
      <View style={estilos.header}>
        <View>
            <TouchableOpacity onPress={logout}>
                <AntDesign name="arrowleft" size={35} color="#fff" />
                </TouchableOpacity>

            <Text style={estilos.headerTextEstilo}>Ola, seja bem-vindo</Text>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
            
            <Text style={{fontSize:30,color:'#fff',fontWeight:'bold', marginRight:5}}>{textValue}</Text>
            
            <TouchableOpacity onPress={handlePress}>
            <Text>{eye}</Text>
            </TouchableOpacity>
            
            </View>
        </View>
        <View>
            <TouchableOpacity onPress={()=>{navegar.navigate('Config')}}>
            <FontAwesome name="gear" size={45} color="#fff" />
            </TouchableOpacity>
        </View>

     


      </View >
   
      <View style={estilos.funcoes}>
          <TouchableOpacity style={estilos.input} onPress={()=>{navegar.navigate('Historico')}}>
          <Entypo name="back-in-time" size={80} color="#FFFFFF" />
          <Text style={estilos.TextoInput}>Historico de Passagem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.input} onPress={()=>{ navegar.navigate('Card')}}>
          <Feather name="credit-card" size={75} color="#FFFFFF" />
          <Text style={estilos.TextoInput}>Carteirinha</Text>
          <Text style={estilos.TextoInput}>Digital</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.input} onPress={()=>{navegar.navigate('Recarga')}}>
          <MaterialIcons name="attach-money" size={65} color="#FFFFFF" />
          <Text style={estilos.TextoInput}>Recarregue</Text>
          <Text style={estilos.TextoInput}>com Pix</Text>
          </TouchableOpacity>
      </View>
      <View style={estilos.funcoes}>
          <TouchableOpacity style={estilos.input} onPress={()=>{navegar.navigate('Suporte')}}>
          <FontAwesome name="group" size={70} color="#FFFFFF" />
          <Text style={estilos.TextoInput}>Suporte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.input} onPress={()=>{ navegar.navigate('Ident')}}>
          <MaterialCommunityIcons name="account-box-outline" size={80} color="#FFFFFF" />
          <Text style={estilos.TextoInput}>Identificação</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.input} onPress={()=>{navegar.navigate('Via2')}}>
          <Entypo name="v-card" size={80} color="#FFFFFF" />
          <Text style={estilos.TextoInput}>Solicitar 2ªVia</Text>
          </TouchableOpacity>
      </View>

      <StatusBar backgroundColor={'#0F7793'}/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    height:150,
    backgroundColor:'#0093BB',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },
  header:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
  },
  headerText:{
    width:150,
    height:50,
    marginTop:5
  },
  headerTextEstilo:{
    fontSize:26,
    color:'#FFFFFF',
    fontWeight:'400',
    fontWeight:'bold',
    marginTop:5

  },
  funcoes:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    marginTop:20,
    alignItems:'center'
  },
  input:{
    backgroundColor:'#1A456D',
    width:120,
    height:160,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignText:'center',
  },
  TextoInput:{
    color:'#FFFFFF',
    fontSize:15,
  },
});