import axios from "axios"

// this should be in a .env file
const API_URL_BASE = 'https://restcountries.com/'
const API_VERSION = 'v3.1'
const API_URL = `${API_URL_BASE}/${API_VERSION}`
//
export const getAllCountries = async (params = {}) => {
    try {

        const url = `${API_URL}/all`
        const response = await axios.get(url)

        return response
    } catch (error) {

        console.log(error)
    }
}