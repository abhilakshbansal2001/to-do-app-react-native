import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Textinput = ({text,setText}) => {


  return (
    <TextInput
    style={styles.input}
      label="Task"
      value={text}
      onChangeText={text => setText(text)}
      mode='outlined'
    />
  );
};

const styles = StyleSheet.create({
    input:{
        marginTop:40 ,
        marginBottom:10 ,
        marginLeft:10,
        marginRight:10,
    }
})


export default Textinput;