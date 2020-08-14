import React from 'react';
import { View } from 'react-native';

import styles from './styles';


const SnakeHead = (props) => {
    return (
        <View style={{...styles.container, left: props.position[0], top: props.position[1]}}>
        </View>
    );
};

export { SnakeHead };
