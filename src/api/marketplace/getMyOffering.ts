import axios from "axios";

export const getMyOffering = async (address: string) => {
    try {
        const url = "https://b6lbk0fual.execute-api.eu-west-2.amazonaws.com/default/Get-my-offers-to-listings-async?address=" + address;
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