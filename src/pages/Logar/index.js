import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import {Feather, Entypo} from '@expo/vector-icons';

export default function Logar() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('Insira seu email');
  const [password, setPassword] = useState('Insira sua senha');
  const [secure, setSecure] = useState(true)
  const [eye,setEye] = useState(<Feather name="eye" size={30} color="#000" style={{marginTop:5}}/>)

  function changeText(){
    setSecure(false)
    setEye(<Entypo name="eye-with-line" size={30} color="#000" style={{marginTop:5}} onPress={retorno}/>)
  }
  function retorno(){
    setSecure(true)
    setEye(<Feather name="eye" size={30} color="#000" style={{marginTop:5}}/>)
  }
  

  async function logar() {
    if (email === '' || password === '') {
      alert('Informe o usuário e a senha');
      return;
    }
    else{
      if(email == 'teste' && password == 'teste'){
        navigation.navigate('Principal')
        alert('logado no teste')
      }
    }

    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        navigation.navigate('Principal', { user: value.user.email });
      })
      .catch((error) => {
        alert('Ops algo deu errado!');
        return;
      });

      setEmail('');
      setPassword('');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.principal}>
            <View style={styles.form}>
              <View style={styles.logo}>
                <Image source={require('../../image/logo.png')} />
              </View>
              <View style={{ marginTop: 25 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={(texto) => setEmail(texto)}
                  placeholder='Insira seu email'
                />
                <View style={{flexDirection:'row'}}>
                <TextInput
                style={styles.input2}
                  onChangeText={(texto) => setPassword(texto)}
                  secureTextEntry={secure}
                  placeholder='Insira sua senha'
                />
                <TouchableOpacity style={{marginTop:30, marginLeft:5}} onPress={changeText}>{eye}</TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.recuperarsenha} onPress={() => navigation.navigate('RecuperarSenha')}>
                  <Text style={styles.recuperarsenha}>Esqueceu seus dados de login?</Text>
                  <Text style={styles.recuperarsenha2}>Obtenha ajuda para entrar.</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.botao} onPress={logar}>
                <Text style={styles.textobotao}>Entrar</Text>
              </TouchableOpacity>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.botaoCadastrese} onPress={() => navigation.navigate('Cadastro')}>
                  <Text style={styles.textBotaoCadastrese}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <StatusBar backgroundColor={'#0F7793'} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0093BB',
    alignItems: 'center',
    height: 900
  },
  logo: {
    justifyContent: 'center',
    marginTop: 350
  },
  principal: {
    padding: 10,
    height: 500,
    justifyContent: 'space-around'
  },
  input: {
    padding: 10,
    width: 337,
    height: 62,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    textAlign: 'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  input2: {
    padding: 10,
    width: 320,
    height: 62,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#0A3B87',
    padding: 12,
    marginTop: 40,
    borderRadius: 30,
    width: 202,
    height: 60
  },
  textobotao: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  },
  actions: {
    alignItems: 'center',
    marginTop: 10
  },
  botaoCadastrese: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 30,
    width: 235,
    marginTop: 25
  },
  textBotaoCadastrese: {
    color: '#0A3B87',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  form: {
    alignItems: 'center'
  },
  recuperarsenha: {
    fontSize: 12,
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
    color: '#424242'
  },
  recuperarsenha2: {
    fontSize: 12,
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
    fontWeight: 'bold'
  }
});