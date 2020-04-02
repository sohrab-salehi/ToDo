import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <Button title='Add Todo' onPress={() => submitHandler(text)} text='add todo' color='coral' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
})
