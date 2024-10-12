import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import { useState } from 'react';
import ToDoList from './src/ToDoList';

function App() {
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: 'lightgray' 
    }
  });
  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <StatusBar style="auto" />
    </View>
  );
  
  
  
}

export default App;