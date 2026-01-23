import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../globalStyles';

type ProfileNnameProps = {
  styles: ReturnType<typeof StyleSheet.create>;
  onToggleTheme: () => void;
};

export default function ProfileNname({ styles, onToggleTheme }: ProfileNnameProps) {
  return (
    <View style={{ alignItems: 'center', position: 'relative' }}>
      <TouchableOpacity onPress={onToggleTheme}>
        <Image
          source={require('../../public/pofilePic.png')}
          style={styles.profileImage}
        />
        <Text style={styles.nameHi}>
          Hi, I am
        </Text>
        <Text style={styles.nameOn}>
          Francis Medrano
        </Text>
        <Text style={styles.title}>
          Full-stack Developer
        </Text>
      </TouchableOpacity>
    </View>
  );
}
