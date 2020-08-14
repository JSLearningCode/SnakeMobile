import React from 'react'; 
import { View } from 'react-native';
import StyledTitles from '../Components/StyledTitles';

import styles from './styles';

export default function TitleScreen() {
    return(
        <View style={styles.container}>
            <StyledTitles text='START' action='game' />
            <StyledTitles text='SCORE' action='score' />
        </View>
    )
};
