import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather,MaterialIcons, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {
    const navegar = useNavigation()
    function voltar(){
        navegar.navigate('Config')
    }
  return (
    <View style={styles.container}> 
       <View style={styles.header}> 

       <TouchableOpacity onPress={voltar}>
        <AntDesign name="arrowleft" size={35} color="#fff" style={{marginTop:10}}/>
        </TouchableOpacity>

       <Text style={styles.textoheader}>FALE CONOSCO</Text>
    </View>
    <View style={styles.principal}>
    <TouchableOpacity style={styles.items}>
          <Text style={styles.textoitems}>Telefone</Text>
          <Feather name="phone-call" size={24} color="#0A3B87"  style={{marginLeft:25}}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.textoitems}>E-mail</Text>
          <MaterialIcons name="email" size={24} color="#0A3B87" style={{marginLeft:45}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.textoitems}>Instagram</Text>
          <AntDesign name="instagram" size={24} color="#0A3B87" style={{marginLeft:16}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.textoitems}>Facebook</Text>
         <AntDesign name="facebook-square" size={24} color="#0A3B87"  style={{marginLeft:19}}/>
        </TouchableOpacity>
         <TouchableOpacity style={styles.items}>
          <Text style={styles.textoitems}>Site</Text>
         <Foundation name="web" size={34} color="#0A3B87"  style={{marginLeft:70}} />
        </TouchableOpacity>
        
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
},
header: {
    height: 150,
    backgroundColor: '#0093BB',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 5,  
},
textoheader:{
    fontSize: 20,
    marginTop: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
principal:{
    alignItems: 'center',
    marginTop: 80,
},
items: {
    backgroundColor: '#82D4EE',
    width: 296,
    height: 62,
    borderRadius: 80,
    marginBottom: 30,
    padding: 15,
    flexDirection: 'row',
  },
  textoitems: {
    color: '#0A3B87',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10
  },
})