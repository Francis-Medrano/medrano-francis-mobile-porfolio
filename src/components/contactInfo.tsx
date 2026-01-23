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
      <Text style={styles.sectionContent}>Email: francis@example.com</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/yourusername')}>
        <Text style={[styles.sectionContent, { color: '#007AFF' }]}>
          GitHub: github.com/yourusername
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/yourusername')}>
        <Text style={[styles.sectionContent, { color: '#007AFF' }]}>
          LinkedIn: linkedin.com/in/yourusername
        </Text>
      </TouchableOpacity>
    </View>
  );
}
