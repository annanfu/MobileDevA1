import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import Button from '../Components/Button';
import Colors from '../helper';
import { useState } from 'react';

export default function Start() {
  const [isChecked, setChecked] = useState(false);
  const [userName, setUserName] = useState('');
  function hasNumber(input) {
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            return true;
        }
    }
    return false;
  }

  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          value={userName}
          onChangeText={(inputUserName) => setUserName(inputUserName)}
          keyboardType="default"
        />
        {(userName.length < 2 || hasNumber(userName)) && (<Text>Please enter a valid name</Text>)}   
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Email Address</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
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
  item: {
    marginBottom: 50,
  },
  text: {
    color: Colors.primary,
    fontSize: 15,
    marginBottom: 20,
  },
  textInput: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
})