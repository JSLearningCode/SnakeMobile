import React from 'react';

const UpdateLoop = (entities, {touches}) => {
    touches.filter(t => t.type == "move").forEach( t => {
        if (t.delta.pageX > 0) {
                entities.SnakeHead.velocity[0] = -Math.abs(entities.SnakeHead.velocity[0]);
                console.log(touches.time.delta);
        }
        else {
            entities.SnakeHead.velocity[0] = Math.abs(entities.SnakeHead.velocity[0]);
        }
    });

    return entities;
};

    export { UpdateLoop };
