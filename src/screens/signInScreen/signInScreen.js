import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button
} from 'react-native';
import {validateEmail} from '../../utils/validations';
import {LOGIN_MUTATION} from '../../graphql/mutation/users';
import { useMutation, gql } from '@apollo/client';


export default function LoginForm(props) {
  const {changeForm, isLoggeded} = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  const [loginData, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else {
      loginData({
        variables: {
          email: formData.email ,
          password: formData.password
        },
      });
    }
    setFormError(errors);
  };

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };

  return (
    <>
        
          <TextInput
            style={[styles.input, formError.email && styles.error]}
            placeholder="Email"
            placeholderTextColor="#969696"
            onChange={(e) => onChange(e, 'email')}
          />
          <TextInput
            style={[styles.input, formError.password && styles.error]}
            placeholder="Password"
            placeholderTextColor="#969696"
            secureTextEntry={true}
            onChange={(e) => onChange(e, 'password')}
          />
        <TouchableOpacity onPress={login} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.register}>
          <TouchableOpacity onPress={changeForm}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      
    </>
  );
}

function defaultValue() {
  return {
    email: '',
    password: '',
  };
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerScreen:{
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  register: {
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
    alignItems: 'center'
  },
  error: {
    borderColor: '#940c0c',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});