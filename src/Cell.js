import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Cell = ({value, onPress }) => {
    return(
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        {value !== -1 && (
            <Text style={styles.symbol}>
            {value === 0 ? 'O' : 'X'}
            </Text>
        )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "black",
        width: 50,
        height: 50, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})


export default Cell;