import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import SignInScreen from '../signInScreen/signInScreen';
import RegisterUserScreen from '../registerUserScreen/registerUserScreen';


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const changeForm = () => {
    setIsLogin(!isLogin);
  };

  const isLoggeded = () => {
    setIsLogin(isLogged);
  };
  return (
    <View style={styles.view}>
      {isLogged ?(
        <Text>
          HOLA
        </Text>
      ) :(
        <View>
            <View >
              <Image style={[styles.logo]}  source={require('../../assets/logo.png')} />
            </View>
        </View>
        )}{isLogin?(
          <SignInScreen changeForm={changeForm} />
        ):(
          <RegisterUserScreen changeForm={changeForm} isLoggeded={isLoggeded} />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 200,
  },
  
});