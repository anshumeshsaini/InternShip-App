import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, Send } from 'lucide-react-native';
import Animated from 'react-native-reanimated';

// Mock data for messages
const chats = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    lastMessage: 'Id love to connect about the internship opportunity!',
    time: '10:30 AM',
    unread: 2,
  },
  {
    id: '2',
    name: 'David Wilson',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    lastMessage: 'Your portfolio looks amazing! When can we chat?',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: '3',
    name: 'Emma Thompson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    lastMessage: 'The interview is scheduled for Thursday at 2 PM',
    time: 'Yesterday',
    unread: 1,
  },
  {
    id: '4',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    lastMessage: 'Thanks for sending your resume!',
    time: 'Tuesday',
    unread: 0,
  },
  {
    id: '5',
    name: 'Jessica Lee',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    lastMessage: 'Great meeting you at the tech conference!',
    time: 'Monday',
    unread: 0,
  },
  {
    id: '6',
    name: 'Robert Brown',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    lastMessage: 'Would you be interested in applying to our company?',
    time: 'Last week',
    unread: 0,
  },
];

export default function MessagesScreen() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredChats, setFilteredChats] = useState(chats);

  const handleSearch = (text: string): void => {
    setSearchQuery(text);
    const filtered = chats.filter(chat => 
      chat.name.toLowerCase().includes(text.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredChats(filtered);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(10, 123, 143, 0.95)', 'rgba(0, 128, 128, 0.90)']}
        style={styles.header}
      >
        <Text style={styles.title}>Messages</Text>
        <View style={styles.searchContainer}>
          <Search size={16} color="#666" style={styles.searchIcon} />
          <TextInput
            placeholder="Search conversations..."
            style={styles.searchInput}
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </LinearGradient>

      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
        renderItem={({ item, index }) => (
          <Animated.View 
            style={[styles.chatItem, { opacity: 1 }]}
          >
            <TouchableOpacity style={styles.chatButton}>
              <View style={styles.avatarContainer}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                {item.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{item.unread}</Text>
                  </View>
                )}
              </View>
              <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatTime}>{item.time}</Text>
                </View>
                <Text 
                  style={[
                    styles.chatMessage, 
                    item.unread > 0 && styles.unreadMessage
                  ]}
                  numberOfLines={1}
                >
                  {item.lastMessage}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No conversations found</Text>
          </View>
        }
      />

      <TouchableOpacity 
        style={styles.newMessageButton}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['rgba(10, 123, 143, 0.95)', 'rgba(0, 128, 128, 0.9)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.newMessageGradient}
        >
          <View style={styles.iconWrapper}>
            <Send size={22} color="#fff" strokeWidth={2.5} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    padding: 0,
  },
  chatList: {
    padding: 16,
    paddingTop: 8,
  },
  chatItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(10, 123, 143, 0.2)',
  },
  unreadBadge: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#FF5252',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  unreadText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
  },
  unreadMessage: {
    fontWeight: '600',
    color: '#333',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
  newMessageButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    shadowColor: '#00BFA5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 32,
  },
  newMessageGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.9)',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-20deg' }],
  },
});
