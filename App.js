import { StatusBar } from 'expo-status-bar';
import img from './assets/donut.jpg';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Board from './src/Board';
import ThemeContextWrapper, { ThemeContext } from './src/themeContextWrapper';


export default function App() {
  const [text, setText] = useState('');
  return (
    <ThemeContextWrapper>
       {/* <MyApp /> */}
      <ScrollView>
          <TextInput style={{ backgroundColor: "gray" }} value={text} onChangeText={(text) => setText(text)} />
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
          <Text>Hello world ! </Text>
        </ScrollView>
                      
    </ThemeContextWrapper>
  );
}

const MyApp = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.background,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });


  return(
    <View style={styles.container}>
      <Board size={3} />
      <Button title="Changer de thème" onPress={() => toggleTheme() }></Button>
      <Button title="Afficher une alerte" onPress={() => Alert.alert('Titre', 'Contenu de l\'alerte')} />

    </View>
  )
} 
