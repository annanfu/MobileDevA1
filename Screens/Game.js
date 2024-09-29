import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../helper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function Game({ userInfo }) {
  const [startGame, setStartGame] = useState(true);
  const [number, setNumber] = useState(0);
  const [playGame, setPlayGame] = useState(false);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(4);
  const [time, setTime] = useState(60);

  function handleStart() {
    setNumber(randomNumber());
    setStartGame(false);
    setPlayGame(true);
  }
  function handleHint() {
    console.log("Hint");
  }
  function handleSubmit() {
    console.log("Submit");
  }

  const randomNumber = () => {
    let multiplies = [];
    const lastDigit = parseInt(userInfo[2][9]);
    for (let i = 1; i <= 100; i += lastDigit) {
      if (i % lastDigit === 0) {
        multiplies.push(i);
      }
    }
    return multiplies[Math.floor(Math.random() * multiplies.length)];
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.backgroundTop, Colors.backgroundBottom]}
        style={styles.background}
      >
        <View style={styles.restart}>
          <Button title="Restart" color={Colors.restart} onPress={() => {}} />
        </View>
        {startGame && (
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.text}>
                Guess a number between 1 & 100 that is mutiply of{" "}
                {userInfo[2][9]}
              </Text>
            </View>
            <View style={styles.buttonArea}>
              <Button title="Start" color={Colors.ok} onPress={handleStart} />
            </View>
          </View>
        )}

        {playGame && (
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.text}>
                Guess a number between 1 & 100 that is mutiply of{" "}
                {userInfo[2][9]}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(text) => setGuess(text)}
                value={guess}
                autoFocus={true}
              />
            </View>
            <View style={{margin: 20}}>
              <Text style={{ textAlign: "center" }}>
                Attempts left: {attempts}
              </Text>
              <Text style={{ textAlign: "center" }}>Timer: {time}s</Text>
            </View>

              <Button
                title="Use a Hint"
                color={Colors.ok}
                onPress={handleHint}
              />
              <Button
                title="Submit Guess"
                color={Colors.ok}
                onPress={handleSubmit}
              />

          </View>
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: Colors.containerBackground,
    padding: 20,
    borderRadius: 10,
    // alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonArea: {
    flexDirection: "row",
    // justifyContent: "space-around",
    padding: 10,
  },
  text: {
    color: Colors.primary,
    fontSize: 15,
    textAlign: "center",
  },
  textInput: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    fontWeight: "bold",
    alignSelf: "center",
    width: "10%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  restart: {
    margin: 10,
    alignSelf: "flex-end",
  },
});
