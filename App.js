import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { Appbar } from 'react-native-paper';
import  AppBar from './components/AppBar';
import BannerComp from './components/BannerComp';
import Textinput from './components/TextInput';
import Button from './components/Button';
import { Divider } from 'react-native-paper';
import Task from './components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  

  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);


  async function addTask(){
    const id = Math.random().toString(36).substring(10)
    if(text){
      let work = {id,text}
    setTasks(prev => {
      return [...prev,work]
    })
    setText('')
    }
  }
 function remove(id){

    setTasks(prev => {
      return prev.filter((e,ind) => e.id !== id)
    })
    
    
    
    
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(tasks)
      await AsyncStorage.setItem('tasks', jsonValue)
    } catch (e) {
     console.log(e,"<><<><<");
    }
  }


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('tasks')
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
      console.log("<><><>",e);
    }
  }
  
  React.useEffect(() => {
    
    getData().then((d) => {
      setTasks(d)
    })
    
    
  }, [])
  React.useEffect(() => {
    storeData().then(() => {
      console.log("saved",);
    })
  }, [tasks])




  return (
    <>
    <View style={styles.center}>
    <AppBar />

    </View>
    <View >
      <BannerComp />
    </View>
    <View >
      <Textinput text={text} setText={setText} setTasks={setTasks} />
      <Button addTask={addTask} />
    </View>
   
        <ScrollView>
        <Divider />
          <View>
            <Text style={{...styles.center,...styles.heading}}>TASKS:</Text>
          </View>
          <View style={{marginLeft:10,marginRight:10}}>
            <Task tasks={tasks} remove={remove} />
          </View>
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center:{
    textAlign:'center' ,

    paddingLeft: 'auto',
    paddingRight: 'auto',
  }
  ,heading:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:60,
    marginBottom:20,
  }
});
