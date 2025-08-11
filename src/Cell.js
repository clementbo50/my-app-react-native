import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "./themeContextWrapper";

const Cell = ({value, onPress }) => {
 const { theme } = useContext(ThemeContext);

 const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.color,
        textDecorationColor: theme.color,
        width: 50,
        height: 50, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    symbol: {
        color: theme.color
    }
})

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




export default Cell;