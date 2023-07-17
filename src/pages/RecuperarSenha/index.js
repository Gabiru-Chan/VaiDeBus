import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../FireBaseConnection';
import { useState } from 'react';

export default function RecuperarSenha() {
    const navegar = useNavigation()
    const [email, setEmail] = useState('')

    async function recuperarSenha(){

      await firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert('você receberá um email');
      })
      .catch((error) => {
        alert('Algo deu errado', error.message);
      });
    }

  return (
    <ScrollView>
    <KeyboardAvoidingView>
    <View style={styles.container}>

      <View style={{marginTop:100}}>
        <View style={styles.principal}>
      <FontAwesome5 name="user-alt" size={190} color="#FFFFFF"  />
      </View>
      
        <View style={styles.form}>
          
          <TextInput style={styles.input} 
          onChangeText={(texto)=> setEmail(texto)}
          placeholder='insira seu Email' />
          
         <View style={{marginTop:70}}>
          <TouchableOpacity style={styles.botao} onPress={recuperarSenha}>
            <Text style={styles.textobotao}>Recuperar senha</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navegar.navigate('Login')}}>
            <Text style={styles.textobotao}>voltar</Text>
          </TouchableOpacity>
          </View>
        </View>

        

      </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0093BB',
    height:900,



  },
  
  principal: {
    justifyContent: 'center',
    marginLeft:115,

  },
  input: {
    padding: 10,
    width: 337,
    height: 55,
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    textAlign: 'center',
    marginLeft: 10

  },

  botao: {
    backgroundColor: '#0A3B87',
    padding: 12,
    marginTop: 40,
    marginBottom:30,
    borderRadius: 35,
    width: 200,
    height: 55,

  },

  textobotao: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E1F0F5',

  },
  
  actions: {
    alignItems: 'center',

  },
  
  form:{
     alignItems: 'center',
     marginTop:25
  },
  
});