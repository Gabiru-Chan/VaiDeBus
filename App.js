import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react'

//Importando Navegação
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importando as páginas
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Principal from './src/pages/Principal';
import RecuperarSenha from './src/pages/RecuperarSenha'
import Historico from './src/pages/Historico';
import Suporte from './src/pages/Suporte';
import Recarga from './src/pages/Recarga';
import Identificar from './src/pages/Identificar';
import Card from './src/pages/DigCard';
import Transferencia from './src/pages/Transferencia';
import Ident from './src/pages/Identificar1';
import Config from './src/pages/Configuracao';
import Contato from './src/pages/Contato';
import BLock from './src/pages/Block';
import Comprovante from './src/pages/ComprovantePrincipal';
import Noticias from './src/pages/Noticias';
import Bloquear from './src/pages/Bloquear';
import Desbloquear from './src/pages/Desbloquear';
import Tutorial from './src/pages/Tutorial'
import RecargaPix from './src/pages/RecargaPix';
import Via2 from './src/pages/Via2';
import CameraScreen from './src/pages/Camera';


const Stake = createNativeStackNavigator();

export default function App() {

  return (


    <NavigationContainer>
            <Stake.Navigator>

                <Stake.Screen 
                    name="Login" 
                    component={Login}
                    options={{
                      headerShown:false,
              
                    }}
                />
                <Stake.Screen
                name="RecuperarSenha"
                component={RecuperarSenha}
                options={{
                  headerShown:false
                }}
                />
                <Stake.Screen 
                    name="Cadastro" 
                    component={Cadastro}
                    options={{
                      headerShown:false
                    }}
                />
                <Stake.Screen
                  name="Principal"
                  component={Principal}
                  options={{
                    headerShown:false
                  }}
                />
                <Stake.Screen
                name="Historico"
                component={Historico}
                options={{
                  headerShown:false
                }}
                />
                <Stake.Screen
                name="Suporte"
                component={Suporte}
                options={{
                  headerShown:false
                }}
                />
                <Stake.Screen
                name="Recarga"
                component={Recarga}
                options={{
                  headerShown:false
                }}
                />
                <Stake.Screen
                name='Transferencia'
                component={Transferencia}
                options={{
                  headerShown:false
                }}
                />
                <Stake.Screen
                name="Ident"
                component={Ident}
                options={{
                  headerShown:false
                }}
                />
               <Stake.Screen
                 name="Identificar"
                 component={Identificar}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name="Card"
                 component={Card}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Config'
                 component={Config}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Contato'
                 component={Contato}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Block'
                 component={BLock}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Comprovante'
                 component={Comprovante}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Noticias'
                 component={Noticias}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Bloquear'
                 component={Bloquear}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Desbloquear'
                 component={Desbloquear}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Tutorial'
                 component={Tutorial}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='RecargaPix'
                 component={RecargaPix}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='Via2'
                 component={Via2}
                 options={{
                  headerShown:false
                 }}
                 />
                 <Stake.Screen
                 name='CameraScreen'
                 component={CameraScreen}
                 options={{
                  headerShown:false
                 }}
                 />
                  
            </Stake.Navigator>
    </NavigationContainer>
  );
}