import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from '../../components/Header';
import InternshipCard from '../../components/InternshipCard';

const internships = [
  {
    id: 1,
    company: 'TechCorp',
    title: 'Frontend Developer Intern',
    description: 'Join our dynamic team and work on cutting-edge web applications using React and TypeScript.',
    logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg',
    location: 'San Francisco, CA',
    duration: '3 months',
  },
  {
    id: 2,
    company: 'DesignStudio',
    title: 'UI/UX Design Intern',
    description: 'Create beautiful and intuitive user interfaces for our clients in various industries.',
    logo: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    location: 'New York, NY',
    duration: '6 months',
  },
  {
    id: 3,
    company: 'DataTech',
    title: 'Data Science Intern',
    description: 'Work with big data and machine learning models to solve real-world problems.',
    logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    location: 'Boston, MA',
    duration: '4 months',
  },
  {
    id: 4,
    company: 'CloudSys',
    title: 'Cloud Engineering Intern',
    description: 'Learn and work with AWS, Azure, and modern cloud infrastructure.',
    logo: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    location: 'Seattle, WA',
    duration: '3 months',
  },
  {
    id: 5,
    company: 'MobileApps',
    title: 'Mobile Developer Intern',
    description: 'Build native mobile applications for iOS and Android platforms.',
    logo: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    location: 'Austin, TX',
    duration: '6 months',
  },
];

export default function HomeScreen() {
  const [headerColor, setHeaderColor] = useState('#000'); // Default color

  const handleHeaderClick = () => {
    setHeaderColor((prevColor) => (prevColor === '#000' ? 'red' : '#000'));
  };

  return (
    <View style={styles.container}>
      <Header onPress={handleHeaderClick} color={headerColor} />
      <ScrollView style={styles.content}>
        {internships.map((internship) => (
          <InternshipCard key={internship.id} {...internship} />
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
    paddingTop: 16,
  },
});