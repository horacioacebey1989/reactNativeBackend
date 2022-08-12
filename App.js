import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native'; 
import Auth from './src/screens/authScreen/authScreen'
import { ApolloProvider } from '@apollo/client';
import apolloClient from './src/utils/apollo';
export default function App() {
  return (
    
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        <ApolloProvider client={apolloClient()}>
          <Auth />
        </ApolloProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});