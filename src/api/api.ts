import axios from "axios";
import { infoAlert } from "hooks/alert";

/**
 * The function `updateUserProfile` sends a POST request to an API endpoint with the provided request
 * data and returns the response.
 * @param reqData - The `reqData` parameter is an object that contains the data to be sent in the
 * request body. It should be in the following format:
 * @returns The response from the API call is being returned.
 */
export const updateUserProfile = async (reqData) => {
    try {
        const url = process.env.REACT_APP_UPDATE_USER_URL;
        const response = await axios.post(url, JSON.stringify(reqData));
        if (response) {
            // if (response.status === 200) {
            infoAlert("Your profile is updated successfully!")
            return response.data;
        }
    } catch (err) {
        console.log("Error updateUserProfile", err)
    }
}

/**
 * The function `getUserDatabyAddress` is an asynchronous function that takes an address as a parameter
 * and makes a GET request to a specific URL to retrieve user data.
 * @param {string} address - The `address` parameter is a string that represents the address of a user.
 * @returns the data obtained from the API request.
 */
export const getUserDatabyAddress = async (address: string) => {
    const url = process.env.REACT_APP_GET_USER_DATA_URL + address;
    try {
        const response = await axios.get(url);
        if (response) {
            return response.data;
        }

    } catch (error) {
        console.error("Error getUserDatabyAddress", error);
    }
}

/**
 * The function `getUserPoints` retrieves data from an API, filters out items with no points or points
 * equal to zero, and sorts the remaining items in descending order based on their points.
 * @returns The function `getUserPoints` returns a promise that resolves to an array of objects. Each
 * object represents an item and contains a `points` property. The array is sorted in descending order
 * based on the `points` value.
 */
export const getUserPoints = async () => {
    try {
        const url = process.env.REACT_APP_GET_USER_DATA_URL
        const response = await axios.get(url);
        const data = response.data; // Access the data property of the Axios response

        // rank data by points number
        const rankedData = data
            .filter(item => item.points !== undefined && item.points !== 0) // Filter out elements with no points or points = 0
            .sort((a, b) => b.points - a.points);

        return rankedData;

    } catch (error) {
        console.error("Error getUserPoints:", error);
    }
}

/**
 * The function `getTotalUserNumber` retrieves data from an API and returns the length of the data
 * array.
 * @returns the length of the data array.
 */
export const getTotalUserNumber = async () => {
    const { data } = await axios.get(process.env.REACT_APP_GET_TOTAL_USER_NUM_URL);
    if (data) {
        return data.length
    }
}

/**
 * The function `getNFTDetailByAsset` is an asynchronous function that retrieves NFT details by making
 * a GET request to a specified URL.
 * @param {string} asset - The `asset` parameter is a string that represents the unit of the NFT
 * (Non-Fungible Token) for which you want to retrieve the details.
 * @returns The function `getNFTDetailByAsset` returns the data obtained from the API call.
 */
export const getNFTDetailByAsset = async (asset: string) => {
    try {
        const url = process.env.REACT_APP_GET_NFT_DETAIL_URL + asset
        const response = await axios.get(url);
        const data = response.data; // Access the data property of the Axios response
        return data

    } catch (error) {
        console.error("Error getNFTDetailByAsset:", error);
    }
}