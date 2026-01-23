import React from 'react';
import { ScrollView } from 'react-native';
import MainPortfolio from './pages/main';

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <MainPortfolio />
    </ScrollView>
  );
}
