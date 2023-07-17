import { StyleSheet, Text, View,StatusBar,TouchableOpacity,Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Card() {
    const navegar = useNavigation()

  return (
    <ScrollView>
    <View style={estilos.container}>
      <View style={estilos.header}>
      <TouchableOpacity style={{marginTop:10}} onPress={()=>{navegar.navigate('Principal')}}>
                <AntDesign name="arrowleft" size={35} color="#fff" />
      </TouchableOpacity>
        <Text style={estilos.headerText}>Carteirinha Digital</Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={estilos.Texto}>Ola, Usuario</Text>
        <Image
        style={{width:300,height:500, marginTop:20,}}
        source={require('../../Imagem/card.jpeg')}
        />
      </View>
      <StatusBar/>
    </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    height:900,
    backgroundColor: '#E1F0F5',
  },
  header:{
    backgroundColor:'#0093BB',
    height:150,
    borderBottomStartRadius:20,
    borderBottomEndRadius:20,
    padding:5
  },
  headerText:{
    color:'#fff',
    fontSize:25,
    marginTop:25,
    fontWeight:'bold'
  },
  Texto:{
    fontSize:25,
    fontWeight:'bold',
    color:'#1A456D',
    marginTop:20,
  },
});