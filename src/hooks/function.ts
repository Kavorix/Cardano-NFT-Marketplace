import { POLICYID_ASSET_LIST } from "constants/document";
import { floor } from "lodash";

/**
 * The function `handleExceptionTokenName` takes a token name as input and returns a shortened version
 * of the name if it is equal to "Mad Dog Token", otherwise it returns the original name.
 * @param {string} tokenName - The `tokenName` parameter is a string that represents the name of a
 * token.
 * @returns If the tokenName is 'Mad Dog Token', then "MD" is being returned. Otherwise, the tokenName
 * itself is being returned.
 */
export const handleExceptionTokenName = (tokenName: string) => {
    if (tokenName === 'Mad Dog Token') return "MD";
    else return tokenName;
}

/**
 * The function `getExactImageFormat` takes an image as input and returns the URL of the image in the
 * desired format.
 * @param {any} image - The `image` parameter is of type `any`, which means it can be any data type.
 * @returns The function `getExactImageFormat` returns a string representing the image URL.
 */
export const getExactImageFormat = (image: any) => {
    if (typeof (image) === 'undefined') {
        return ""
    } else {
        // console.log("image", image, typeof (image))
        let imageId: string = ""
        if (typeof (image) === "object") {
            // console.log("if object, here")
            if (image.length === 1) {
                // console.log("1")
                imageId = image[0].replaceAll('ipfs://', 'https://image-optimizer.jpgstoreapis.com/');
                return imageId
            }
            if (image.length === 2) {
                // console.log("2", image[0] + image[1])
                imageId = (image[0] + image[1]).replaceAll('ipfs://', 'https://image-optimizer.jpgstoreapis.com/')

                return imageId
            } else {
                return "https://imagesstorag.s3.eu-west-2.amazonaws.com/default_collection.png"
            }

        } else {
            // @ts-ignore
            if (image && image.substring(0, 6) === "https:") {
                // @ts-ignore
                return image;
            }
            if (image === 'ipfs://bafkreicnjzxttyno2hrbxlpur4fguuesbnhxul5zgt2y5kr65enuuecd,he') {
                return "https://image-optimizer.jpgstoreapis.com/bafybeifaty3vhik3ukkmudpw54bxt424fb2jcgdlzc7ssifq46wsy4bwb4"
            }

            if (image && image.substring(0, 5) === "ipfs:") {
                // @ts-ignore
                return image.replaceAll('ipfs://', 'https://image-optimizer.jpgstoreapis.com/');
            }
            if (image && image.substring(0, 5) === "ipfs/") {
                // @ts-ignore
                return image.replaceAll('ipfs/', 'https://image-optimizer.jpgstoreapis.com/');
            } else {
                if (image === "") {
                    return "https://imagesstorag.s3.eu-west-2.amazonaws.com/default_collection.png"
                } else {
                    // @ts-ignore
                    return 'https://image-optimizer.jpgstoreapis.com/' + image;
                }
            }
        }
    }
}

/**
 * The function calculates the remaining time in days, hours, and minutes from the current time to a
 * given end date.
 * @param {Date} endDate - The `endDate` parameter is a `Date` object that represents the end date and
 * time for which you want to calculate the remaining time.
 * @returns The function `outputEndTimeRemaining` returns a string representing the remaining time
 * until the provided `endDate`. If the remaining time is greater than 0, it returns a string in the
 * format "Xd Xh Xm" representing the number of days, hours, and minutes remaining. If the remaining
 * time is 0 or negative, it returns the string "ENDED".
 */
export const outputEndTimeRemaining = (endDate: Date) => {
    let current_time = Date.now();
    let end_time = endDate.getTime();
    let diff: number = Math.floor((end_time - current_time) / 1000);
    if (diff > 0) {
        let rem_day: number = Math.floor(diff / 86400);
        let rem_hour: number = Math.floor((diff % 86400) / 3600);
        let rem_min: number = Math.ceil(((diff % 86400) % 3600) / 60);
        // console.log("rem_day + rem_hour + rem_min", rem_day + "d " + rem_hour + "h " + rem_min + "m")
        return rem_day + "d " + rem_hour + "h " + rem_min + "m";
    } else {
        return "ENDED"
    }
}

/**
 * The function generates a random string of length 8 using uppercase letters, lowercase letters, and
 * numbers.
 * @returns The function `generateRandomString` returns a randomly generated string of length 8,
 * consisting of uppercase letters, lowercase letters, and digits.
 */
export const generateRandomString = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * The function `outputEndTimeByTimestamp` calculates the remaining time until a given end time and
 * returns it in a human-readable format.
 * @param {string} endTime - The `endTime` parameter is a string representing a timestamp.
 * @returns The function `outputEndTimeByTimestamp` returns a string value.
 */
export const outputEndTimeByTimestamp = (endTime: string) => {
    let return_string: string = "";
    let current_time = Date.now();
    let diff: number = Math.floor((parseInt(endTime) - current_time) / 1000);
    if (diff > 0) {
        let rem_day: number = Math.floor(diff / 86400);
        if (rem_day) return_string += rem_day  + (rem_day > 1 ? "days " : "day ");
        let rem_hour: number = Math.floor((diff % 86400) / 3600);
        if (rem_hour) return_string += rem_hour + (rem_hour > 1 ? "hours " : "hour ");
        let rem_min: number = Math.ceil(((diff % 86400) % 3600) / 60);
        if (rem_min) return_string += rem_min + (rem_min > 1 ? "mins" : "min");
        return return_string;
    } else {
        return "ENDED"
    }
}

/**
 * The function `toBase64` converts a Blob file to a base64 encoded string.
 * @param {Blob} file - The `file` parameter is of type `Blob`, which represents a file-like object of
 * immutable, raw data. It can be an image, audio, video, or any other type of file.
 */
export const toBase64 = (file: Blob) =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

/**
 * The function `getVolumeExpression` takes a volume value and returns a string representation of the
 * volume in either millions, thousands, or the original value.
 * @param {number} volume - The parameter `volume` is a number representing the volume value.
 * @returns The function `getVolumeExpression` returns a string value.
 */
export const getVolumeExpression = (volume: number) => {
    const m_value = volume / 1000000;
    if (m_value >= 1) {
        return floor(m_value) + "m";
    } else {
        const t_value = volume / 1000;
        if (t_value >= 1) {
            return floor(t_value) + "k";
        } else {
            return floor(volume)
        }
    }
}

/**
 * The function `getExactTokenAmount` takes an amount and a token name as input and returns the exact
 * token amount based on the token's decimal value.
 * @param {number} amount - The amount parameter is a number that represents the token amount.
 * @param {string} tokenName - The `tokenName` parameter is a string that represents the name of a
 * token.
 * @returns The function `getExactTokenAmount` returns the exact token amount based on the provided
 * `amount` and `tokenName`.
 */
export const getExactTokenAmount = (amount: number, tokenName: string) => {
    if (!POLICYID_ASSET_LIST.hasOwnProperty(tokenName)) {
        return amount;
    } else {
        if (POLICYID_ASSET_LIST[tokenName].decimals === 0) {
            return amount;
        } else {
            return floor(amount / Math.pow(10, POLICYID_ASSET_LIST[tokenName].decimals))
        }
    }
}

export const getCollectionID = (name: string) =>{
    let newStr = name.replace(/\s+/g, '');
    return newStr;
}