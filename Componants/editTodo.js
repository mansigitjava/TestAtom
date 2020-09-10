import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function EditTodo({  editHandler, item}) {

  return (
    <TouchableOpacity onPress={() => editHandler(item.text)}>
    <View>
      <Button color='powderblue' onPress={() => editHandler(text)} title='add todo' />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
