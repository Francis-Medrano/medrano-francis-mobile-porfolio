import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../src/globalStyles';
import ProfileNname from '../src/components/profileNname';
import Bio from '../src/components/bio';
import Skills from '../src/components/skills';
import ContactInfo from '../src/components/contactInfo';
import ListOfProject from '../src/components/listOfproject';

export default function MainPortfolio() {
  const styles = globalStyles;

  return (
    <View style={styles.container}>
      <ProfileNname styles={styles} />
      <Bio styles={styles} />
      <Skills styles={styles} />
      <ListOfProject styles={styles} />
      <ContactInfo styles={styles} />
    </View>
  );
}
