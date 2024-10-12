import React from 'react';
import { View, Text } from 'react-native';

function ToDoList  ({ tasks })  {
    if (!tasks || tasks.length === 0) return <Text>No tasks available</Text>;
    
    return (
      <View>
        {tasks.map((task, index) => (
          <Text key={index}>
            {task}</Text>
        ))}
      </View>
    );
  };
  

export default ToDoList;
