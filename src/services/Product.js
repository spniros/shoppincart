import axios from "axios";
let apiUrl = 'https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments';

export const getProducts=() => axios.get(apiUrl);