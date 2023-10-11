import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useScreen} from '../../context/ScreenContext';

export default function ResultScreen() {
  const {onScreen, result, getResults, input, pressEqual} = useScreen();
  useEffect(() => {
    getResults()
  }, [input, pressEqual])
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={[pressEqual ? styles.result : styles.equation, 
          onScreen.length < 12 && !pressEqual ? {fontSize: 40} : 
          onScreen.length < 20 && !pressEqual ? {fontSize: 32} : 
          !pressEqual && {fontSize: 28}
        ]
        }>
          {onScreen}
        </Text>
      </View>
      <Text style={pressEqual ? styles.equation : styles.result}>
        {result?.toLocaleString()}
      </Text>
    </View>
  );
}
