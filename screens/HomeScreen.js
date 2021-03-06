
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import Header from '../Componants/header' ;
import TodoItem from '../Componants/todoItem' ;
import AddTodo from '../Componants/addTodo' ;


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (item) => {

        setText(item);



  };

  const submitHandler = (text, type) => {
    if(text.length > 3){
      setText('');
      if(type == 'new'){
        setTodos(prevTodos => {
          return [
            { text, key: Math.random().toString() },
            ...prevTodos
          ];
        });
      }else{
        setTodos(prevTodos => {
          console.log(Todos);
          return [
            ...prevTodos
          ];
        });
      }
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <ScrollView>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>

        </View>
          </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
