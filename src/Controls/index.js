
export default function Controls(event, engine) {
    console.log(engine);
    if (event.nativeEvent.translationX > 50) {
        engine.dispatch({type: "right"});
    } else if (event.nativeEvent.translationX < -50) {
        console.log('left');
    }

    if (event.nativeEvent.translationY > 50) {
        console.log('bottom');
    } else if (event.nativeEvent.translationY < -50) {
        console.log('top');
    }
}