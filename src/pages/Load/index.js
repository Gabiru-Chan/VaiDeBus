import {View, StyleSheet,Image } from 'react-native';

export default function LOADER() {
  return (
    <View style={styles.container}>

         <Image source={require('../../Imagem/logo.png')}/>


    </View>
  );
}

const styles = StyleSheet.create({
   container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1A456D',
    alignItems:'center',
    padding: 8,
  },
  logo: {
    justifyContent: 'center',
    marginTop:350,
  },
});