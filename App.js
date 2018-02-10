import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Crm from './app/components/Crm';


export default class App extends React.Component {
  render() {
    return (
      <Crm/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
