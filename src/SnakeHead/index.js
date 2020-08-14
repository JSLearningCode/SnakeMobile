import React from 'react';
import { View } from 'react-native';

import styles from './styles';


const SnakeHead = (props) => {
    let velocity = props.velocity;
    let position = props.position;
    position[0] += velocity[0];
    position[1] += velocity[1];

    return (
        <View style={{...styles.container, left: position[0], top: position[1]}}>
        </View>
    );
};

export { SnakeHead };
