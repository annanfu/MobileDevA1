import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import Colors from '../helper';
import { LinearGradient } from 'expo-linear-gradient';
import GradientBackground from '../Components/GradientBackground';
import Card from '../Components/Card';

export default function Confirm({confirmVisibility, userInfo, gobackHandler, continueHandler}) {
    function handleGoback() {
       gobackHandler();
    }
    function handleContinue() {
       continueHandler();
    }
    
  return (
    <Modal visible={confirmVisibility} animationType="slide" transparent={true}>
      
        <GradientBackground>

        <Card>
          <Text style={styles.text}>Hello {userInfo[0]}</Text>
          <Text style={styles.text}>Here is the information you entered:</Text>
          <Text style={styles.text}>{userInfo[1]}</Text>
          <Text style={styles.text}>{userInfo[2]}</Text>
          <Text style={styles.text}>If it is not correct, please go back and edit them.</Text>

          <View style={styles.buttonArea }>
              <Button title="Go back" color={Colors.cancel} onPress={handleGoback}/>
              <Button title="Continue" color={Colors.ok} onPress={handleContinue}/>
          </View>
        </Card>        

        </GradientBackground>
      
    </Modal>
  )
}

const styles = StyleSheet.create({

  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
    text: {
        color: Colors.primary,
        fontSize: 18,
    },
})