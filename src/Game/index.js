import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Engine from '../Engine';

import styles from './styles';

export default function Game() {
    let [text, setText] = useState('vazio');

    function controls(event) {
    console.log(event.nativeEvent);
        if (event.translationX > 50) {
            setText('left to right');
        } else if (event.translationX < -50) {
            setText('right to left');
        }

        if (event.translationY > 50) {
            setText('top');
        } else if (event.translationY < -50) {
            setText('bottom');
        }
    }

    return(
        <PanGestureHandler onGestureEvent={e => controls(e)}>
            <View style={styles.game}>
                <Engine />
                <Text>Juca</Text>
            </View>
        </PanGestureHandler>
    )
};
