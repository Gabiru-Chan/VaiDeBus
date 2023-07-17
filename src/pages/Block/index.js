import { StyleSheet, Text, View, StatusBar, Image , Touchable, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';

export default function BLock() {
    const navegar = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>{navegar.navigate('Config')}}>
                <AntDesign name="arrowleft" size={35} color="#fff"/>
                </TouchableOpacity>
        <Text style={styles.textoheader}>BLOQUEIO</Text>
      </View>
      <View style={styles.principal}>
        <TouchableOpacity style={styles.item} onPress={()=>{navegar.navigate('Bloquear')}}>
          <Text style={styles.textoitems}>BLOQUEAR CARTÃO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={()=>{navegar.navigate('Desbloquear')}}>
          <Text style={styles.textoitems}>DESBLOQUEAR CARTÃO</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
<StatusBar/>
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header: {
    height: 150,
    backgroundColor: '#0093BB',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
  },
  textoheader: {
    fontSize: 20,
    marginTop: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  principal: {
    marginTop: 40,
    alignItems:'center'
      
  },
  item: {
    backgroundColor: '#fff',
    width: 315,
    height: 70,
    borderRadius: 80,
    marginBottom: 70,
    padding: 5,
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#0A3B87'   
   
  },
 
  textoitems: {
    color: '#0A3B87',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10
  },
});