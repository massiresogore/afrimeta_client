import axios from 'axios';

/* const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});
 */

const afimetaUrl = 'http://localhost:8080/api/v1';


export const customFetch = axios.create({
  baseURL: afimetaUrl,
});