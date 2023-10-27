import axios from "axios";

export const getMyOffering = async (address: string) => {
    try {
        const url = `${process.env.REACT_APP_GET_MY_OFFERING_URL}?address=${address}`;
        console.log("getMyOffering URL", url)
        const response = await axios.get(url);
        console.log("response", response)
        if (response) {
            // if (response.status === 200) {
            return response.data;
        }
    } catch (err) {
        console.log("Error getMyOffering", err)
    }
}