 import React from 'react';
 import { View } from 'react-native';
 
 import styles from './styles';
 
 export default function Fruit(props) {
    let position = props.position;

    return(
        <View style={{...styles.container, left: position[0], top: position[1]}}></View>
    );

 }
