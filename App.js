
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Start from './Screens/Start';
import Colors from './helper';
import Confirm from './Screens/Confirm';
import { useState } from 'react';

export default function App() {
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [user, setUser] = useState([]);
  function handleRegister([name, email, phone]) {
    console.log("Register button pressed");    
    setConfirmVisibility(true);
    setUser([name, email, phone]);
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
      colors={[Colors.backgroundTop, Colors.backgroundBottom]}
      style={styles.background}>  
        <View style={styles.topView}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <View style={styles.bottomView}>
          <Start
            registerHandler={handleRegister}
            />
          <Confirm
            confirmVisibility={confirmVisibility}
            userInfo={user}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 4,
    alignItems: 'center',
  },
  text: {
    color: Colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  }
});
