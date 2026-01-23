import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles';

type SkillsProps = {
  styles: ReturnType<typeof StyleSheet.create>;
};

export default function Skills({ styles }: SkillsProps) {
  return (
    <>
      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skill}>React Native</Text>
        <Text style={styles.skill}>TypeScript</Text>
        <Text style={styles.skill}>Expo</Text>
        <Text style={styles.skill}>UI/UX Design</Text>
        <Text style={styles.skill}>JavaScript</Text>
        <Text style={styles.skill}>C++</Text>
      </View>
    </>
  );
}
