import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GameEngine from 'react-native-game-engine';

import styles from './styles';

import Snake from './src/Snake';
import Fruit from './src/Fruit';
import moveSnake from './src/Snake/move_snake';
import spawnFruit from './src/Fruit/spawn_fruit';


export default function App() {
  return (
    <GameEngine
        style={styles.container}
        systems={moveSnake, spawnFruit}
        entities={{
            Snake: {position: [0, 0], renderer: <Snake />},
            Fruit: {position: [200, 200], renderer: <Fruit />},
        }}>
        
      <StatusBar hidden={true} />
      </GameEngine>

  );
}


