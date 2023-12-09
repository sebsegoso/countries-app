import { objectToQueryParams } from "@/utils/objectUtils"

// this should be in a .env file
const API_URL_BASE = 'https://restcountries.com/'
const API_VERSION = 'v3.1'
const API_URL = `${API_URL_BASE}/${API_VERSION}`
//
export const getCountries = async ({ service = "all", serviceValue = "", params = {} }) => {
    try {
        const url = `${API_URL}/${service}${serviceValue ? '/' + serviceValue : ""}?${objectToQueryParams(params)}`
        const res = await fetch(url);

        if (!res?.ok) {
            throw new Error("Failed to fetch countries");
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}
