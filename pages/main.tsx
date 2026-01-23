import React, { useState } from 'react';
import { View } from 'react-native';
import { globalStyles, darkStyles } from '../src/globalStyles';
import ProfileNname from '../src/components/profileNname';
import Bio from '../src/components/bio';
import Skills from '../src/components/skills';
import ContactInfo from '../src/components/contactInfo';
import ListOfProject from '../src/components/listOfproject';

export default function MainPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const styles = darkMode ? darkStyles : globalStyles;

  const handleToggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <View style={styles.container}>
      <ProfileNname styles={styles} onToggleTheme={handleToggleTheme} />
      <Bio styles={styles} />
      <Skills styles={styles} />
      <ListOfProject styles={styles} />
      <ContactInfo styles={styles} />
    </View>
  );
}
