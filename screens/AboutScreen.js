import { useNavigation, useRoute } from "@react-navigation/native";

import { View, Text, Button } from "react-native"

const AboutScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return(
        <View>
            <Text>
                AboutScreen
            </Text>
            <Text>
                {route?.params?.cardId}
            </Text>

            <Button title="Revenir en arrière" onPress={() => navigation.goBack() }></Button>
            {/* empile les écrans les un sur les autres avec push */}
            <Button title="Aller sur a propos via push" onPress={() => navigation.push('about')}></Button>

            <Button title="Aller sur a propos via navigate" onPress={() => navigation.navigate('about')}></Button>
        </View>
    );
}

export default AboutScreen;