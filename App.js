import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import StateMachine from './src/StateMachine';

import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
        <StateMachine state='title' />
    </View>
  );
}

