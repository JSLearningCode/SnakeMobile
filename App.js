import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GameEngine from 'react-native-game-engine';
import { View } from 'react-native';

import styles from './styles';

import Snake from './src/Snake';
import Fruit from './src/Fruit';
import GameLoop from './src/GameLoop';

export default function App() {
  return (
    <View style={styles.container}>
      <GameEngine
        systems={{GameLoop}}
        style={styles.container}
        >
      </GameEngine>
    </View>
  );
}


