import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface NotificationItemProps {
  type: 'like' | 'comment' | 'follow';
  username: string;
  time: string;
  message: string;
}

export default function NotificationItem({ type, username, time, message }: NotificationItemProps) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#ffffff', '#f8f9fa']}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 12,
  },
  content: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: '#8E8E93',
  },
});