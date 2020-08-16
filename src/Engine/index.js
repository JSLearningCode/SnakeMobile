import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './GameLoop';

import styles from './styles';
import Snake from '../Snake';

export default function Engine() {
    return(
        <GameEngine
            style={styles.container}
            entities={{
                snake: {position: [100, 100], velocity: [0, 1], renderer: <Snake />},
            }}>
        </GameEngine>
    );
};
