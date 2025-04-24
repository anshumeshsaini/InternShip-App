import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import Header from '../../components/Header';

const connections = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    company: 'DesignCo',
    location: 'San Francisco, CA',
    mutualConnections: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: 2,
    name: 'John Davis',
    role: 'Frontend Developer',
    company: 'WebTech',
    location: 'New York, NY',
    mutualConnections: 8,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Product Manager',
    company: 'ProductLabs',
    location: 'Austin, TX',
    mutualConnections: 3,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Backend Developer',
    company: 'CodeBase',
    location: 'Seattle, WA',
    mutualConnections: 2,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 5,
    name: 'Sophia Taylor',
    role: 'Data Scientist',
    company: 'DataWorks',
    location: 'Boston, MA',
    mutualConnections: 6,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  },
];

export default function ConnectScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Suggested Connections</Text>
        {connections.map((connection) => (
          <View key={connection.id} style={[styles.card, { flexDirection: width > 600 ? 'row' : 'column' }]}>
            <Image source={{ uri: connection.image }} style={[styles.image, { alignSelf: width > 600 ? 'flex-start' : 'center' }]} />
            <View style={styles.info}>
              <Text style={styles.name}>{connection.name}</Text>
              <Text style={styles.role}>{connection.role}</Text>
              <Text style={styles.company}>{connection.company}</Text>
              <Text style={styles.location}>{connection.location}</Text>
              <Text style={styles.mutualConnections}>
                {connection.mutualConnections} mutual connections
              </Text>
            </View>
            <View style={[styles.actions, { justifyContent: width > 600 ? 'flex-start' : 'center' }]}>
              <TouchableOpacity style={styles.connectButton}>
                <Text style={styles.connectButtonText}>Connect</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewProfileButton}>
                <Text style={styles.viewProfileButtonText}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    color: '#00BFA5',
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  mutualConnections: {
    fontSize: 12,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  connectButton: {
    backgroundColor: '#00BFA5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  viewProfileButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 8,
  },
  viewProfileButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});