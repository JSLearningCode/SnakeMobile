import React, { useState } from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Engine from '../Engine';
import Controls from '../Controls';

import styles from './styles';

export default function Game() {
    return(
        <PanGestureHandler onGestureEvent={e => Controls(e)}>
            <View style={styles.game}>
                <Engine />
            </View>
        </PanGestureHandler>
    )
};
