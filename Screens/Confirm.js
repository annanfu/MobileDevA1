import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import Colors from '../helper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Confirm({confirmVisibility, userInfo, gobackHandler, continueHandler}) {
    function handleGoback() {
       gobackHandler();
    }
    function handleContinue() {
       continueHandler();
    }
    
  return (
    <Modal visible={confirmVisibility} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <LinearGradient colors={[Colors.backgroundTop, Colors.backgroundBottom]} style={styles.background}>

        <View style={styles.innerContainer}>
          <Text style={styles.text}>Hello {userInfo[0]}</Text>
          <Text style={styles.text}>Here is the information you entered:</Text>
          <Text style={styles.text}>{userInfo[1]}</Text>
          <Text style={styles.text}>{userInfo[2]}</Text>
          <Text style={styles.text}>If it is not correct, please go back and edit them.</Text>

          <View style={styles.buttonArea }>
              <Button title="Go back" color={Colors.cancel} onPress={handleGoback}/>
              <Button title="Continue" color={Colors.ok} onPress={handleContinue}/>
          </View>
        </View>        

        </LinearGradient>
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
    background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})