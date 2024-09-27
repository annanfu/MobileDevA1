import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button( {buttonTitle}) {
function handler() {
    console.log('Button pressed')
}
  return (
    <Button title="Press me" onPress={handler} styles={styles.button}/>
  )
}

const styles = StyleSheet.create({
})