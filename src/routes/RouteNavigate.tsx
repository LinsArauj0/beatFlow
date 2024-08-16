import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LoginScreen } from "@src/screens/LoginScreen";
import SignupScreen from "@src/screens/SignupScreen";
import { SignUpHome } from "@src/screens/SignUpHome";
import { HomeScreen } from "@src/screens/HomeScreen";
import { LibraryScreens } from "@src/screens/LibraryScreens";
import { SearchScreen } from "@src/screens/SearchScreen";
import MainScreen from "@src/screens/MainScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RouteNavigate: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: "#1E1E1E", // Define a cor de fundo da barra
                        },
                        headerTintColor: "#fff",
                        title: "",
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignupScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: "#1E1E1E", // Define a cor de fundo da barra
                        },
                        headerTintColor: "#fff",
                        title: "",
                    }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeStack}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeStack: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 0.02)', // Barra transparente
                    position: 'absolute', // Para remover a linha cinza
                    borderTopWidth: 0, // Remove a linha de borda superior
                    elevation: 0, // Remove a sombra no Android
                    height: 72,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 50,
                    marginBottom: 7,
                    paddingBottom: 5
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: string;

                    switch (route.name) {
                        case "Home":
                            iconName = "home";
                            break;
                        case "Search":
                            iconName = "search";
                            break;
                        case "Library":
                            iconName = "library-music";
                            break;
                        default:
                            iconName = "circle";
                            break;
                    }

                    return <Icon name={iconName} size={size * 1.4} color={color} />;
                },
                tabBarLabelStyle: {
                    fontSize: 14, // Tamanho da fonte do título
                    fontWeight: "bold", // Estilo da fonte do título
                    // color: 'rgba(255, 255, 255, 0.75)'
                },
                tabBarActiveTintColor: '#FFFFFFBF', // Cor do rótulo ativo
                tabBarInactiveTintColor: '#FFFFFFBF', // Cor do rótulo inativo
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Pesquisa",
                }}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreens}
                options={{
                    headerShown: false,
                    tabBarLabel: "Biblioteca",
                }}
            />
        </Tab.Navigator>
    );
};

export { RouteNavigate };
