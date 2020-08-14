import React from 'react';

const UpdateLoop = (entities, {touches}) => {
    entities.SnakeHead.position[0] += 50;
    return entities;
};

export { UpdateLoop };
