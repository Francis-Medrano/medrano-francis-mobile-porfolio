import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { globalStyles } from '../src/globalStyles';

export default function MainPortfolio() {
  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/300?img=1' }}
        style={globalStyles.profileImage}
      />
      <Text style={globalStyles.name}>Francis Medrano</Text>
      <Text style={globalStyles.title}>Mobile Developer & Designer</Text>

      <Text style={globalStyles.sectionTitle}>About Me</Text>
      <Text style={globalStyles.sectionContent}>
        Passionate developer with experience in building beautiful and functional mobile apps using React Native and Expo.
      </Text>

      <Text style={globalStyles.sectionTitle}>Skills</Text>
      <View style={globalStyles.skillsContainer}>
        <Text style={globalStyles.skill}>React Native</Text>
        <Text style={globalStyles.skill}>TypeScript</Text>
        <Text style={globalStyles.skill}>Expo</Text>
        <Text style={globalStyles.skill}>UI/UX Design</Text>
        <Text style={globalStyles.skill}>JavaScript</Text>
      </View>

      <Text style={globalStyles.sectionTitle}>Projects</Text>
      <Text style={globalStyles.sectionContent}>
        • Portfolio App - A showcase of my work and skills.{'\n'}
        • Task Manager - Productivity app for daily tasks.{'\n'}
        • WeatherNow - Real-time weather updates.
      </Text>
    </ScrollView>
  );
}
