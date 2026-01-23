import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles';

type BioProps = {
  styles: ReturnType<typeof StyleSheet.create>;
};

export default function Bio({ styles }: BioProps) {
  return (
    <Text style={styles.sectionContent}>
      Passionate developer with experience in building beautiful and functional mobile apps using React Native and Expo.
    </Text>
  );
}
