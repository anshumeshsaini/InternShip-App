import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface PostProps {
  username: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

export default function Post({ username, content, imageUrl, likes, comments }: PostProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffffff', '#f8f9fa']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{username}</Text>
        </View>
        
        <Image
          source={{ uri: imageUrl }}
          style={styles.postImage}
        />
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Heart size={24} color="#FF3B30" />
            <Text style={styles.actionText}>{likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <MessageCircle size={24} color="#007AFF" />
            <Text style={styles.actionText}>{comments}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Share2 size={24} color="#8E8E93" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.content}>{content}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradient: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  actionText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#8E8E93',
  },
  content: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 20,
  },
});