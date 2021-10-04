import axios from 'axios'; 
//creo la URL del endpoint 
const BASE_URL = "https://rickandmortyapi.com/api/";

//creo la funcion API con axios
const API = axios.create({
    baseURL: BASE_URL
});

export default API; 