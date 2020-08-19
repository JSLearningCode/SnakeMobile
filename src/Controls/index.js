
export default function Controls(event, engine) {
    console.log(engine.engine.dispatch);
    if (event.nativeEvent.translationX > 50) {
        engine.engine.dispatch({type: "right"});
    } else if (event.nativeEvent.translationX < -50) {
        engine.engine.dispatch({type: "left"});
    }

    if (event.nativeEvent.translationY > 50) {
        engine.engine.dispatch({type: "down"});
    } else if (event.nativeEvent.translationY < -50) {
        engine.engine.dispatch({type: "up"});
    }
}