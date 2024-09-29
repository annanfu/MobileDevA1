import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React from "react";
import Colors from "../helper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function Game({ userInfo }) {
  const [startGame, setStartGame] = useState(true);
  const [number, setNumber] = useState(0);
  const [playGame, setPlayGame] = useState(false);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(20);
  const [time, setTime] = useState(60);
  const [prompt, setPrompt] = useState("");
  const [hint, setHint] = useState("");

  const randomNumber = () => {
    let multiplies = [];
    const lastDigit = parseInt(userInfo[2][9]);
    for (let i = lastDigit; i <= 100; i += lastDigit) {
      if (i % lastDigit === 0) {
        multiplies.push(i);
      }
    }
    return multiplies[Math.floor(Math.random() * multiplies.length)];
  };

  function handleStart() {
    console.log("handleStart triggered");
    setNumber(randomNumber());
    setStartGame(false);
    setPlayGame(true);
    setAttempts(20);
    setTime(60);
    setGuess("");
  }
  function handleHint() {
    if (number < 50) {
      setHint("The number is between 1 and 50");
    } else {
      setHint("The number is between 50 and 100");
    }
  }
  function validateInput(input) {
    if (isNaN(input)) {
      return false;
    }
    if (parseInt(input) < 1 || parseInt(input) > 100) {
      return false;
    }
    return true;
  }
function handleSubmit() {
  if (!validateInput(guess)) {
    Alert.alert("Invalid Input", "Please enter a number between 1 and 100", [
      { text: "OK" },
    ]);
    return;
  }

  if (attempts === 0 || time === 0) {
    console.log("Game Over");
    return;
  }

  const guessNumber = parseInt(guess);
  if (guessNumber < number) {
    setPrompt("higher");
    setPlayGame(false);
  } else if (guessNumber > number) {
    setPrompt("lower");
    setPlayGame(false);
  } else {
    setPrompt("correct");
    setPlayGame(false);
    console.log("Correct Guess!");
  }

  setAttempts((previousAttempts) => previousAttempts - 1);
  console.log("Submit");
  console.log(`Random Number: ${number}`);
  console.log(`Guess: ${guessNumber}`);
}


  
  function handleTryagain() {
    setGuess("");
    setPrompt("");
    setPlayGame(true);
  }
  function handleEndgame() {
    setStartGame(true);
    setPlayGame(false);
  }





  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.backgroundTop, Colors.backgroundBottom]}
        style={styles.background}
      >
        <View style={styles.restart}>
          <Button
            title="Restart"
            color={Colors.restart}
            onPress={handleStart}
          />
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
            <View style={{ marginBottom: 10 }}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(text) => setGuess(text)}
                value={guess}
                autoFocus={true}
              />
              {hint.length > 0 && (
                <Text style={{ textAlign: "center" }}>{hint}</Text>
              )}
            </View>
            <View style={{ margin: 20 }}>
              <Text style={styles.reminder}>Attempts left: {attempts}</Text>
              <Text style={styles.reminder}>Timer: {time}s</Text>
            </View>

            <Button
              title="Use a Hint"
              color={Colors.ok}
              onPress={handleHint}
              disabled={hint.length > 0}
            />
            <Button
              title="Submit Guess"
              color={Colors.ok}
              onPress={handleSubmit}
            />
          </View>
        )}

        {prompt !== "" && prompt !== "correct" && (
          <View style={styles.innerContainer}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.text}>You did not guess correct!</Text>
              <Text style={styles.text}>You should guess {prompt}.</Text>
            </View>
            <Button
              title="Try Again"
              color={Colors.ok}
              onPress={handleTryagain}
            />
            <Button
              title="End the Game"
              color={Colors.ok}
              onPress={handleEndgame}
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
    justifyContent: "space-around",
    padding: 10,
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
    textAlign: "center",
  },
  textInput: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
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
  reminder: {
    color: Colors.secondary,
    fontSize: 15,
    textAlign: "center",
  },
});
