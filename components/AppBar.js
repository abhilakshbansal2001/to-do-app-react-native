import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const AppBar = () => (
    <Appbar.Header style={styles.container} >
       <Appbar.Content titleStyle={{fontSize:23,marginBottom:4,fontWeight:'bold'}} title="Task Manager" subtitle={'~ Abhilaksh Bansal'} />
    </Appbar.Header>
);


const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#000',
    height:75,
    display:"flex",
    justifyContent:'center',
    textAlign:'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

});

export default AppBar;

