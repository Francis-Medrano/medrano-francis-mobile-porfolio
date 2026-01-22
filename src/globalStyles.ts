import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222',
  },
  title: {
    fontSize: 18,
    color: '#666',
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 8,
    color: '#333',
    alignSelf: 'flex-start',
  },
  sectionContent: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  skill: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
    fontSize: 14,
    color: '#333',
  },
});
