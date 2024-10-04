import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../helper';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBackground({ children }) {
  return (
    <LinearGradient
      colors={[Colors.backgroundTop, Colors.backgroundBottom]}
      style={styles.background}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});