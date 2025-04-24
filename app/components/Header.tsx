import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header({ onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.header, { backgroundColor: color }]}>
      <Text style={styles.text}>Header</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
