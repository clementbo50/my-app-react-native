import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Movie from './src/Movie';


export default function Main({ movies, onFetchMovies }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
       <Text>Retrouvez nos derniers films ! </Text>
        <>
        <TextInput 
          style={styles.input}
          value={searchTerm} 
          onChangeText={(text) => {
            setSearchTerm(text);
            onFetchMovies(text);
          }}
        />
        </>
        <ScrollView>
          {
            movies.map((data) => <Movie data={data}></Movie> )
          }
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'stretch',
    margin: 10,
    padding: 10,
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'grey',
    padding: 20,
    margin: 20,
  }
});