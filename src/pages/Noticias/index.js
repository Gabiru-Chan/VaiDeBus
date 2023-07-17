import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Noticias() {
    const navegar = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.heard}>
      <AntDesign name="arrowleft" size={35} color="white" 
      onPress={()=>{navegar.navigate('Config')}}
      style={{marginTop:10,marginBottom:20}}
    />
        <Text style={styles.textoheard}>Notícias</Text>
      </View>

      <ScrollView style={styles.feed}>
        <View style={styles.cartao}>
       <View style={styles.info}>
        
        <Text style={styles.texto1}> Sinetram informa:</Text>
        <Text style={styles.texto1}> Greve dos </Text>
        <Text style={styles.texto1}> trabalhadores do</Text>
        <Text style={styles.texto1}> Transporte publico</Text>
        
        
       </View>
       <Image
         source={require('../../Imagem/onibus.jpeg')}
         style={{width:148,height:148,}}
        />
        </View>

        <View style={styles.cartao}>
        
        <View style={styles.info}>
        <Text style={styles.texto1}> Sinetram informa:</Text>
        <Text style={styles.texto1}> Greve dos </Text>
        <Text style={styles.texto1}> trabalhadores do</Text>
        <Text style={styles.texto1}> Transporte publico</Text>
        
        
       </View>
       <Image
         source={require('../../Imagem/onibus.jpeg')}
         style={{width:148,height:148}}
        />
        </View>

        <View style={styles.cartao}>
        <View style={styles.info}>
        <Text style={styles.texto1}> Sinetram informa:</Text>
        <Text style={styles.texto1}> Greve dos </Text>
        <Text style={styles.texto1}> trabalhadores do</Text>
        <Text style={styles.texto1}> Transporte publico</Text>

       </View>
       <Image
         source={require('../../Imagem/onibus.jpeg')}
         style={{width:148,height:148}}
        />
        </View>

        <View style={styles.cartao}>
       
        <View style={styles.info}>
        <Text style={styles.texto1}> Sinetram informa:</Text>
        <Text style={styles.texto1}> Greve dos </Text>
        <Text style={styles.texto1}> trabalhadores do</Text>
        <Text style={styles.texto1}> Transporte publico</Text>
        
       </View>
       <Image
         source={require('../../Imagem/onibus.jpeg')}
         style={{width:148,height:148}}
        />
        </View>

      </ScrollView>
      <StatusBar backgroundColor='#0688ab' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heard: {
    backgroundColor:'#0093BB',
    height:150,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    padding:5,
   
  },
  textoheard: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop:20,
   
  },
  feed: {
    flex: 1,
    backgroundColor:'#fff'
    
  },
  cartao:{
    backgroundColor:'#AEE5F6',
   margin:20,
    borderRadius:5, 
   justifyContent:'space-between',
   alignItems:'center',
   flexDirection:'row',
   padding:10
},

  texto1:{
    fontSize:17,
    fontWeight:'bold',
    color:'#0A3B87',
    
  }
  
});