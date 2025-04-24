import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, MessageCircle, UserPlus, Briefcase, Bell, Check } from 'lucide-react-native';
import { useState, useRef } from 'react';

const notifications = [
  {
    id: 1,
    type: 'like',
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    content: 'liked your portfolio',
    time: '2 minutes ago',
    read: false,
  },
  {
    id: 2,
    type: 'connection',
    user: {
      name: 'John Davis',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    content: 'accepted your connection request',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'job',
    user: {
      name: 'TechCorp',
      avatar: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    content: 'posted a new internship matching your skills',
    time: '3 hours ago',
    read: true,
  },
  {
    id: 4,
    type: 'message',
    user: {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    content: 'sent you a message about the project',
    time: '5 hours ago',
    read: true,
  },
  {
    id: 5,
    type: 'like',
    user: {
      name: 'Michael Brown',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    content: 'liked your recent post',
    time: '1 day ago',
    read: true,
  }
];

const NotificationIcon = ({ type }: { type: string }) => {
  const iconStyle = {
    padding: 8,
    borderRadius: 12,
    backgroundColor: type === 'like' ? '#FFE5E5' :
                    type === 'connection' ? '#E3F2FD' :
                    type === 'job' ? '#E8F5E9' :
                    '#EDE7F6'
  };

  return (
    <View style={iconStyle}>
      {type === 'like' && <Heart size={20} color="#FF3B30" />}
      {type === 'connection' && <UserPlus size={20} color="#2196F3" />}
      {type === 'job' && <Briefcase size={20} color="#4CAF50" />}
      {type === 'message' && <MessageCircle size={20} color="#673AB7" />}
    </View>
  );
};

export default function NotificationsScreen() {
  const [notificationList, setNotificationList] = useState(notifications);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const markAllAsRead = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();

    setNotificationList(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffffff', '#f8f9fa']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Bell size={24} color="#333" style={styles.bellIcon} />
          <Text style={styles.headerTitle}>Notifications</Text>
        </View>
        <TouchableOpacity
          style={styles.markAllButton}
          onPress={markAllAsRead}
        >
          <Check size={16} color="#007AFF" />
          <Text style={styles.markAllText}>Mark all read</Text>
        </TouchableOpacity>
      </LinearGradient>

      <ScrollView style={styles.notificationList}>
        <Animated.View style={{ opacity: fadeAnim }}>
          {notificationList.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[
                styles.notificationCard,
                !notification.read && styles.unreadCard
              ]}
            >
              <Image
                source={{ uri: notification.user.avatar }}
                style={styles.avatar}
              />
              <View style={styles.notificationContent}>
                <View style={styles.notificationHeader}>
                  <Text style={styles.username}>{notification.user.name}</Text>
                  <NotificationIcon type={notification.type} />
                </View>
                <Text style={styles.notificationText}>{notification.content}</Text>
                <Text style={styles.time}>{notification.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </ScrollView>
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
    paddingTop: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bellIcon: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  markAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  markAllText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  notificationList: {
    flex: 1,
  },
  notificationCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  unreadCard: {
    backgroundColor: '#f0f9ff',
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  notificationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    lineHeight: 20,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});