import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import Button from '../Components/Button';
import Colors from '../helper';
import { useState } from 'react';

export default function Start() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name</Text>
      <TextInput style={styles.textInput}></TextInput>      
      <Text style={styles.text}>Email Address</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={styles.text}>Phone Number</Text>
      <TextInput style={styles.textInput}></TextInput>
      <View style={{flexDirection: 'row', gap: 20}}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
      />
      <Text>I am not a robot</Text>
      </View>
      <View style={{flexDirection: 'row', gap: 20} }>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'silver',
    width: '80%',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: Colors.primary,
    fontSize: 15,
  },
  textInput: {
    padding: 20,
    marginBottom: 50,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
})