import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Heart, Share2, Bookmark, MapPin, Clock, DollarSign } from 'lucide-react-native';
import { useState } from 'react';

interface InternshipCardProps {
  company: string;
  title: string;
  description: string;
  logo: string;
  location: string;
  duration: string;
}

export default function InternshipCard({
  company,
  title,
  description,
  logo,
  location,
  duration,
}: InternshipCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const scaleAnim = new Animated.Value(1);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [{ scale: scaleAnim }],
        },
      ]}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
        <View style={styles.header}>
          <Image source={{ uri: logo }} style={styles.logo} />
          <View style={styles.headerText}>
            <Text style={styles.company}>{company}</Text>
            <View style={styles.locationContainer}>
              <MapPin size={14} color="#666" />
              <Text style={styles.location}>{location}</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
          
          <View style={styles.metaInfo}>
            <View style={styles.metaItem}>
              <Clock size={14} color="#00BFA5" />
              <Text style={styles.metaText}>{duration}</Text>
            </View>
            <View style={styles.metaItem}>
              <DollarSign size={14} color="#00BFA5" />
              <Text style={styles.metaText}>Paid</Text>
            </View>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity 
            style={[styles.actionButton, liked && styles.actionButtonActive]}
            onPress={() => setLiked(!liked)}>
            <Heart size={20} color={liked ? '#FF5A5F' : '#666'} fill={liked ? '#FF5A5F' : 'none'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Share2 size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionButton, saved && styles.actionButtonActive]}
            onPress={() => setSaved(!saved)}>
            <Bookmark 
              size={20} 
              color={saved ? '#00BFA5' : '#666'} 
              fill={saved ? '#00BFA5' : 'none'} 
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  company: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  content: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00BFA5',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  metaInfo: {
    flexDirection: 'row',
    marginTop: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  metaText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#00BFA5',
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  actionButton: {
    marginLeft: 20,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonActive: {
    backgroundColor: '#f0f9ff',
  },
});