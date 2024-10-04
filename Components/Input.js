import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Colors from '../helper';

export default function Input({ value, onChangeText, style, keyboardType="default" }) {
  return (
    <TextInput
      style={[styles.input, style]}
      autoFocus={false}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primary,
  },
});