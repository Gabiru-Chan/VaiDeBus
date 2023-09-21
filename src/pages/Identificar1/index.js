import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Ident() {
  const navegar = useNavigation()

  return (
    <View >
      <View style={styles.header}>

      <TouchableOpacity style={{marginTop:0}} onPress={()=>{navegar.navigate('Principal')}}>
                <AntDesign name="arrowleft" size={35} color="#fff" />
                </TouchableOpacity>

        <Text style={styles.textoheader}>IDENTIFICAÇÃO</Text>
      </View>
      <View style={styles.dados}>
        <Text style={styles.textodados}>Nome:</Text>
        <Text style={styles.textodados}>       ****</Text>
        <Text style={styles.textodados}>CPF:</Text>
        <Text style={styles.textodados}>       ****</Text>
        <Text style={styles.textodados}>nº cartão:</Text>
        <Text style={styles.textodados}>        ****</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.botão} onPress={()=>{navegar.navigate('Identificar')}}>
               <Text style={styles.decorartexto}> Alterar dados </Text>
        </TouchableOpacity>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2EAF2',
  },
  header: {
    height: 150,
    backgroundColor: '#0093BB',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    padding:10,
  },
  textoheader: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop:20
  },
  dados: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  textodados: {
    marginBottom: 25,
    fontSize:20
  },
  botão:{
     justifyContent:'center',
     alignItems:'center',
     backgroundColor: '#0A3B87',
     height:62,
     width:300,
     borderRadius:20,
     
  },
   decorartexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#ffffff'
   }
});