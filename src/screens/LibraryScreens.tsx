import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const LibraryScreens: React.FC = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Library Screens</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})

export { LibraryScreens };
