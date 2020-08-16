import { Dimensions } from 'react-native';

const Constants = {
    size: 40,
    snake_color: '#000',
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
};

export default Constants;