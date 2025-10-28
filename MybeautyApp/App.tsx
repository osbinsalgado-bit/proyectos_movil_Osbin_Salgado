import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomInput from './src/components/Custominput';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Nuevo estado para la contraseña
  const isDisabled = email.trim() === '' || password.trim() === '';


  // Funciones de ejemplo para los botones
  const handleLogin = () => {
    console.log('Iniciar sesión presionado:', { email, password });
  };

  const handleRegister = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <Text style={styles.title}>Sign in</Text>

        <CustomInput
          value={email}
          placeholder={'Correo'}
          onChange={setEmail}
          type={'email'}
          required={true}
        />

        <CustomInput
          value={password}
          placeholder={'Contraseña'}
          onChange={setPassword}
          type={'password'}
          required={true}
        />

        <TouchableOpacity
          style={[styles.loginButton, isDisabled && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={isDisabled}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f1eaeaff',
  },

  formcontainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  title: {
    color: '#070707ff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
  },

  loginButton: {
    backgroundColor: '#2e2e42',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  registerButton: {
    backgroundColor: '#e6e6f2',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#2e2e42',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginButtonDisabled: {
    backgroundColor: '#ccc', 
  },

});