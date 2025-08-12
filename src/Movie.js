import { Image, StyleSheet, Text, View } from "react-native";

const Movie = ({ data }) => {

    return (
        <View style={styles.container}>
            <Text>{data.show.name}</Text>
            <Image 
            source={{uri: data?.show?.image?.medium ?? "#"}}
            style={{width: 250, height: 250}}
            />
            <Text>{data.show.summary}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 20
    }
});

export default Movie;