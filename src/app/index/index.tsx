import { Image, Text, View } from "react-native"
import { styles } from "./style"



export default function Index(){
    return (
     <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.headerImage} source={require("../assets/images/images.jpeg")} />
            <Text style={styles.coffeeName}>Concessionária do Enzo</Text>
            <Text style={styles.subtitle}>O futuro dos BYD!</Text>
        </View>
     </View>
    )
}

