import { StyleSheet, Text, View, StatusBar,  TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';


export default function Bloquear() {

  const navegar = useNavigation()
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>{navegar.navigate('Block')}}>
                <AntDesign name="arrowleft" size={35} color="#fff"/>
                </TouchableOpacity>
        <Text style={styles.textoheader}>BLOQUEAR CARTÃO</Text>
      </View>

      <View style={styles.principal}>
        <View style={styles.items}>
          <TextInput style={styles.textoitems} placeholder='Insira sua senha....' />
        </View>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textobotao}>DESBLOQUEAR</Text>
        </TouchableOpacity>
        

      </View>
      

      <StatusBar />
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
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 5,
  },
  textoheader: {
    fontSize: 20,
    marginTop: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  principal: {
    marginTop: 200,
    marginLeft: -20,
    alignItems: 'center',
    justifyContent: 'center'

  },
  items: {
    backgroundColor: '#FFFFFF',
    width: 296,
    height: 65,
    borderRadius: 90,
    marginBottom: 70,
    padding: 3,
    borderWidth: 2,
    borderColor: '#0A3B87',
    justifyContent: 'center',
    alignItems: 'center'

  },

  botao: {
    width: 225,
    height: 52,
    backgroundColor: '#0A3B87',
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoitems: {
    color: '#000000',
    fontSize: 20,
    marginLeft: 10,
  
  },
  textobotao: {
    color: '#FFFFFF',
    fontWeight: 600


  }
});