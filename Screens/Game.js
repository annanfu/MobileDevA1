import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../helper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Game({userInfo}) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.backgroundTop, Colors.backgroundBottom]} style={styles.background}>
        <View style={styles.restart}>
          <Button title="Restart" color={Colors.restart} onPress={() => {}}/>
        </View>
        <View style={styles.innerContainer}>

        <View>
          <Text style={styles.text}>Guess a number between 1 & 100 that is mutiply of {userInfo[2][9]}</Text>
        </View>
        <View style={styles.buttonArea}>
          <Button title="Start" color={Colors.ok} onPress={() => {}}/>
        </View>
      </View>    
      </LinearGradient>
    </View>
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
        textAlign: 'center'
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
  restart: {
    margin: 10,
    alignSelf: 'flex-end',
  },

})