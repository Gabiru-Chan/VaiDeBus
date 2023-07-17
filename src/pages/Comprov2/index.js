import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Comprov2() {
  const navegar = useNavigation();
  return (
    <View style={estilos.container}>


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={estilos.header}>

        <TouchableOpacity onPress={()=>{navegar.navigate('Transferencia')}}>
        <AntDesign name="arrowleft" size={35} color="#fff" style={{marginTop:30,}}/>
    </TouchableOpacity>

          <Text style={{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop:10,
          }}> COMPROVANTE DE TRANSFERÊNCIA </Text>
        </View>

        <View style={estilos.comprovante}>

          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20,
          }}> NOME:</Text>

          <Text style={{
            marginTop: 5,
            fontSize: 24
          }}>LARISSA B. DA COSTA TELLES</Text>

          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 35,
          }}> CODIGO DO CARTÃO:</Text>
          <Text style={{
            marginTop: 5,
            fontSize: 24
          }}> 00.00.00000000-0</Text>

          <Text style={{
            fontWeight: 'bold',
            fontSize: 19,
            marginTop: 35,
          }}> QUEM RECEBEU:</Text>

          <Text style={{
            marginTop: 9,
            fontSize: 24
          }}>VICTORIA R. ARAÚJO MIRANDA</Text>

          <Text style={{
            fontWeight: 'bold',
            fontSize: 19,
            marginTop: 35,
          }}> CODIGO DO CARTÃO:</Text>

          <Text style={{
            marginTop: 5,
            fontSize: 24
          }}> 00.00.00000000-0</Text>


          <Text style={{
            fontWeight: 'bold',
            fontSize: 19,
            marginTop: 35,
          }}> VALOR DA TRANSFERÊNCIA:</Text>

          <Text style={{
            marginTop: 5,
            fontSize: 24
          }}> R$ 300,00 </Text>


          <Text style={{
            fontWeight: 'bold',
            marginTop: 30
          }}>TRANSFERÊNCIA EFETUADA EM</Text>
          <Text style={{
            fontWeight: 'bold',
          }}>30/12/2023</Text>

        </View>


        <TouchableOpacity style={estilos.compartilhar}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFFF',
            marginTop: 10,
            marginRight: 5
          }}> COMPARTILHAR </Text>

        </TouchableOpacity>

        <StatusBar style="auto"
          backgroundColor='#088CB0' />
      </ScrollView>

    </View>


  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#E1F0F5',
    flex: 1
  },

  header: {
    backgroundColor: '#0093bb',
    height: 150,
    borderRadius: 20,
    padding:5,
  },

  comprovante: {
    height: 650,
    backgroundColor: '#7da2dc',
    marginTop: 40,
    borderRadius: 30,
    marginHorizontal: 25,
    alignItems: 'center'


  },

  compartilhar: {
    height: 50,
    backgroundColor: '#0A3B87',
    borderRadius: 40,
    marginTop: 30,
    marginHorizontal: 90,
    marginBottom: 50,
    alignItems: 'center'

  },

  textoComprovante: {

  }
});