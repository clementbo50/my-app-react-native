import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Board from './src/Board';
import ThemeContextWrapper, { ThemeContext } from './src/themeContextWrapper';

export default function App() {

  return (
    <ThemeContextWrapper>
      <MyApp />
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
    </View>
  )
}
