import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importando a tela de Login
// Login from './src/screns/Login';
//import Cadastro from './src/screns/Cadastro';
//import Login from './src/screns/Login';
import PerfilUsuario from './src/screns/Perfilusuario'


export default function App() {
  return (
    <SafeAreaProvider style={ {flex: 1}}>
    <View >

      {/* Chamando a tela de Login    */}
      <PerfilUsuario />

      {/* Barra de status do celular */}
      <StatusBar style="auto" />

     
    </View>
    </SafeAreaProvider>
  );
}

