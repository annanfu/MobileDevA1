
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Start from './Screens/Start';
import Colors from './helper';
import Confirm from './Screens/Confirm';
import Game from './Screens/Game';
import { useState } from 'react';
import GradientBackground from './Components/GradientBackground';

export default function App() {
  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const [user, setUser] = useState([]);
  const [gameVisibility, setGameVisibility] = useState(false);
  let restart = false;

  function handleRegister([name, email, phone]) {
    setConfirmVisibility(true);
    setUser([name, email, phone]);
  }
  function handleGoback() {
    setConfirmVisibility(false);
  }
  function handleContinue() {
    setConfirmVisibility(false);
    setGameVisibility(true);
  }
  function handleRestart() {
    setGameVisibility(false);
    setConfirmVisibility(false);
    setUser([]);
    restart = true;
  }
  if (gameVisibility) {
    return (
      <Game userInfo={user} restartHandler={handleRestart} />
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <GradientBackground>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          <View style={styles.topView}>
            <Text style={styles.text}>Welcome</Text>
          </View>
          <View style={styles.bottomView}>
            <Start registerHandler={handleRegister} restartHandler={restart} />
            <Confirm
              confirmVisibility={confirmVisibility}
              userInfo={user}
              gobackHandler={handleGoback}
              continueHandler={handleContinue}
            />
          </View>
        </SafeAreaView>
      </GradientBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
  },
  topView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: Colors.primary,
    fontSize: 30,
    fontWeight: "bold",
  },
});
