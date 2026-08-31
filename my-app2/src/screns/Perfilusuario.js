import {
  View,
  Text,
  Image,
  Button,
  Linking
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function PerfilUsuario() {
  return (
    <SafeAreaView>
      <View>

        
        <Text>Perfil do Usuário</Text>

        <Text>Nome: João da Silva</Text>

        <Text>E-mail: joao@email.com</Text>

        <Text>Telefone: (84) 99999-9999</Text>

        <Button
          title="Editar Perfil"
          onPress={() => console.log('Editar perfil')}
        />

        <Button
          title="Sair"
          onPress={() => console.log('Sair')}
        />


       <Button
        title="Abrir Google"
        onPress={() => Linking.openURL('https://www.google.com')}
      />



      </View>
    </SafeAreaView>
  );
}