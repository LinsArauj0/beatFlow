import React, { createContext, useContext, useState, useEffect } from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { SPOTIFY_CLIENT_ID } from '../config'; // Ajuste o caminho conforme necessário

const AuthContext = createContext(null);

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: SPOTIFY_CLIENT_ID,
      scopes: ['user-read-private', 'user-read-email'],
      redirectUri: makeRedirectUri({
        scheme: 'your.app',
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      setToken(access_token);
      SecureStore.setItemAsync('spotify_token', access_token);
    }
  }, [response]);

  useEffect(() => {
    promptAsync();
  }, [request]);

  return (
    <AuthContext.Provider value={token}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
