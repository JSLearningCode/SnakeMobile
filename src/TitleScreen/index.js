import React from 'react'; 
import { View, Text } from 'react-native';
import StyledTitles from '../Components/StyledTitles';

import styles from './styles';

export default function TitleScreen(props) {
    let setState = props.stateFunction;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>RETRO SNAKE</Text>
            <View style={styles.options}>
                <StyledTitles text='START' action='game' stateFunction={setState} />
                <StyledTitles text='SCORE' action='score' stateFunction={setState} />
            </View>
        </View>
    )
};
