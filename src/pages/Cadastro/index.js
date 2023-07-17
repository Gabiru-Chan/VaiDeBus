import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf,setCpf] = useState('');
  const [numero,setNumero] = useState('')
  const navigation = useNavigation();

  async function cadastrar() {
    if (email === '' || password === '' || name === '') {
      alert('Informe todos os dados..');
      return;
    }

    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        firebase.database().ref('Usuario').child(value.user.uid).set({
          CPF:cpf,
          Numero:numero,
          nome:name

        });
        

        alert('Usuario criado com sucesso!');
        setName('');
        setEmail('');
        setPassword('');
        navigation.navigate('Principal', { user: value.user.email });
      })
      .catch((error) => {
        var deuErro = false;

        if (error.code === 'auth/weak-password') {
          deuErro = true;
          alert('Sua senha deve ter pelo menos 6 caracteres');
          return;
        }
        if (error.code === 'auth/invalid-email') {
          deuErro = true;
          alert('Email invalido');
          return;
        }
        if (error.code === 'auth/email-already-in-use') {
          deuErro = true;
          alert('Já existe um usuário com este e-mail');
          return;
        }

        if (!deuErro) {
          console.log(error.code);
          alert('Ops algo deu errado!');
          return;
        }
      });


    setEmail('');
    setPassword('');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        
        <View style={estilos.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <AntDesign name="arrowleft" size={35} color="#fff" style={{ marginTop: 10 }} />
          </TouchableOpacity>

          <View style={estilos.formatacao}>
            <View style={estilos.cadastro}>
              <Text style={estilos.textoCadastro}>Faça seu Cadastro</Text>
            </View>
            <View>

              <View>
                <TextInput
                  style={estilos.input}
                  onChangeText={(nome) => setName(nome)}
                  placeholder="Nome"
                />
              </View>

              <View>
                <TextInput
                  style={estilos.input}
                  onChangeText={(texto) => setNumero(texto)}
                  placeholder="nº do cartão"
                />
              </View>

              <View>
                <TextInput
                  style={estilos.input}
                  onChangeText={(texto) => setCpf(texto)}
                  placeholder="CPF"
                />
              </View>

              <View>
                <TextInput
                  style={estilos.input}
                  onChangeText={(texto) => setEmail(texto)}
                  placeholder="Email"
                />
              </View>

              <View>
                <TextInput
                  style={estilos.input}
                  onChangeText={(texto) => setPassword(texto)}
                  placeholder="Senha"
                />
              </View>
              
              <View style={estilos.botao}>
                <TouchableOpacity style={estilos.inputC} onPress={cadastrar}>
                  <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#0093BB',
    height: 900
  },
  input: {
    backgroundColor: '#FFF',
    width: 300,
    height: 40,
    borderRadius: 50,
    marginTop: 20,
    padding: 10,
    textAlign: 'center'
  },
  cadastro: {
    width: 400,
    height: 60,
    marginEnd: 40,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 40
  },
  textoCadastro: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  inputC: {
    backgroundColor: '#0A3B87',
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 100
  },
  botao: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  formatacao: {
    marginTop: 130,
    alignItems: 'center'
  }
});