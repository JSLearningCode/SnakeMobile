import React from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Engine from '../Engine';
import Controls from '../Controls';

import styles from './styles';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.engine = null;
    } 

    render() {
        return(
            <PanGestureHandler onGestureEvent={e => Controls(e, this.engine)}>
                <View style={styles.game}>
                    <Engine ref={ ref => {this.engine = ref;}}/>
                </View>
            </PanGestureHandler>
        )
    }
    
};
