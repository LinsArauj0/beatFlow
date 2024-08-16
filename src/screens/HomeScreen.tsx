import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { getToken } from "@src/services/getToken";
import { getLoginUrl, setTokenFromUrl, getCurrentUserProfile } from '../services/service';

const HomeScreen: React.FC = () => {
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/40');
    const [selectedCategory, setSelectedCategory] = useState('For you');
    const [artist, setArtist] = useState(null);

    const pickImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert("Permissão para acessar a galeria de fotos é necessária!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!pickerResult.canceled && pickerResult.assets && pickerResult.assets.length > 0) {
            const imageUri = pickerResult.assets[0].uri;
            if (imageUri) {
                setProfileImage(imageUri);
            } else {
                console.error('URI da imagem não encontrada');
            }
        }
        
    };

    const categories = [
        'Para você', 'Relaxar', 'Treinar', 'Viajar', 'Energia', 'Foco'];

    const recentlyPlayed = [
        { id: '1', title: 'Inside Out', imageUrl: 'https://via.placeholder.com/100' },
        { id: '2', title: 'Young', imageUrl: 'https://via.placeholder.com/100' },
        { id: '3', title: 'Beach House', imageUrl: 'https://via.placeholder.com/100' },
        { id: '4', title: 'Kills You', imageUrl: 'https://via.placeholder.com/100' },
    ];

    const mixesForYou = [
        { id: '1', title: 'Mix 1', imageUrl: 'https://via.placeholder.com/100' },
        { id: '2', title: 'Mix 2', imageUrl: 'https://via.placeholder.com/100' },
        { id: '3', title: 'Mix 3', imageUrl: 'https://via.placeholder.com/100' },
    ];

    const renderRecentlyPlayedItem = ({ item }: { item: any }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );

    const renderMixesItem = ({ item }: { item: any }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );

    const renderCategoryButton = (category: string) => (
        <TouchableOpacity
            key={category}
            style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonSelected,
            ]}
            onPress={() => setSelectedCategory(category)}
        >
            <Text
                style={[
                    styles.categoryButtonText,
                    selectedCategory === category && styles.categoryButtonTextSelected,
                ]}
            >
                {category}
            </Text>
        </TouchableOpacity>
    );

    const handleNotificationPress = () => {
        Alert.alert("Notificação", "Você clicou no ícone de notificação!");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileText}>
                        <Text style={styles.greeting}>👋 Olá Logan,</Text>
                        <Text style={styles.subtitle}>Boa Noite</Text>
                    </View>
                    <View style={styles.profileIcons}>
                        <TouchableOpacity onPress={handleNotificationPress}>
                            <Icon name="notifications-none" size={24} color="#FFFFFF" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pickImage}>
                            <Image
                                source={{ uri: profileImage }}
                                style={styles.profileImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                    {categories.map(renderCategoryButton)}
                </ScrollView>

                <Text style={styles.sectionTitle}>Reproduzido Recentemente</Text>
                <FlatList
                    horizontal
                    data={recentlyPlayed}
                    renderItem={renderRecentlyPlayedItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={styles.sectionTitle}>Mixes para Você</Text>
                <FlatList
                    horizontal
                    data={mixesForYou}
                    renderItem={renderMixesItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        height: 72,
        marginBottom: 20
    },
    profileText: {
        flexDirection: 'column',
    },
    greeting: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    profileIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 15,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    categoryButton: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#333',
        marginRight: 10,
    },
    categoryButtonSelected: {
        backgroundColor: '#555',
    },
    categoryButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    categoryButtonTextSelected: {
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        marginVertical: 10,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    item: {
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    text: {
        color: '#FFFFFF',
        marginTop: 5,
        textAlign: 'center',
    },
});

export { HomeScreen };
