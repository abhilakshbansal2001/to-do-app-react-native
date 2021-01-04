import * as React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import { List } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';
// import { mdiBeakerRemove } from '@mdi/js';

const Task = ({tasks,remove}) => (
  <>
    <Text style={{fontWeight:'bold',opacity:0.5,marginBottom:10}}>Pending</Text>

    {
        tasks.map((e,index) => {
            return (
             
                <View style={styles.list} key={index}>
                    <View style={styles.name}>
                    <Image  source={{
                            uri: 'https://e7.pngegg.com/pngimages/253/892/png-clipart-computer-icons-calendar-date-event-table-calendar-text.png',
                        }} style={{
                            width: 30,
                            height: 30,
                            marginRight:20
                        }} />
                        <Text
                        style={{fontSize:18,fontWeight:'800'}}
                        >{e.text}</Text>
                    </View>
                        <IconButton
                         icon={({ size, color }) => (
                            <Image
                              source={require('../assets/delete.png')}
                              style={{ width: size, height: size, tintColor: color }}
                            />
                          )}
                       
                        size={20}
                        onPress={() => {remove(e.id)}}
                    />
                </View>
            )
        })
    }
    {/* <List.Item title="Hello" left={() => <List.Icon icon="calendar" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color="#000" icon="calendar" />}
    /> */}
  </>
);


const styles = StyleSheet.create({
    list:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginTop:5,
        marginBottom:5
    },
    name:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    image:{
        
    }
  });
  



export default Task;