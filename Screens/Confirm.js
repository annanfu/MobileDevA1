import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import Colors from '../helper';

export default function Confirm({confirmVisibility, userInfo}) {

    
  return (
    <Modal visible={confirmVisibility} animationType="slide" transparent={true} >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Hello {userInfo[0]}</Text>
          <Text style={styles.text}>Here is the information you entered:</Text>
          <Text style={styles.text}>{userInfo[1]}</Text>
          <Text style={styles.text}>{userInfo[2]}</Text>
          <Text style={styles.text}>If it is not correct, please go back and edit them.</Text>

        <View style={styles.buttonArea }>
            <Button title="Go back" color={Colors.cancel}/>
            <Button title="Continue" color={Colors.ok}/>

        </View>
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
    backgroundColor: 'rgba(0,0,0,0)',
  },
  innerContainer: {
    backgroundColor: Colors.containerBackground,
    padding: 20,
    borderRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    text: {
        color: Colors.primary,
        fontSize: 15,
    },
})