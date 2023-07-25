import { Text, View, StyleSheet, Image, TouchableOpacity,StatusBar, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection'

export default function Historico() {
  const navegar = useNavigation();
  const [passagens, setPassagens] = useState([]);



  useEffect(()=>{
    buscarPassagensNoBanco();
  }, []);

  async function buscarPassagensNoBanco() {
    await firebase.database().ref('Passagem').on('value', (dados) => {
      setPassagens([]);
      dados.forEach((item) => {
        let passagem = {
          key: item.key,
          data: item.val().Data,
          hora: item.val().Horario,
          onibus: item.val().Onibus,
        }
        setPassagens((passagensExistentes) => [passagem,...passagensExistentes]);
      });
      
    })
  }

     
  return (
    <View style={styles.container}>
      <View style={styles.header}>

      <TouchableOpacity style={{marginTop:10}} onPress={()=>{navegar.navigate('Principal')}}>
                <AntDesign name="arrowleft" size={35} color="#fff" style={{marginBottom:15}}/>
      </TouchableOpacity>
    
        <Text style={styles.Textocabecalho}>
          Extrato de passagens
        </Text>
      </View>
      <View style={styles.principal}>
        <View style={styles.linhas}>
         
          
          <FlatList
          data={passagens}
          renderItem={({item})=><Linha data={item}/>}
          />
          

         
          

          
        </View>
      </View>
      <StatusBar backgroundColor={'#0F7793'}/>
    </View>

    
  );


  function Linha(props){
     return (
      <View>
        <View style={{borderBottomColor:'#000', borderBottomWidth:1,height:120}}>
        <View>
          <Text style={styles.textohoje}>{props.data.data}</Text>
        </View>
      <View style={styles.alinhamentopadrao}>
          <View style={styles.linha}>
            <Text style={styles.linharecente}>
               {props.data.onibus}
            </Text>
          </View>
          <Text style={styles.alinhamentohorario1}>- {props.data.hora}</Text>
        </View>
        </View>
        </View>
     );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  principal: {
    width:320,
    backgroundColor: '#C2EEFC',
    borderRadius:20,
    marginHorizontal:50,


  },
  header: {
    backgroundColor: '#0093BB',
    height: 140,
    marginBottom: 20,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    padding:5


  },
  Textocabecalho: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff'
  },

  linhas: {
    marginTop: 20,

  },

  textohoje: {
    fontSize: 24.4,
    fontWeight: 'bold',
    marginLeft:30,
    marginBottom: 20,

  },

  linharecente: {
    fontSize: 17.4,
    fontWeight: 'bold',
    marginTop: 1,
    flexDirection: 'row',
    color:'#fff'


  },

  caixaontem: {
    alignItems: 'center',
  },
  textoontem: {
    fontSize: 24.4,
    fontWeight: 'bold',
    marginLeft:20,
    marginBottom:20

  },

  alinhamentopadrao: {
    flexDirection: 'row',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',

  },
  alinhamentohorario1: {

    marginLeft: 10,
    fontSize: 20,
    marginBottom:20

  },
  linha:{
    backgroundColor:'#013b87',
    width:88,
    alignItems:'center',
    borderRadius:20,
    marginBottom:20
  },
})