import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Importando a tela de Login
// Login from './src/screns/Login';
//import Cadastro from './src/screns/Cadastro';
//import Login from './src/screns/Login';

import Login from './src/screns/Login'
import PerfilUsuario from './src/screns/Perfilusuario'
import AlertaCompromisso from './src/screns/AlertaCompromisso'

const Stack = createStackNavigator()




const appNavegation=()=>{
return(
      <Stack.Navigator>     
        <Stack.Screen    name="Login"    component={Login}     />     
        <Stack.Screen  name="PerfilUsuario"    component={PerfilUsuario}    />
        <Stack.Screen     name="AlertaCompromisso"       component={AlertaCompromisso}     />
      </Stack.Navigator>

)}


export default function App() {
  return (
    <SafeAreaProvider style={ {flex: 1}}>
    <View >
      <NavigationContainer>

        <appNavegation />
      </NavigationContainer>

      {/* Chamando a tela de Login    */}
      <PerfilUsuario />

      {/* Barra de status do celular */}
      <StatusBar style="auto" />

     
    </View>
    </SafeAreaProvider>
  );
}

