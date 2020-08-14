import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar hidden={true} />
    </View>
  );
}

