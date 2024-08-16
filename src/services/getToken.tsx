// import axios from "axios";

// const client_id = "be7715b6d6a94bbc9c2b8094866202ce";
// const client_secret = "97cefcbb33234922a1ce3425cc6ef0db";

// const getToken = async () => {
//     const authString = `${client_id}:${client_secret}`;
//     const authHeader = `Basic ${Buffer.from(authString).toString("base64")}`;

//     try {
//         const response = await axios.post(
//             "https://accounts.spotify.com/api/token",
//             "grant_type=client_credentials",
//             {
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                     Authorization: `Basic ${authHeader}`,
//                 },
//             }
//         );
//         return response.data.access_token;
//     } catch (error) {
//         console.log("Erro ao obter token: ", error);
//         return null;
//     }
// };

// export async function getAccessToken(clientId: string, code: string): Promise<string> {
//     const verifier = localStorage.getItem("verifier");

//     const params = new URLSearchParams();
//     params.append("client_id", clientId);
//     params.append("grant_type", "authorization_code");
//     params.append("code", code);
//     params.append("redirect_uri", "http://localhost:5173/callback");
//     params.append("code_verifier", verifier!);

//     const result = await fetch("https://accounts.spotify.com/api/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: params
//     });

//     const { access_token } = await result.json();
//     return access_token;
// }

// export { getToken };
