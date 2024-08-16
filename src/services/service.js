// const clientId = 'be7715b6d6a94bbc9c2b8094866202ce';
// const redirectUri = 'http://localhost:5500'; // Certifique-se de que corresponda ao seu URI de redirecionamento
// const scopes = [
//     'user-read-private',
//     'user-read-email',
//     'playlist-read-private',
//     'playlist-modify-public',
//     'playlist-modify-private',
//     'user-library-read',
//     'user-library-modify'
// ];

// const authEndpoint = 'https://accounts.spotify.com/authorize';
// let token;

// // Função para redirecionar para a página de autenticação do Spotify
// export const getLoginUrl = () => {
//     return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
// };

// // Função para extrair o token do URL
// export const setTokenFromUrl = (url) => {
//     const hash = url
//         .split('#')[1]
//         .split('&')
//         .reduce((initial, item) => {
//             let parts = item.split('=');
//             initial[parts[0]] = decodeURIComponent(parts[1]);
//             return initial;
//         }, {});
//     token = hash.access_token;
// };

// // Função para fazer chamadas à API do Spotify
// const fetchSpotifyAPI = (endpoint, method = 'GET', body = null) => {
//     return axios({
//         method: method,
//         url: `https://api.spotify.com/v1/${endpoint}`,
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         },
//         data: body
//     }).then(response => response.data);
// };

// // Funções para diferentes endpoints
// export const getCurrentUserProfile = () => fetchSpotifyAPI('me');
// export const getCurrentUserPlaylists = () => fetchSpotifyAPI('me/playlists');
// export const getPlaylist = (playlistId) => fetchSpotifyAPI(`playlists/${playlistId}`);
// export const createPlaylist = (userId, name, description) => {
//     const body = {
//         name: name,
//         description: description,
//         public: false
//     };
//     return fetchSpotifyAPI(`users/${userId}/playlists`, 'POST', body);
// };
// export const addTracksToPlaylist = (playlistId, uris) => {
//     const body = { uris: uris };
//     return fetchSpotifyAPI(`playlists/${playlistId}/tracks`, 'POST', body);
// };
// export const getAlbum = (albumId) => fetchSpotifyAPI(`albums/${albumId}`);
// export const getArtist = (artistId) => fetchSpotifyAPI(`artists/${artistId}`);
// export const search = (query, type) => fetchSpotifyAPI(`search?q=${query}&type=${type}`);
