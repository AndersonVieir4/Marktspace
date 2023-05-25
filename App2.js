import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logoImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>markspace</Text>
          <Text style={styles.subtitle}>Seu espaço de compra e venda</Text>
          <Text style={styles.des}>Acesse sua conta</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
        />

        {/* Botão de login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Botão "Não tem acesso à conta?" */}
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Ainda não tem acesso ?</Text>
      </TouchableOpacity>

      {/* Novo botão */}
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logoImage: {
    width: 80,
    height: 60,
    marginLeft: 70,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    marginTop: 20,
    color: 'black',
    fontSize: 18,
  },
  subtitle: {
    color: 'gray',
    fontSize: 16,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: '#5574b7',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountText: {
    color: 'gray',
    fontSize: 16,
  },
  bottomButton: {
    marginTop: 40,
    backgroundColor: '#acacac',
    paddingVertical: 10,
    paddingHorizontal: 77,
    borderRadius: 5,
    color: 'black',
  },
  bottomButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  des: {
    color: '#747474',
    fontSize: 15,
  }
});

export default LoginScreen;
