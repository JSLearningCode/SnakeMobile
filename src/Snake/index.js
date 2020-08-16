import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Head from './Head';
import Body from './Body';

export default function Snake(props) {
    let head_position = props.position;
    let head_velocity = props.velocity;

    return(
        <View style={styles.container}>
            <Head position={head_position} velocity={head_velocity} />
            <Body />
        </View>
    );
};
