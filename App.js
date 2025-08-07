import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Exemple } from './exemple';
import ComposantEtat from './ComposantEtat';
/* import Exemple from './exemple'; */

export default function App() {

  return (
  
    <View style={styles.container}>
      <Text>Hello world ! </Text>
      <StatusBar style="auto" />
      <Exemple title="toto" />
      <ComposantEtat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
