import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
  ScrollView
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Cadastro() {
  return (
      <SafeAreaProvider style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPv1lGhNEJJsiJaKeSlSvzE2Gzjcx8AR6Y0q52NhYL3zGZ8VmbWAn_lA&s=10'
        }}
        style={styles.background}
      >

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.fundo}>

            {/* TÍTULO */}
            <Text>
              Cadastro
            </Text>

            {/* CAMPO CADASTRO */}
            <TextInput
              placeholder="Digite seu nome: "
            />

            {/* CAMPO TELEFONE */}
            <TextInput
              placeholder="Digite seu Telefone: "
            />

            {/* CAMPO EMAIL */}
            <TextInput
              placeholder="Digite seu e-mail: "
            />

            {/* CAMPO ENDEREÇO */}
            <TextInput
              placeholder="Informe seu Endereço: "
            />

            {/* CAMPO DATA DE NASCIMENTO */}
            <TextInput
              placeholder="Data de nascimento: DD/MM/AAAA"
              keyboardType="numeric"
              maxLength={10}
            />

            {/* CAMPO CPF */}
            <TextInput
              placeholder="Informe seu CPF: "
            />

            {/* CAMPO SENHA */}
            <TextInput
              placeholder="Digite sua Senha: "
            />

            {/* BOTÃO */}
            <Button
              title="Entrar"
              onPress={() => alert('Cadastro enviado!')}
            />

          </View>

        </ScrollView>

      </ImageBackground>
</SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
  },

  fundo: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});