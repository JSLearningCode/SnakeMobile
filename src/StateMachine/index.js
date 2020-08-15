import React, { useState } from 'react';
import { View } from 'react-native';
import TitleScreen from '../TitleScreen';
import Score from '../Score';
import Game from '../Game';
import Over from '../Over';


export default function StateMachine(props) {
    let [state, setState] = useState(props.state);

    return(
        <View>
            {state == 'title' && 
                <TitleScreen />
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
