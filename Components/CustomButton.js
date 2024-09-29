import { StyleSheet, Button } from 'react-native'
import React from 'react'
import Colors from '../helper';

export default function CustomButton({ title, color = Colors.ok, onPress, disabled = false }) {
  return (
    <Button title={title} color={color} onPress={onPress} disabled={disabled} />
  );
}

const styles = StyleSheet.create({})