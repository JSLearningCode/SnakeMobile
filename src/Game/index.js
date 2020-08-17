import React from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Engine from '../Engine';
import Controls from '../Controls';

import styles from './styles';

export default function Game() {
    let engine;

    return(
        <PanGestureHandler onGestureEvent={(e, engine) => Controls(e, engine)}>
            <View style={styles.game}>
                <Engine ref={engine}/>
            </View>
        </PanGestureHandler>
    )
};
