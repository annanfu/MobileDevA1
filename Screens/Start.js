import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
//import Button from '../Components/Button';
import Colors from '../helper';
import { useState } from 'react';


export default function Start( { registerHandler } ) {
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  function hasNumber(input) {
    for (let i = 0; i < input.length; i++) {
        if (!isNaN(input[i])) {
            return true;
        }
    }
    return false;
  }
  function validateName(input) {
    if (input.length < 2 || hasNumber(input)) {
        return false;
    }
    return true;
  }
  function validateEmail(input) {
    if (!(input.includes('@') && input.includes('.'))) {
        return false;
    }
    return true;
  }
  function validatePhone(input) {
    if (input.length !== 10) {
        return false;
    }
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            return false;
        }
    }
    if (input[9] === '0' || input[9] === '1') {
        return false;
    }
    return true;
  }
  function handleRegister() {
    if (validateName(name) && validateEmail(email) && validatePhone(phone)) {
      registerHandler([name, email, phone]);
    } else {
    Alert.alert('Invalid Input', 'Check the input values', [{text: 'OK'}]);
    }
  }
  function handleReset() {
    setName('');
    setEmail('');
    setPhone('');
  }


  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          value={name}
          onChangeText={(inputText) => setName(inputText)}
          keyboardType="default"
        />
        {(name.length > 0 && !validateName(name)) && (<Text>Please enter a valid name</Text>)}   
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          value={email}
          onChangeText={(inputText) => setEmail(inputText)}
          keyboardType="email-address"
        />
        {(email.length > 0 && !validateEmail(email)) && (<Text>Please enter a valid email</Text>)}  
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          value={phone}
          onChangeText={(inputText) => setPhone(inputText)}
          keyboardType="email-address"
        />
        {(phone.length > 0 && !validatePhone(phone)) && (<Text>Please enter a valid phone number</Text>)}  
      </View>
      <View style={{flexDirection: 'row', gap: 20}}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
      />
      <Text>I am not a robot</Text>
      </View>
      <View style={styles.buttonArea }>
        <Button title="Reset" color={Colors.cancel} onPress={handleReset}/>
        <Button title="Register" color={Colors.ok} onPress={handleRegister} disabled={!isChecked}/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.containerBackground,
    width: '80%',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  item: {
    marginBottom: 40,
  },
  text: {
    color: Colors.primary,
    fontSize: 15,
    marginBottom: 10,
  },
  textInput: {
    textAlign: 'center',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    fontWeight: 'bold',
  },
  buttonArea: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})