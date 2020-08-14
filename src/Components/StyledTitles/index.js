import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function StyledTitles(props) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
};
