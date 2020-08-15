import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Head from './Head';
import Body from './Body';

export default function Snake() {
    return(
        <View style={styles.container}>
            <Head />
            <Body />
        </View>
    );
};
