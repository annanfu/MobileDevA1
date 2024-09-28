import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import Colors from '../helper';

export default function Confirm({confirmVisibility}) {

    
  return (
    <Modal visible={confirmVisibility} animationType="slide" transparent={true} >
      <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>Confirm</Text>
            </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: Colors.containerBackground,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
})