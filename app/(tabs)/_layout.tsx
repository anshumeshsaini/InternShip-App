import { Tabs } from 'expo-router';
import { Chrome as Home, Compass, Bell, User, MessageCircle } from 'lucide-react-native';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 3,
        },
        tabBarActiveTintColor: '#00BFA5',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontWeight: '600',
          fontSize: 12,
          marginTop: 0,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
              <LinearGradient
                colors={focused ? ['rgba(10, 123, 143, 0.9)', 'rgba(0, 128, 128, 0.85)'] : ['transparent', 'transparent']}
                style={styles.iconGradient}
              >
                <Home size={22} color={focused ? '#fff' : color} />
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="connect"
        options={{
          title: 'Connect',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
              <LinearGradient
                colors={focused ? ['rgba(10, 123, 143, 0.9)', 'rgba(0, 128, 128, 0.85)'] : ['transparent', 'transparent']}
                style={styles.iconGradient}
              >
                <Compass size={22} color={focused ? '#fff' : color} />
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notify',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
              <LinearGradient
                colors={focused ? ['rgba(10, 123, 143, 0.9)', 'rgba(0, 128, 128, 0.85)'] : ['transparent', 'transparent']}
                style={styles.iconGradient}
              >
                <Bell size={22} color={focused ? '#fff' : color} />
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
              <LinearGradient
                colors={focused ? ['rgba(10, 123, 143, 0.9)', 'rgba(0, 128, 128, 0.85)'] : ['transparent', 'transparent']}
                style={styles.iconGradient}
              >
                <User size={22} color={focused ? '#fff' : color} />
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ size, color, focused }) => (
            <View style={focused ? styles.activeIconContainer : styles.inactiveIconContainer}>
              <LinearGradient
                colors={focused ? ['rgba(10, 123, 143, 0.9)', 'rgba(0, 128, 128, 0.85)'] : ['transparent', 'transparent']}
                style={styles.iconGradient}
              >
                <MessageCircle size={22} color={focused ? '#fff' : color} />
              </LinearGradient>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeIconContainer: {
    padding: 8,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 191, 165, 0.12)',
    shadowColor: '#00BFA5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  inactiveIconContainer: {
    padding: 8,
    borderRadius: 18,
  },
  iconGradient: {
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});