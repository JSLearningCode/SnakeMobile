import React from 'react';
import Constants from '../Constants';

export default function GameLoop(entities, { touches, dispatch, events }) {
    let head = entities.head;
    if (head.position[0] > 0 && head.position[0] + Constants.size < Constants.screen.width) {
        head.position[0] += head.velocity[0];
    }

    if (events.length) {
        for (let i = 0; i < events.length; i++) {
            if (events[i].type === 'up') {
                head.velocity[1] = 1;
                head.velocity[0] = 0;
            }
        }
    }    

    return entities;

};

    