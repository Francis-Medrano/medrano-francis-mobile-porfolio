import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles';

type ContactInfoProps = {
  styles: ReturnType<typeof StyleSheet.create>;
};

export default function ContactInfo({ styles }: ContactInfoProps) {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.sectionContent}>Email: francis_medrano@dlsl.edu.ph</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Francis-Medrano')}>
        <Text style={[styles.sectionContent, { color: '#007AFF' }]}>
          GitHub: github.com/Francis-Medrano
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/francis-medrano-1b40b11a6/')}>
        <Text style={[styles.sectionContent, { color: '#007AFF' }]}>
          LinkedIn: linkedin.com/in/francis-medrano/
        </Text>
      </TouchableOpacity>
    </View>
  );
}
