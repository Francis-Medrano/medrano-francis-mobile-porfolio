import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles';

type BioProps = {
  styles: ReturnType<typeof StyleSheet.create>;
};

export default function Bio({ styles }: BioProps) {
  return (
    <>
      <Text style={styles.sectionTitle}>Bio</Text>
      <Text style={styles.sectionContent}>
        Passionate developer focused on clean code and elegant solutions, with a strong emphasis on building reliable, maintainable, and user-friendly applications.
      </Text>
    </>
  );
}
