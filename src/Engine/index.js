import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './GameLoop';
import { View, Text } from 'react-native';

import styles from './styles';
import Snake from '../Snake';

export default function Engine() {
    return(
        <GameEngine
            style={styles.container}
            entities={{
                snake: { renderer: <Snake />},
            }}>
        </GameEngine>
    );
};
