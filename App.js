import { StatusBar } from 'expo-status-bar';
import img from './assets/donut.jpg';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Board from './src/Board';
import ThemeContextWrapper, { ThemeContext } from './src/themeContextWrapper';


export default function App() {

  return (
    <ThemeContextWrapper>
       <MyApp />
      {/*   <Image source ={img} /> */}
      {/*  <Image style={{ width: 250, height: 250 }}source={{uri: "https://t3.ftcdn.net/jpg/02/45/78/98/360_F_245789812_U5YAKoU5bO1vPUlmMygG3RYwRQcDsjuD.jpg"}} /> */}
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
