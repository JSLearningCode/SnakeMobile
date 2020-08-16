import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export default function Head(props) {
    let position = props.position;
    let velocity = props.velocity;

    return(
        <View style={{...styles.container, left: position[0], top: position[1] }}>
        </View>
    );
};
