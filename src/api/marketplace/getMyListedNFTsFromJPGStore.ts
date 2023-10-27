import axios from "axios";

export const getMyListedNFTsFromJPGStore = async (address: string) => {
    try {
        const url = "https://lqq89mso8h.execute-api.eu-west-2.amazonaws.com/default/get-external-listings?address=" + address;
        const response = await axios.get(url);
        console.log("response", response)
        if (response) {
            if (response.status === 200) {
                return response.data;
            }
        }
    } catch (err) {
        console.log("Error getMyListedNFTsFromJPGStore", err)
    }
}