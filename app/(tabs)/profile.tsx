/* Updated version of your React Native profile screen with a modern green and white theme */

import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, Twitter, Linkedin, Github } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { ProgressBar } from 'react-native-paper';
import { useColorScheme } from 'react-native';

const skills = [
  { name: 'React Native', level: 0.9 },
  { name: 'TypeScript', level: 0.8 },
  { name: 'UI/UX Design', level: 0.85 },
  { name: 'Node.js', level: 0.75 },
  { name: 'Flutter', level: 0.7 },
];

const experiences = [
  {
    id: 1,
    company: 'TechCorp',
    role: 'Mobile Developer Intern',
    duration: 'Jun 2023 - Present',
    logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg',
  },
  {
    id: 2,
    company: 'DesignStudio',
    role: 'UI/UX Design Intern',
    duration: 'Jan 2023 - May 2023',
    logo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
  },
];

const projects = [
  { id: 1, image: 'https://via.placeholder.com/150', title: 'Project A' },
  { id: 2, image: 'https://via.placeholder.com/150', title: 'Project B' },
];

const achievements = ['Top Developer 2023', 'UI/UX Award', 'Hackathon Winner'];

export default function ProfileScreen() {
  const [stats] = useState({ connections: 1200, following: 483, followers: 986 });
  const theme = useColorScheme();
  const headerTranslateY = useSharedValue(0);

  const headerStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: headerTranslateY.value }],
  }));

  const handleScroll = (event) => {
    headerTranslateY.value = withTiming(-event.nativeEvent.contentOffset.y / 2);
  };

  return (
    <ScrollView
      style={[styles.container, theme === 'dark' ? styles.darkTheme : styles.lightTheme]}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <Animated.View style={[styles.header, headerStyle]}>
        <LinearGradient colors={['rgba(10, 123, 143, 0.95)', 'rgba(0, 128, 128, 0.90)']} style={styles.headerContent}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.name}>Anshumesh Saini</Text>
          <Text style={styles.title}>Senior Mobile Developer</Text>
          <View style={styles.locationContainer}>
            <MapPin size={16} color="#fff" />
            <Text style={styles.location}>U.P, India</Text>
          </View>
          <View style={styles.socialMedia}>
            <TouchableOpacity><Twitter size={20} color="#fff" /></TouchableOpacity>
            <TouchableOpacity><Linkedin size={20} color="#fff" /></TouchableOpacity>
            <TouchableOpacity><Github size={20} color="#fff" /></TouchableOpacity>
          </View>
        </LinearGradient>
      </Animated.View>

      <View style={styles.content}>
        <View style={styles.statsContainer}>
          {Object.entries(stats).map(([key, value]) => (
            <View key={key} style={styles.statItem}>
              <Animated.Text style={styles.statNumber}>{value}</Animated.Text>
              <Text style={styles.statLabel}>{key}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillRow}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <ProgressBar progress={skill.level} color="rgba(10, 123, 143, 0.95)" style={styles.progressBar} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <FlatList
            horizontal
            data={projects}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.projectCard}>
                <Image source={{ uri: item.image }} style={styles.projectImage} />
                <Text style={styles.projectTitle}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.map((achievement, index) => (
            <View key={index} style={styles.badge}>
              <Text style={styles.badgeText}>{achievement}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity Timeline</Text>
          <Text style={styles.timelineText}>Coming soon...</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerContent: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImageContainer: {
    borderWidth: 4,
    borderColor: '#ffffff',
    borderRadius: 60,
    padding: 2,
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  location: {
    marginLeft: 4,
    color: '#ffffff',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    gap: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0, 128, 128, 0.90)',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: 'rgba(0, 128, 128, 0.90)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(0, 128, 128, 0.90)',
    marginBottom: 16,
  },
  skillRow: {
    marginBottom: 8,
  },
  skillName: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 128, 128, 0.90)',
    marginBottom: 4,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0f7f9',
  },
  projectCard: {
    marginRight: 16,
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  projectTitle: {
    textAlign: 'center',
    marginTop: 4,
    color: 'rgba(0, 128, 128, 0.90)',
  },
  badge: {
    backgroundColor: '#e0f7f9',
    padding: 8,
    borderRadius: 16,
    marginBottom: 8,
  },
  badgeText: {
    color: 'rgba(0, 128, 128, 0.90)',
    fontSize: 14,
    fontWeight: '500',
  },
  timelineText: {
    fontSize: 14,
    color: '#666',
  },
  darkTheme: {
    backgroundColor: '#0d0d0d',
  },
  lightTheme: {
    backgroundColor: '#ffffff',
  },
});