import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#121015',
    paddingVertical: 20,
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  gretting: {
    color: '#CCC',
  },
});

interface HeadProps {
  gretting: string;
}

export function Header({ gretting }: HeadProps) {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Bem-vindo, José</Text>
      <Text style={styles.gretting}>{gretting}</Text>
    </View>
  );
}
