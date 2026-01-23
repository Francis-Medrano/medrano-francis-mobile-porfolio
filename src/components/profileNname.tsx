import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles';

type ProfileNnameProps = {
  styles: ReturnType<typeof StyleSheet.create>;
};

export default function ProfileNname({ styles }: ProfileNnameProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={globalStyles.profileImage}
      />
      <Text style={globalStyles.name}>Francis Medrano</Text>
      <Text style={globalStyles.title}>Mobile Developer</Text>
    </View>
  );
}
