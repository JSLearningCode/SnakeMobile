import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GameEngine, GameLoop } from 'react-native-game-engine';
import { View } from 'react-native';

import styles from './styles';

import { SnakeHead } from './src/SnakeHead';
import Fruit from './src/Fruit';
import { UpdateLoop } from './src/UpdateLoop';

export default function App() {
  return (
    <View style={styles.container}>
      <GameEngine
        systems={[UpdateLoop]}
        entities={
            {
                SnakeHead: {position: [100, 100], renderer: <SnakeHead/>}
            }
        }>
      </GameEngine>
    </View>
  );
}


