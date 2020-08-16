import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './GameLoop';

import styles from './styles';
import Snake from '../Snake';

export default function Engine() {

    return(
        <GameEngine
            style={styles.container}
            systems={[GameLoop]}
            entities={{
                snake: {position: [0, 0], velocity: [0.1,0], renderer: <Snake />},
            }}>
        </GameEngine>
    );
};
