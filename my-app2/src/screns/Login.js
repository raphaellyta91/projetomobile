
import { View, TextInput, Button, ImageBackground } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cadastro() {
  return (
    <SafeAreaView>

      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPv1lGhNEJJsiJaKeSlSvzE2Gzjcx8AR6Y0q52NhYL3zGZ8VmbWAn_lA&s=10',
        }}
      >

        <View>

          <TextInput
            placeholder="Digite seu Login"
          />

          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <Button
            title="Cadastrar"
            onPress={() => alert('Cadastro enviado!')}
          />

        </View>

      </ImageBackground>

    </SafeAreaView>
  );
}

