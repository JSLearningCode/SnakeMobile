import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './GameLoop';

import styles from './styles';
import Head from '../Snake/Head';

export default function Engine(props) {

    return(
        <GameEngine
            ref={ref => {props.ref = ref; }}
            style={styles.container}
            systems={[GameLoop]}
            entities={{
                head: {position: [100, 100], velocity: [1,0], renderer: <Head />},
            }}>
        </GameEngine>
    );
};
