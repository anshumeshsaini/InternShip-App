import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MessageCircle, Search, Bell, Menu } from 'lucide-react-native';
import { useState, useRef, useEffect } from 'react';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Header() {
  const router = useRouter();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const profileScale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(-20)).current;
  
  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(profileScale, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const pulseProfile = () => {
    Animated.sequence([
      Animated.timing(profileScale, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(profileScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  };

  const handleSearchToggle = () => {
    if (!isSearchActive) {
      setIsSearchActive(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        })
      ]).start(() => setIsSearchActive(false));
    }
  };

  return (
    <Animated.View style={[styles.headerContainer, { transform: [{ translateY }] }]}>
      <LinearGradient
        colors={['rgba(10, 123, 143, 0.95)', 'rgba(0, 128, 128, 0.90)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.blurOverlay}>
          <View style={styles.leftSection}>
            <TouchableOpacity onPress={() => {
              pulseProfile();
              router.push('/(tabs)/profile');
            }}>
              <Animated.View style={[styles.profileContainer, { transform: [{ scale: profileScale }] }]}>
                <LinearGradient
                  colors={['#2196F3', '#00BCD4']}
                  style={styles.profileBorder}
                >
                  <Image
                    source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }}
                    style={styles.profileImage}
                  />
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>
            <View>
              <Text style={styles.greeting}>Welcome back,</Text>
              <Text style={styles.username}>Anshu Saini</Text>
            </View>
          </View>
          
          {isSearchActive ? (
            <Animated.View 
              style={[
                styles.searchContainer, 
                { 
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }]
                }
              ]}
            >
              <Search size={16} color="#666" style={styles.searchIcon} />
              <TextInput
                placeholder="Search internships..."
                style={styles.searchInput}
                placeholderTextColor="#666"
                autoFocus
                onBlur={handleSearchToggle}
              />
            </Animated.View>
          ) : (
            <View style={styles.rightControls}>
              <TouchableOpacity onPress={handleSearchToggle} style={styles.iconButton}>
                <Search size={20} color="#fff" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => router.push('/(tabs)/notifications')}
              >
                <Bell size={20} color="#fff" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => router.push('/(tabs)/messages')}
              >
                <MessageCircle size={20} color="#fff" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuButton}
                onPress={() => router.push('/(tabs)/profile')}
              >
                <Menu size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 0,
    zIndex: 100,
  },
  blurOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    paddingTop: 50,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    shadowColor: '#4facfe',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  profileBorder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.9)',
  },
  greeting: {
    marginLeft: 10,
    fontSize: 10,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.75)',
    letterSpacing: 0.2,
  },
  username: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.3,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
    width: width * 0.65,
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 100,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    padding: 0,
    fontWeight: '500',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  menuButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
});