import Snake from "../Snake";

import React from 'react';
import Constants from '../Constants';

export default function GameLoop(entities, { touches, dispatch, events }) {
    let snake = entities.snake;
    snake.position[0] += snake.velocity[0];
    return entities;

};

    