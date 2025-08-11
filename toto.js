import { useContext } from "react";
import { MyContext } from "./myContextWrapper";
import { Text } from "react-native";


const Toto = () => {
    const {title} = useContext(MyContext);

    return (
        <Text>{title}</Text>
    )
}

export default Toto;