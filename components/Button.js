import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const ButtonBtn = ({addTask}) => (
  <Button icon="send" mode="contained" style={styles.btn} compact="true" onPress={addTask}>
   
  </Button>
);

const styles = StyleSheet.create({
    btn:{
        // marginTop:40 ,
        // marginBottom:10 ,
        backgroundColor:'#000',
        marginLeft:10,
        marginRight:10,
    }
})

export default ButtonBtn;