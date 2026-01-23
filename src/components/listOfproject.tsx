import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles';

const projects = [
  {
    name: 'StudySpot',
    description: 'Where a person can reserve a study area in many different places available.',
  },
  {
    name: 'Diner28',
    description: 'A table reservation website specifically made for a single restaurant.',
  },
  {
    name: 'PinoyRecipeFinder',
    description: 'A Filipino cuisine cookbook website where people can see the recipes and process to cook the cuisine.',
  },
];

type ListOfProjectProps = {
  styles: ReturnType<typeof StyleSheet.create>;
};

export default function ListOfProject({ styles }: ListOfProjectProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>Projects</Text>
      {projects.map(item => (
        <View key={item.name} style={{ marginBottom: 12 }}>
          <Text style={styles.skill}>{item.name}</Text>
          <Text style={styles.sectionContent}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}
