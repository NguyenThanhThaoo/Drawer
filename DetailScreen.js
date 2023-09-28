import { View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
const DetailScreen = ()=>{
    return(
        <View style={styles.container}>
            <Text>Detail Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default DetailScreen;

