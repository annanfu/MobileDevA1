import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from "react-native";
import React from "react";
import Colors from "../helper";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GradientBackground from "../Components/GradientBackground";


export default function Game({ userInfo, restartHandler }) {
  const [startGame, setStartGame] = useState(true);
  const [number, setNumber] = useState(0);
  const [playGame, setPlayGame] = useState(false);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(4);
  const [time, setTime] = useState(60);
  const [prompt, setPrompt] = useState("");
  const [hint, setHint] = useState("");
  const [endGame, setEndGame] = useState("");
  const [timerId, setTimerId] = useState(null);
  const [win, setWin] = useState(false);

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
    clearInterval(timerId);
    console.log("handleStart triggered");
    setNumber(randomNumber());
    setStartGame(false);
    setPlayGame(true);
    setAttempts(4);
    setTime(60);
    setGuess("");
    setPrompt("");
    setHint("");
    setEndGame("");
    setWin(false);

    // Set up the timer
    const newTimerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(newTimerId);
          setEndGame("You are out of time");
          setPrompt("");
          setPlayGame(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Store the timerId in state so we can clear it later if needed
    setTimerId(newTimerId);
  }
  function handleHint() {
    if (number < 50) {
      setHint("The number is between 1 and 50");
    } else {
      setHint("The number is between 50 and 100");
    }
  }
  function validateInput(input) {
    if (input.length === 0) {
      return false;
    }
    if (isNaN(input)) {
      return false;
    }
    if (parseInt(input) < 1 || parseInt(input) > 100 || parseInt(input) % userInfo[2][9] !== 0) {
      return false;
    }
    return true;
  }
function handleSubmit() {
  setAttempts((prevAttempts) => prevAttempts - 1);
   if (attempts === 0) {
     console.log("You are out of attempts");
     setEndGame("You are out of attempts");
     setPlayGame(false);
     clearInterval(timerId);
     return;
   }     
  if (!validateInput(guess)) {
    Alert.alert("Invalid number!", `Number has to be a multiply of ${userInfo[2][9]} between 1 and 100.`, [
      { text: "Okay" },
    ]);
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
    setWin(true);
    clearInterval(timerId);
    return;
  }
  if (time === 0) {
    console.log("You are out of time");
    setEndGame("You are out of time");
    setPrompt("");
    setPlayGame(false);
    return;
  }
  console.log("Submit");
  console.log(`Random Number: ${number}`);
  console.log(`Guess: ${guessNumber}`);
}  
  function handleTryagain() {
    setGuess("");
    setPrompt("");
    setPlayGame(true);
      if (attempts === 0) {
        console.log("You are out of attempts");
        setEndGame("You are out of attempts");
        setPlayGame(false);
        clearInterval(timerId);
      }
  }
  function handleEndgame() {
    clearInterval(timerId);
    setPlayGame(false);
    setPrompt("");
    setEndGame("Game Over");
  }
  function handleRestart() {
    clearInterval(timerId);
    setNumber(randomNumber());
    setStartGame(false);
    setPlayGame(false);
    setAttempts(4);
    setTime(60);
    setGuess("");
    setPrompt("");
    setHint("");
    setEndGame("");
    setWin(false);
    restartHandler();
  }

  const usedAttempts = 4 - attempts;


  return (

       <GradientBackground>
        <View style={styles.restart}>
          <Button
            title="Restart"
            color={Colors.restart}
            onPress={handleRestart}
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
                autoFocus={false}
              />
              {hint.length > 0 && (
                <Text style={{ textAlign: "center" }}>{hint}</Text>
              )}
            </View>
            <View style={{ margin: 20 }}>
              <Text style={styles.reminder}>Attempts left: {attempts}</Text>
              <Text style={styles.reminder}>Timer: {time}s</Text>
            </View>
            <View style={styles.buttonArea}>
            <Button
              title="Use a Hint"
              color={Colors.ok}
              onPress={handleHint}
              disabled={hint.length > 0}
            />
            </View>
            <View style={styles.buttonArea}>
            <Button
              title="Submit Guess"
              color={Colors.ok}
              onPress={handleSubmit}
            />
            </View>
          </View>
        )}

        {prompt !== "" && prompt !== "correct" && (
          <View style={styles.innerContainer}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.text}>You did not guess correct!</Text>
              <Text style={styles.text}>You should guess {prompt}.</Text>
            </View>
            <View style={styles.buttonArea}>
            <Button
              title="Try Again"
              color={Colors.ok}
              onPress={handleTryagain}
            />
            </View>
            <View style={styles.buttonArea}>
            <Button
              title="End the Game"
              color={Colors.ok}
              onPress={handleEndgame}
            />
            </View>
          </View>
        )}

        {win && (
          <View style={styles.innerContainer}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.text}>You guessed correct!</Text>
              <Text style={styles.text}>Attempts used: {usedAttempts}</Text>
            </View>
            <View>
              <Image
                source={{uri: `https://picsum.photos/id/${number}/100/100`}}
                style={styles.image}
              />
            </View>
            <Button title="New Game" color={Colors.ok} onPress={handleStart} />
          </View>
        )}

        {endGame !== "" && (
          <View style={styles.innerContainer}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.text}>The game is over!</Text>
            </View>
            <View>
              <Image
                source={require("../assets/unamusedFaceEmoji.png")}
                style={styles.image}
              />
            </View>
            {endGame !== "Game Over" && (
              <View style={{ margin: 10 }}>
                <Text style={styles.text}>{endGame}</Text>
              </View>
            )}
            <Button title="New Game" color={Colors.ok} onPress={handleStart} />
          </View>
        )}
      </GradientBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: Colors.containerBackground,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
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
    width: 30,
    fontSize: 20,
    color: Colors.primary,
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
  image: {
    marginBottom: 20,
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
