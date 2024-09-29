import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import Colors from '../helper';
import { useState } from 'react';
import Card from '../Components/Card';
import PrimaryText from '../Components/PrimaryText';
import ButtonArea from '../Components/ButtonArea';


export default function Start( { registerHandler, restartHandler } ) {
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
    setChecked(false);
  }

  if (restartHandler === true) {
    handleReset();
  }

  return (
    <Card>
      <View style={styles.item}>
        <PrimaryText>Name</PrimaryText>
        <TextInput
          style={styles.textInput}
          autoFocus={false}
          value={name}
          onChangeText={(inputText) => setName(inputText)}
          keyboardType="default"
        />
        {name.length > 0 && !validateName(name) && (
          <Text>Please enter a valid name</Text>
        )}
      </View>
      <View style={styles.item}>
        <PrimaryText>Email Address</PrimaryText>
        <TextInput
          style={styles.textInput}
          autoFocus={false}
          value={email}
          onChangeText={(inputText) => setEmail(inputText)}
          keyboardType="email-address"
        />
        {email.length > 0 && !validateEmail(email) && (
          <Text>Please enter a valid email</Text>
        )}
      </View>
      <View style={styles.item}>
        <PrimaryText>Phone Number</PrimaryText>
        <TextInput
          style={styles.textInput}
          autoFocus={false}
          value={phone}
          onChangeText={(inputText) => setPhone(inputText)}
          keyboardType="email-address"
        />
        {phone.length > 0 && !validatePhone(phone) && (
          <Text>Please enter a valid phone number</Text>
        )}
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Checkbox value={isChecked} onValueChange={setChecked} />
        <Text>I am not a robot</Text>
      </View>
      <ButtonArea>
        <Button title="Reset" color={Colors.cancel} onPress={handleReset} />
        <Button
          title="Register"
          color={Colors.ok}
          onPress={handleRegister}
          disabled={!isChecked}
        />
      </ButtonArea>
    </Card>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 40,
  },
  textInput: {
    textAlign: "center",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    fontWeight: "bold",
  },
  buttonArea: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});