import React, { useState } from 'react';
import { View } from 'react-native';
import TitleScreen from '../TitleScreen';
import Score from '../Score';
import Game from '../Game';
import Over from '../Over';

import styles from './styles';

export default function StateMachine(props) {
    let [state, setState] = useState(props.state);

    return(
        <View style={styles.container}>
            {state == 'title' && 
                <TitleScreen stateFunction={setState} />
            }

            {state == 'score' &&
                <Score />
            }

            {state == 'play' &&
                <Game />
            }

            {state == 'over' &&
                <Over />
            }
        </View>
    );
};
