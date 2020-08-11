import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GameEngine from 'react-native-game-engine';
import { View } from 'react-native';

import styles from './styles';

import Snake from './src/Snake';
import Fruit from './src/Fruit';
import moveSnake from './src/Snake/move_snake';
import spawnFruit from './src/Fruit/spawn_fruit';


export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}


