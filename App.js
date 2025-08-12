import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { search } from './src/api';
import Movie from './src/Movie';


export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    search(searchTerm).then((response) => setMovies(response.data));
  }, [searchTerm]);

  return (
    <View style={styles.container}>
       <Text>Retrouvez nos derniers films ! </Text>
        <>
          <TextInput 
            style={styles.input}
            value={searchTerm} 
            onChangeText={(text) => setSearchTerm(text)}>  
          </TextInput>
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