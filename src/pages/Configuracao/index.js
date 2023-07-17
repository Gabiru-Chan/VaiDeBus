import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { AntDesign, Feather, FontAwesome5, Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Config() {
    const navegar = useNavigation()
    function voltar(){
        navegar.navigate('Principal')
    }
    function contatar(){
        navegar.navigate('Contato')
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={voltar}>
                <AntDesign name="arrowleft" size={35} color="#fff" style={{marginTop:30}}/>
                </TouchableOpacity>

        <Text style={styles.textoheader}>CONFIGURAÇÕES</Text>
      </View>
      <View style={styles.principal}>
        

        <TouchableOpacity style={styles.items} onPress={contatar}>
          <Text style={styles.textoitems}>Fale conosco</Text>
          <Feather name="phone-call" size={24} color="#0A3B87"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items} onPress={()=>{navegar.navigate('Noticias')}}>
          <Text style={styles.textoitems}>Noticias</Text>
          <FontAwesome5 name="newspaper" size={24} color="#0A3B87" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.items} onPress={()=>{navegar.navigate('Tutorial')}}>
          <Text style={styles.textoitems}>Como utilizar</Text>
          <Ionicons name="help" size={24} color="#0A3B87"   />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.items} onPress={()=>{navegar.navigate('Block')}}>
          <Text style={styles.textoitems}>Bloquear Cartão</Text>
         <EvilIcons name="credit-card" size={40} color="#0A3B87" />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    backgroundColor: '#0093BB',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 5,
  },
  textoheader: {
    fontSize: 20,
    marginTop: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  principal: {
    marginTop: 40,
    alignItems:'center',
  },
  items: {
    backgroundColor: '#82D4EE',
    width: 296,
    height: 60,
    borderRadius: 80,
    marginBottom: 30,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textoitems: {
    color: '#0A3B87',
    fontSize: 20,
    fontWeight: 'bold',
 
  },
});