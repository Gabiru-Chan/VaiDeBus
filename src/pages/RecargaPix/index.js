import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

 

export default function RecargaPix() {
    const navegar = useNavigation()
    
  return (
    <View style={styles.container}>
      <View style={styles.heard}>
        <TouchableOpacity onPress={()=>{navegar.navigate('Recarga')}}>
      <AntDesign name="arrowleft" size={35} color="white" 
      style={{marginTop:20,marginBottom:10}} />
    </TouchableOpacity>
      
      <Text style={styles.textoheard}>Recarregar com Pix</Text>
      </View>
      <View style={styles.feed}>
      <Text style={styles.textofeed}>vaidebusaorecargacompix123444555</Text>
      <View style={styles.qrcode}>
      </View>
         
        <View style={styles.informacoes}>
        <Text>1- copie o link </Text>
        <Text>2- entre no seu banco</Text>
        <Text>3- cole o link e faça a transferência</Text>
              
        </View>

        </View>
      
     
      <StatusBar style="auto"
      backgroundColor='#0688ab' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },

  heard:{
    backgroundColor:'#0093BB',
    height:150,
   flexDirection:'column',
   pedding:10,
   borderBottomStartRadius:20,
   borderBottomEndRadius:20, 
  },

  textoheard:{
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop:20,
    marginStart:10
  },
  feed:{
    flex:1,
    alignItems:'center',
  },
 textofeed:{
  backgroundColor:'#DDDDDD',
  marginTop:25,
  fontSize:18,
  borderRadius:5
 },

qrcode:{
  backgroundColor:'#AEE5F6',
  padding:120,
  marginTop:20,
  borderRadius:10,
},


informacoes:{
  marginTop:30,
  } 
});