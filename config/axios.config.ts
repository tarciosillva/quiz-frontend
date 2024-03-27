import axios from "axios";

export const backendApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_SERVER_API
})