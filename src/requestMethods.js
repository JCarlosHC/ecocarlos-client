import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjA4ZWQ5NDE5NTAwM2QzMWNlMmQ4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTA4MDc5NiwiZXhwIjoxNjUxMzM5OTk2fQ.a7ujAcH_HIEEPn2XA-XvOyrkzK5r6uIx-8IzcZ5wUNQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});