import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return(
        <View>
            <Text>
                HomeScreen
            </Text>

            <Button title="Aller sur a propos" onPress={() => navigation.navigate('about', {cardId: 14})}></Button>

        </View>
    )
}

export default HomeScreen;