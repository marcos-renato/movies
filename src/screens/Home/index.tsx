import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Oque você quer assistir hoje?</Text>
            <View style={styles.containerImput}>
                <TextInput  placeholder="Buscar"/>
            </View>
        </View>
    );
}