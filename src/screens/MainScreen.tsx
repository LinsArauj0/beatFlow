import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useAuth } from '@src/services/AuthContext';

interface Profile {
  display_name: string;
}

interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
}

const MainScreen: React.FC = () => {
  const token = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        const response = await axios.get<Profile>('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      };

      const fetchTopTracks = async () => {
        const response = await axios.get<{ items: Track[] }>('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTopTracks(response.data.items);
      };

      fetchProfile();
      fetchTopTracks();
    }
  }, [token]);

  return (
    <View style={styles.container}>
      {profile ? (
        <>
          <Text style={styles.header}>Hello, {profile.display_name}</Text>
          <FlatList
            data={topTracks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.track}>
                <Text>{item.name} by {item.artists.map(artist => artist.name).join(', ')}</Text>
              </View>
            )}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  track: {
    marginBottom: 8,
  },
});

export default MainScreen;
