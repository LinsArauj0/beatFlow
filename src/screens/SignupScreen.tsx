// src/components/SignupForm.tsx

import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Formik } from 'formik';
import { CustomButton } from '@src/components/CustomButton';
import { CustomInput } from '@src/components/CustomInput';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/routes/types';  // Importar os tipos do seu navegador

const SignupScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignup = (values: { name: string; email: string; password: string; telefone: string }) => {
    // Sua lógica de criação de conta aqui
    console.log('Formulário submetido:', values);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' , telefone: '' }}
      onSubmit={handleSignup}
      validate={values => {
        const errors: any = {};
        if (!values.name) {
          errors.name = 'Campo obrigatório';
        }
        if (!values.email) {
          errors.email = 'Campo obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Endereço de email inválido';
        }
        if (!values.password) {
          errors.password = 'Campo obrigatório';
        }
        if (!values.telefone) {
            errors.telefone = 'Campo obrigatório';
        }
        return errors;
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua conta</Text>
          <CustomInput
            label="Nome"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            placeholder="Digite seu nome"
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
          <CustomInput
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          <CustomInput
            label="Senha"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Digite sua senha"
            secureTextEntry
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
          <CustomInput
            label="Telefone"
            value={values.telefone}
            onChangeText={handleChange('telefone')}
            onBlur={handleBlur('telefone')}
            placeholder="Digite seu telefone"
            secureTextEntry
          />
          {errors.telefone && <Text style={styles.error}>{errors.telefone}</Text>}
          <CustomButton title="Criar Conta" onPress={() => navigation.navigate('Login')}/>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#242723'
  },
  error: {
    color: 'red',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
