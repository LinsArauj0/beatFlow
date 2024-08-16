import { View, Text, StyleSheet } from 'react-native';


const SearchScreen: React.FC = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Search Screens</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        padding: 20
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})

export { SearchScreen };
