export const CONFIG = {
  accessTokenSecret: 'accessToken',
  accessTokenExpiresInMinutes: '15',
  refreshTokenSecret: 'refreshToken',
  refreshTokenExpiresInMinutes: '10080',
  databaseFile: 'database.json',
  urlRewriteFile: 'url-rewrite.json',
  proxyServer: 'https://huydq.dev',
  proxyUrl: '/blog',
  defaultPort: 8000,
};

//! Para que funcione hay que instalar las librerías necesarias:
//? npm i 
//! en caso de error:
//? npm i -force

//!Para activar el servidor:
//? node server.js
//! se aloja en el puerto 8000

