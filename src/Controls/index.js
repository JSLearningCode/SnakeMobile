export default function Controls(event) {
    if (event.nativeEvent.translationX > 50) {
        console.log('right');
    } else if (event.nativeEvent.translationX < -50) {
        console.log('left');
    }

    if (event.nativeEvent.translationY > 50) {
        console.log('bottom');
    } else if (event.nativeEvent.translationY < -50) {
        console.log('top');
    }
}