import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type MusicCardProps ={
    albumCover: string;
    title: string;
    artist: string;
    onPlayPausePress: () => void;
    isPlaying: boolean;
}

const MusicCard: React.FC<MusicCardProps> = ({ albumCover, title, artist, onPlayPausePress, isPlaying }) => {

    return(
        <View style={styles.card}>
            <Image source={{ uri: albumCover}} style={styles.albumCover} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
            <TouchableOpacity onPress={onPlayPausePress} style={styles.playPauseButton}>
                <Icon name={isPlaying ? 'pause' : 'play-arrow'} size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    albumCover: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        color: '#AAA',
        fontSize: 14,
    },
    playPauseButton: {
        marginLeft: 10,
    },
});

export { MusicCard }
