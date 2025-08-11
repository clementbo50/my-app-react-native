import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-web';
import MyContextWrapper from './myContextWrapper';
import Toto from './toto';

export default function App() {

  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date);

  useEffect(() => {
    setDate(new Date)
  }, [counter]);


  return (
   <MyContextWrapper>
      <View style={styles.container}>
        <Toto></Toto>
        <Text>{counter}</Text>
        <Text>{date.toTimeString()}</Text>
        <Button title="Appuyer" onPress={() => setCounter(counter + 1)}></Button>
        <StatusBar style="auto" />
      </View>
    </MyContextWrapper>
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
