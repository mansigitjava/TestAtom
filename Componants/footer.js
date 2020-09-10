import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Footer(){
  return(
    <View style = {styles.footer}>
    <Text style = {styles.title}>ToDo Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'powderblue',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
