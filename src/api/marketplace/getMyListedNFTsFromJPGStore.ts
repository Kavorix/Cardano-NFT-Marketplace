import axios from "axios";

export const getMyListedNFTsFromJPGStore = async (address: string) => {
    try {
        const url = `${process.env.REACT_APP_GET_MY_JPGSTORE_LISTED_NFTS}?address=${address}`;
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