import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StateMachine from '../../StateMachine';

import styles from './styles';

export default function StyledTitles(props) {
    let state = props.stateFunction;
    let action = props.action;

    function changeState() {
        if (state && action) {
            state(action);
        }
        else {
            console.log('state change error');
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonStyle} onPress={changeState}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
};
