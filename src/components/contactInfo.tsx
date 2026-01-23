import React, { useState } from 'react';
import { View, Text, Linking, TouchableOpacity, TextInput, Alert } from 'react-native';
import { globalStyles } from '../globalStyles';

type ContactInfoProps = {
  styles: ReturnType<typeof StyleSheet.create>;
};

export default function ContactInfo({ styles }: ContactInfoProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('All fields are required.');
      return;
    }
    // ...handle actual submission logic here...
    Alert.alert('Message sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

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

      {/* Contact Form */}
      <View style={styles.contactForm}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, styles.messageBox]}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          style={[
            styles.submitButton,
            (!name.trim() || !email.trim() || !message.trim()) && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!name.trim() || !email.trim() || !message.trim()}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
