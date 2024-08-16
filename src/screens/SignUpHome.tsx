import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { CustomButton } from "@src/components/CustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@src/routes/types"; // Importar os tipos do seu navegador
import MainScreen from "./MainScreen";
import { AuthProvider } from "@src/services/AuthContext";

const SignUpHome: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image source={require("../assets/BeatFlow_Logo.png")} />

            <View style={styles.subContainer}>
                <CustomButton
                    title="Sign up"
                    onPress={() => navigation.navigate("SignUp")}
                />
                <CustomButton
                    title="Log in"
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
            <AuthProvider>
                <MainScreen />
            </AuthProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        justifyContent: "space-evenly",
    },
    subContainer: {
        alignItems: "center",
    },
});

export { SignUpHome };
