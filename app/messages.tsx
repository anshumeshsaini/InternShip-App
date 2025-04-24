import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, ArrowLeft, MoveVertical as MoreVertical } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const messages = [
  {
    id: 1,
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      online: true,
    },
    lastMessage: 'Hey, I saw your portfolio and I\'m impressed!',
    time: '2m ago',
    unread: 2,
  },
  {
    id: 2,
    user: {
      name: 'John Davis',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      online: false,
    },
    lastMessage: 'When can we schedule a meeting?',
    time: '1h ago',
    unread: 0,
  },
  {
    id: 3,
    user: {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      online: true,
    },
    lastMessage: 'The project looks great! Just a few tweaks needed',
    time: '3h ago',
    unread: 1,
  },
  {
    id: 4,
    user: {
      name: 'Michael Brown',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      online: true,
    },
    lastMessage: 'Thanks for your help with the design',
    time: '5h ago',
    unread: 0,
  },
];

export default function MessagesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <MoreVertical size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages..."
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView style={styles.messagesList}>
        {messages.map((message) => (
          <TouchableOpacity key={message.id} style={styles.messageCard}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: message.user.avatar }} style={styles.avatar} />
              {message.user.online && <View style={styles.onlineIndicator} />}
            </View>

            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.userName}>{message.user.name}</Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
              <View style={styles.messagePreview}>
                <Text
                  style={[
                    styles.lastMessage,
                    message.unread > 0 && styles.unreadMessage,
                  ]}
                  numberOfLines={1}
                >
                  {message.lastMessage}
                </Text>
                {message.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>{message.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
    margin: 16,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  messagesList: {
    flex: 1,
  },
  messageCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#34C759',
    borderWidth: 2,
    borderColor: '#fff',
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
  },
  messagePreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  unreadMessage: {
    color: '#333',
    fontWeight: '500',
  },
  unreadBadge: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});