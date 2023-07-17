import React from 'react';
import { View,Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {

  const navegar = useNavigation()
  function voltar(){
    navegar.navigate('Ident')
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={voltar} style={{marginTop:15, marginLeft:5}}>
                <AntDesign name="arrowleft" size={35} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.textoheader}>IDENTIFICAÇÃO</Text>
    </View>
  );
};

const Dados = () => {
  return (
    <View style={styles.dados}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.estilodostextos}>ALTERAR NOME:</Text>
        <TextInput style={styles.inserirtextos}></TextInput>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={styles.estilodostextos}>ALTERAR CPF:</Text>
        <TextInput style={styles.inserirtextos}></TextInput>
      </View >
      <View style={{alignItems:'center'}}>
        <Text style={styles.estilodostextos}>ALTERAR Nº CARTÃO:</Text>
        <TextInput style={styles.inserirtextos}></TextInput>
      </View>
    </View>
  );
};

const BotaoAzul = () => {
  return (
    <View style={{ alignItems: 'center' }}>
       <TouchableOpacity style={styles.botãoazul}>
          <Text style={styles.textobotaoazul}>SALVAR ALTERAÇÕES</Text>
      </TouchableOpacity>
    </View>
  );
};

const Identificar = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Dados />
      <BotaoAzul />
      <StatusBar backgroundColor={'#0F7793'}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems:'center'
    
  },
  header: {
    backgroundColor: '#0093BB',
    width: 415,
    height: 150,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
  },
  textoheader: {
    marginTop:20,
    marginLeft: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20
  },
  dados: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 20,
  
    
  },
  estilodostextos: {
    fontSize: 15,
    color: '#817F7F',
    marginBottom: 50,
    
  },
  botãoazul: {
    backgroundColor: '#0A3B87',
    width: 292,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 180,
    marginTop: 20,
    
  },
  textobotaoazul: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inserirtextos: {
    marginBottom: 30,
    fontSize: 10,
    borderRadius: 30,
    padding: 10,
    width: 303,
    height: 41,
    backgroundColor: '#DEF9F9',
    borderWidth: 1,
    borderColor:'#000000'
    
  }
});

export default Identificar;