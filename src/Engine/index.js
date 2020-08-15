import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import GameLoop from './GameLoop';
import { View, Text } from 'react-native';

import style from './styles';
import Snake from '../Snake';

export default function Engine() {
    return(
        <GameEngine
            entities={{
                snake: { renderer: <Snake />},
            }}>
        </GameEngine>
    );
};
