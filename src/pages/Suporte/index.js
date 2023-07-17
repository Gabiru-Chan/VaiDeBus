
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform,ScrollView,Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Suporte() {
    const navegar = useNavigation()
    function voltar() {
        navegar.navigate('Principal')
    }
    Keyboard.dismiss()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView >
            <View style={estilos.container}>

                <View style={estilos.header}>

                <TouchableOpacity onPress={voltar}>
                <AntDesign name="arrowleft" size={35} color="#fff" />
                </TouchableOpacity>


                <Text style={estilos.headertexto}> Suporte </Text>
                </View>

                <View style={estilos.formulario}>
                    <TextInput style={estilos.formularioTexto}
                    placeholder='Nome (OBRIGATORIO)'
                    />

                    <TextInput style={estilos.formularioTexto}
                    placeholder='Nome (OBRIGATORIO)'
                    />
                </View>
                <View style={estilos.comentarios}>
                    <View style={estilos.comentariosForma}>
                        <Text style={estilos.comnetarioTexto}>Tipo de Relato:</Text>
                        <TouchableOpacity style={estilos.botao}>
                        <Entypo name="triangle-down" size={40} color="black" />
                        </TouchableOpacity>
                                 
                    </View>

                    <View style={estilos.comentariosForma}>
                        <Text style={estilos.comnetarioTexto}>Assunto:</Text>
                        <TouchableOpacity style={estilos.botao}>
                        <Entypo name="triangle-down" size={40} color="black" />
                        </TouchableOpacity>
                                 
                    </View >
                    <View style={estilos.comentario2}>
                    <TextInput
                    style={estilos.reposta}
                    placeholder='...'
                    />
                    </View>
                    
                </View>

            </View>
        </KeyboardAvoidingView>
        </ScrollView>


    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },

    header: {
        backgroundColor: '#0093bb',
        height: 150,
        borderBottomEndRadius: 20,
        borderBottomStartRadius:20,
        padding:10
    },
    headertexto:{
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',

         marginTop: 25,
    },
    formulario:{
        padding:20,
        margin:5,
        marginBotton:10
    },
    formularioTexto:{
        backgroundColor:'#E0EFEF',
        width:350,
        height:60,
        borderRadius:10,
        marginTop:20

    },
    comentarios:{
        height:480,
        marginTop:70
    },
    botao:{
        width:180,
        height:50,
        backgroundColor:'#E0EFEF',
        borderRadius:2
    },
    comentariosForma:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:15,
        marginTop:10,

    },
    comnetarioTexto:{
        fontSize:18,
    },
    reposta:{
        height:60,
        width:360,
        backgroundColor:'#E0EFEF',
        padding:15,
        fontSize:15
        
    },
    comentario2:{
        alignItems:'center',
        marginTop:50

    },
});