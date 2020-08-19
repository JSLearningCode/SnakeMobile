import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './GameLoop';

import styles from './styles';
import Head from '../Snake/Head';
import { render } from 'react-dom';

export default class Engine extends React.Component {
    constructor(props) {
        super(props);
        this.engine = null;
    }
    render() {
        return(
            <GameEngine
                ref={ ref => this.engine = ref }
                style={styles.container}
                systems={[GameLoop]}
                entities={{
                    head: {position: [100, 100], velocity: [1,0], renderer: <Head />},
                }}>
            </GameEngine>
        );
    }
};
