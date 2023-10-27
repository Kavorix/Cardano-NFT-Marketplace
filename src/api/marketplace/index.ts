import { Constr, Data, Lucid, fromHex, toHex } from "lucid-cardano";
import { encode } from 'cbor-x';
import data from './plutus.json';
import axios from "axios";

/**
 * The `listNFTByAddress` function lists NFTs for a given address on a marketplace by creating and
 * submitting a transaction.
 * @param {string} address - The `address` parameter is a string representing the address of the user
 * who wants to list their NFTs for sale.
 * @param {Lucid} lucid - The `lucid` parameter is an object that represents the Lucid smart contract
 * platform. It provides various utility functions and methods for interacting with the Lucid
 * blockchain.
 * @param {string[]} assets - An array of strings representing the assets (NFTs) to be listed for sale.
 * @param {number} price - The `price` parameter is the price at which the NFTs will be listed for
 * sale. It is a number representing the price in a specific currency or unit.
 * @returns a boolean value. If the transaction hash (txHash) is successfully generated, the function
 * returns true. Otherwise, it returns false.
 */
export const listNFTByAddress = async (
  address: string, lucid: Lucid, assets: string[], nftPrice: number
) => {
  try {
    const marketScript = {
      type: "PlutusV2",
      script: toHex(encode(fromHex(data.validators[0].compiledCode)))
    };

    console.log("marketScript", marketScript)

    // @ts-ignore
    const validatorHash = await lucid.utils.validatorToScriptHash(marketScript);
    console.log("validator hash")
    console.log(validatorHash)
    const CredentialSC = await lucid.utils.scriptHashToCredential(validatorHash);

    // window.owner = await lucid.wallet.address()
    const { paymentCredential, stakeCredential } = await lucid.utils.getAddressDetails(
      address
    );
    console.log("credentials")
    console.log(paymentCredential.hash)
    console.log(stakeCredential.hash)
    const addressRequest = lucid.utils.credentialToAddress(CredentialSC);
    const payment_vkh = new Constr(0, [paymentCredential.hash]);
    const staking_vkh = new Constr(0, [stakeCredential.hash]); //secondo me qua è 0
    const staking_inline = new Constr(0, [new Constr(0, [staking_vkh])])
    const addressCbor = new Constr(0, [payment_vkh, staking_inline])
    console.log(addressCbor) //THIS IS FOR SELLER

    //let's calculate the fees address

    const payment_vkh2 = new Constr(0, [lucid.utils.getAddressDetails("addr1qyh9zj324a8j4uzd8t0wp4akgsa59pe8ex98j44ql3kcvd5x8n87hfmk3nu27q920sp28y0m0g4fvn3pxhc93mp6f78scg8duf").paymentCredential.hash]);
    const staking_vkh2 = new Constr(0, [lucid.utils.getAddressDetails("addr1qyh9zj324a8j4uzd8t0wp4akgsa59pe8ex98j44ql3kcvd5x8n87hfmk3nu27q920sp28y0m0g4fvn3pxhc93mp6f78scg8duf").stakeCredential.hash]); //secondo me qua è 0
    const staking_inline2 = new Constr(0, [new Constr(0, [staking_vkh2])])
    const addressCbor2 = new Constr(0, [payment_vkh2, staking_inline2])


    let price = nftPrice * 1000000
    let fee = 199 * price / 10000


    if (fee < 1000000) { fee = 1000000 }
    price = price - fee
    price = price * 50 / 100

    var datumRequest = Data.to(new Constr(0,
      [addressCbor,//policy Borrower
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(price),//HERE THE PRICE BEWARE OF DECIMALES
        addressCbor,//policy Borrower
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(price),//HERE THE PRICE BEWARE OF DECIMALES
        addressCbor2,
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(fee),//HERE THE PRICE BEWARE OF DECIMALES
      ])
    );
    console.log(datumRequest)

    let nfts = {}
    //This is the unit of the NFT I want to sell policyid+assetname
    for (let i = 0; i < assets.length; i++) {
      nfts[assets[i]] = 1n;
    }

    const tx = await lucid
      .newTx()
      .payToContract(addressRequest, { inline: datumRequest }, nfts)
      .complete();

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();
    console.log("txHash", txHash)
    if (txHash) return true;
  } catch (err) {
    console.log("Error listNFTByAddress", err)
    return false;
  }
}

/**
 * The function `getMyNFTListing` retrieves a list of NFTs listed by a specific address from an API and
 * filters the data to only include NFTs listed by that address.
 * @param {string} address - The `address` parameter is a string that represents the address of a user.
 * It is used to filter the NFT listings and retrieve only the listings where the seller's address
 * matches the provided address.
 * @returns The function `getMyNFTListing` returns a filtered object of `ListedNFTList` where the
 * `seller` property matches the provided `address`.
 */
export const getMyNFTListing = async (address: string) => {
  try {
    const url = `${process.env.REACT_APP_GET_MY_LISTED_NFTS_URL}${address}`;
    const response = await axios.get<ListedNFTList>(url);
    const data: ListedNFTList = response.data;
    return data;
  } catch (error) {
    console.error("Error getMyNFTListing:", error);
  }
}

/**
 * The function `getAllListing` makes an API call to retrieve a list of listed NFTs and returns the
 * data.
 * @returns The function `getAllListing` is returning a promise that resolves to a `ListedNFTList`
 * object.
 */
export const getAllListing = async () => {
  try {
    const url = `${process.env.REACT_APP_GET_ALL_LISTING_URL}?policy=all`;
    const response = await axios.get<ListedNFTList>(url);
    const data: ListedNFTList = response.data;
    return data;
  } catch (error) {
    console.error("Error getMyNFTListing:", error);
  }
}

export const getListedNFTsByPolicy = async (policyID: string) => {
  try {
    const url = `${process.env.REACT_APP_GET_ALL_LISTING_URL}?policy=${policyID}`;
    const response = await axios.get<ListedNFTList>(url);
    const data: ListedNFTList = response.data;
    return data;
  } catch (error) {
    console.error("Error getMyNFTListing:", error);
  }
}

/**
 * The `buyNFT` function is a TypeScript function that allows a user to buy a non-fungible token (NFT)
 * by creating and submitting a transaction on the blockchain.
 * @param {string} address - The `address` parameter is a string representing the address of the buyer
 * who wants to purchase the NFT.
 * @param {Lucid} lucid - The `lucid` parameter is an object that provides various utility functions
 * and methods related to the blockchain network you are interacting with. It is likely an instance of
 * a Lucid class or a similar library specific to your blockchain network.
 * @param {string} utxoValue - The `utxoValue` parameter is the hash of the UTXO (Unspent Transaction
 * Output) that represents the NFT listing you want to buy. It is a unique identifier for the specific
 * NFT you want to purchase.
 * @returns a boolean value. If the transaction hash (txHash) is successfully generated, the function
 * returns true. Otherwise, it returns false.
 */
export const buyNFT = async (address: string, lucid: Lucid, utxoValue: string) => {
  console.log("----->", address, lucid, utxoValue)
  try {
    const marketScript = {
      type: "PlutusV2",
      script: toHex(encode(fromHex(data.validators[0].compiledCode)))
    };


    // @ts-ignore
    const validatorHash = await lucid.utils.validatorToScriptHash(marketScript);
    console.log("validator hash")
    console.log(validatorHash)
    const CredentialSC = await lucid.utils.scriptHashToCredential(validatorHash);

    let api = undefined

    const { paymentCredential, stakeCredential } = lucid.utils.getAddressDetails(
      address
    );


    // const address = await lucid.wallet.address()


    var redeemerRequest = Data.to(
      new Constr(1, [])
    )
    //THIS IS THE TXHASH OF THE LISTING I WANT TO BUY
    const utxoHash = utxoValue
    const index = 0
    var utxo = await lucid.utxosByOutRef([{ txHash: utxoHash, outputIndex: index }])
    var datumUtxo = Data.from(utxo[0].datum)//qua cbor

    // @ts-ignore
    let pubSeller = datumUtxo.fields[0].fields[0].fields[0]
    // @ts-ignore
    let stakeSeller = datumUtxo.fields[0].fields[1].fields[0].fields[0].fields[0]
    const pubKeyCredentials = lucid.utils.keyHashToCredential(pubSeller);
    const stakeKeyCredentials = lucid.utils.keyHashToCredential(stakeSeller);
    const addressSeller = lucid.utils.credentialToAddress(pubKeyCredentials, stakeKeyCredentials);

    // @ts-ignore
    let pubMarketplace = datumUtxo.fields[8].fields[0].fields[0]
    // @ts-ignore
    let stakeMarketplace = datumUtxo.fields[8].fields[1].fields[0].fields[0].fields[0]
    const pubKeyCredentialsMarketplace = lucid.utils.keyHashToCredential(pubMarketplace);
    const stakeKeyCredentialsMarketplace = lucid.utils.keyHashToCredential(stakeMarketplace);
    const addressMarketplace = lucid.utils.credentialToAddress(pubKeyCredentialsMarketplace, stakeKeyCredentialsMarketplace);

    // @ts-ignore
    let pubRoyalty = datumUtxo.fields[4].fields[0].fields[0]
    // @ts-ignore
    let stakeRoyalty = datumUtxo.fields[4].fields[1].fields[0].fields[0].fields[0]
    const pubKeyCredentialsRoyalty = lucid.utils.keyHashToCredential(pubRoyalty);
    const stakeKeyCredentialsRoyalty = lucid.utils.keyHashToCredential(stakeRoyalty);
    const addressRoyalty = lucid.utils.credentialToAddress(pubKeyCredentialsRoyalty, stakeKeyCredentialsRoyalty);


    // @ts-ignore
    let unit = datumUtxo.fields[1] + datumUtxo.fields[2]
    // @ts-ignore
    let amount = datumUtxo.fields[3]

    // @ts-ignore
    let unitFee = datumUtxo.fields[9] + datumUtxo.fields[10]
    // @ts-ignore
    let amountFee = datumUtxo.fields[11]
    // @ts-ignore
    let unitRoyalty = datumUtxo.fields[5] + datumUtxo.fields[6]
    // @ts-ignore
    let amountRoyalty = datumUtxo.fields[7]
    let price = {
    }
    if (unit == "") {
      price['lovelace'] = amount
    } else {
      price[unit] = amount
    }

    console.log(unitFee)
    console.log(amountFee)

    let priceFee = {
    }

    if (unitFee == "") {
      priceFee['lovelace'] = amountFee
    } else {
      priceFee[unit] = amountFee
    }

    let priceRoyalty = {
    }

    if (unitRoyalty === "") {
      priceRoyalty['lovelace'] = amountRoyalty
    } else {
      priceRoyalty[unit] = amountRoyalty
    }


    console.log(redeemerRequest)
    console.log(price)
    console.log(addressSeller)
    console.log(utxo)

    console.log(priceFee)
    console.log(addressMarketplace)

    console.log(priceRoyalty)


    const tx = await lucid
      .newTx()
      .collectFrom(utxo, redeemerRequest)
      .payToAddress(addressSeller, price)
      .payToAddress(addressMarketplace, priceFee)
      .payToAddress(addressRoyalty, priceRoyalty)
      // @ts-ignore
      .attachSpendingValidator(marketScript)
      .complete()


    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();
    console.log("txHash", txHash)
    if (txHash) return true;
  } catch (err) {
    console.log("err", err)
    return false;
  }
}

/**
 * The `cancelNFT` function cancels a non-fungible token (NFT) listing by creating and submitting a
 * transaction on the blockchain.
 * @param {Lucid} lucid - The `lucid` parameter is an instance of the `Lucid` class, which is used for
 * interacting with the blockchain and performing various operations such as creating transactions,
 * signing them, and submitting them to the network.
 * @param {string} address - The `address` parameter is a string representing the address of the user
 * who wants to cancel the NFT.
 * @param {string} utxoValue - The `utxoValue` parameter is the hash of the transaction output (UTXO)
 * that you want to cancel. It is used to identify the specific UTXO that you want to spend in the
 * transaction.
 * @returns a boolean value. If the transaction hash (txHash) is truthy, then it returns true.
 * Otherwise, it does not return anything.
 */
export const cancelNFT = async (lucid: Lucid, address: string, utxoValue: string) => {
  try {
    const rentScript = {
      type: "PlutusV2",
      script: toHex(encode(fromHex(data.validators[0].compiledCode)))
    };


    const { paymentCredential, stakeCredential } = await lucid.utils.getAddressDetails(
      await address,
    );

    var redeemerRequest = Data.to(
      new Constr(0, [])
    )

    //THIS IS THE TXHASH OF THE LISTING TO BE CANCELLED
    const utxoHash = utxoValue;
    const index = 0
    var utxo = await lucid.utxosByOutRef([{ txHash: utxoHash, outputIndex: index }])
    console.log(utxo)


    const tx = await lucid
      .newTx()
      .collectFrom(utxo, redeemerRequest)
      // @ts-ignore
      .attachSpendingValidator(rentScript)
      .addSignerKey(paymentCredential.hash)
      .complete();

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();
    console.log(txHash)
    if (txHash) return true;
  } catch (err) {
    console.log("Error cancelNFT", err)
  }
}

export const makeAnOfferForNFT = async (
  address: string, lucid: Lucid, nftPrice: number, policyId: string, asset: string
) => {
  try {
    // console.log("---->", address, lucid, price, policyId, asset)
    const marketScript = {
      type: "PlutusV2",
      script: toHex(encode(fromHex(data.validators[0].compiledCode)))
    };

    console.log("marketScript", marketScript)

    // @ts-ignore
    const validatorHash = await lucid.utils.validatorToScriptHash(marketScript);
    console.log("validator hash")
    console.log(validatorHash)
    const CredentialSC = await lucid.utils.scriptHashToCredential(validatorHash);

    // window.owner = await lucid.wallet.address()
    const { paymentCredential, stakeCredential } = await lucid.utils.getAddressDetails(
      address
    );
    console.log("credentials")
    console.log(paymentCredential.hash)
    console.log(stakeCredential.hash)


    const addressRequest = await lucid.utils.credentialToAddress(CredentialSC);
    const payment_vkh = new Constr(0, [paymentCredential.hash]);
    const staking_vkh = new Constr(0, [stakeCredential.hash]); //secondo me qua è 0
    const staking_inline = new Constr(0, [new Constr(0, [staking_vkh])])
    const addressCbor = new Constr(0, [payment_vkh, staking_inline])
    console.log(addressCbor) //THIS IS FOR SELLER

    //let's calculate the fees address

    const payment_vkh2 = new Constr(0, [lucid.utils.getAddressDetails("addr1qyh9zj324a8j4uzd8t0wp4akgsa59pe8ex98j44ql3kcvd5x8n87hfmk3nu27q920sp28y0m0g4fvn3pxhc93mp6f78scg8duf").paymentCredential.hash]);
    const staking_vkh2 = new Constr(0, [lucid.utils.getAddressDetails("addr1qyh9zj324a8j4uzd8t0wp4akgsa59pe8ex98j44ql3kcvd5x8n87hfmk3nu27q920sp28y0m0g4fvn3pxhc93mp6f78scg8duf").stakeCredential.hash]); //secondo me qua è 0
    const staking_inline2 = new Constr(0, [new Constr(0, [staking_vkh2])])
    const addressCbor2 = new Constr(0, [payment_vkh2, staking_inline2])


    let offer = nftPrice * 1000000
    let fee = 199 * offer / 10000

    fee = fee * 50 / 100

    if (fee < 1000000) { fee = 1000000 }


    var datumRequest = Data.to(new Constr(0,
      [addressCbor,//policy Borrower
        policyId,//HERE THE POLICY OF THE TOKEN, if ADA is empty
        asset,//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(1),//HERE THE PRICE BEWARE OF DECIMALES
        addressCbor2,//policy Borrower
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(fee),//HERE THE PRICE BEWARE OF DECIMALES
        addressCbor2,
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(fee),//HERE THE PRICE BEWARE OF DECIMALES
      ])
    );
    console.log(datumRequest)

    console.log("datumRequest", datumRequest)

    let nfts = {}

    nfts['lovelace'] = BigInt(offer)//THIS IS THE AMOUNT I AM OFFERING 

    const tx = await lucid
      .newTx()
      .payToContract(addressRequest, { inline: datumRequest }, nfts)
      .complete();

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();
    console.log(txHash)
    if (txHash) return true;

  } catch (err) {
    console.log("Error makeAnOfferForNFT", err)
  }

}


export const editListedNFT = async (
  address: string, lucid: Lucid, nftPrice: number, assets: string[], utxoValue: string
) => {
  console.log("assets", assets)
  try {
    const marketScript = {
      type: "PlutusV2",
      script: toHex(encode(fromHex(data.validators[0].compiledCode)))
    };


    // @ts-ignore
    const validatorHash = await lucid.utils.validatorToScriptHash(marketScript);
    console.log("validator hash")
    console.log(validatorHash)
    const CredentialSC = lucid.utils.scriptHashToCredential(validatorHash);

    let api = undefined


    let { paymentCredential, stakeCredential } = await lucid.utils.getAddressDetails(
      address
    );
    const addressRequest = await lucid.utils.credentialToAddress(CredentialSC);
    const payment_vkh = new Constr(0, [paymentCredential.hash]);
    const staking_vkh = new Constr(0, [stakeCredential.hash]); //secondo me qua è 0
    const staking_inline = new Constr(0, [new Constr(0, [staking_vkh])])
    const addressCbor = new Constr(0, [payment_vkh, staking_inline])
    console.log(addressCbor) //THIS IS FOR SELLER

    //let's calculate the fees address

    const payment_vkh2 = new Constr(0, [lucid.utils.getAddressDetails("addr1qyh9zj324a8j4uzd8t0wp4akgsa59pe8ex98j44ql3kcvd5x8n87hfmk3nu27q920sp28y0m0g4fvn3pxhc93mp6f78scg8duf").paymentCredential.hash]);
    const staking_vkh2 = new Constr(0, [lucid.utils.getAddressDetails("addr1qyh9zj324a8j4uzd8t0wp4akgsa59pe8ex98j44ql3kcvd5x8n87hfmk3nu27q920sp28y0m0g4fvn3pxhc93mp6f78scg8duf").stakeCredential.hash]); //secondo me qua è 0
    const staking_inline2 = new Constr(0, [new Constr(0, [staking_vkh2])])
    const addressCbor2 = new Constr(0, [payment_vkh2, staking_inline2])


    //THIS IS VERY IMPORTANT
    //NOW LET'S SET 
    var redeemerRequest = Data.to(
      new Constr(0, [])
    )


    let price = nftPrice * 1000000
    let fee = 199 * price / 10000


    if (fee < 1000000) { fee = 1000000 }
    price = price - fee
    price = price * 50 / 100

    var datumRequest = Data.to(new Constr(0,
      [addressCbor,//policy Borrower
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(price),//HERE THE PRICE BEWARE OF DECIMALES
        addressCbor,//policy Borrower
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(price),//HERE THE PRICE BEWARE OF DECIMALES
        addressCbor2,
        "",//HERE THE POLICY OF THE TOKEN, if ADA is empty
        "",//HERE THE ASSETNAME IN HEX, if ADA is empty
        BigInt(fee),//HERE THE PRICE BEWARE OF DECIMALES
      ])
    );
    console.log(datumRequest)

    let nfts = {}
    //This is the unit of the NFT I want to sell policyid+assetname
    for (let i = 0; i < assets.length; i++) {
      nfts[assets[i]] = 1n;
    }

    console.log("nfts", nfts)

    //THIS IS THE TXHASH OF THE LISTING TO BE EDITED
    const utxoHash = utxoValue;
    const index = 0
    var utxo = await lucid.utxosByOutRef([{ txHash: utxoHash, outputIndex: index }])
    console.log(utxo)


    const tx = await lucid
      .newTx()
      .collectFrom(utxo, redeemerRequest)
      // @ts-ignore
      .attachSpendingValidator(marketScript)
      .addSignerKey(paymentCredential.hash)
      .payToContract(addressRequest, { inline: datumRequest }, nfts)
      .complete()

    console.log(tx)

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();
    console.log(txHash)
    if (txHash) return true;
  } catch (err) {
    console.log('Error editListedNFT', err)
    return false
  }
}

export const acceptAnOffer = async (address: string, lucid: Lucid, listingUtxoValue: string, offerUtxoValue: string, assetValue: string) => {
  try {

    const rentScript = {
      type: "PlutusV2",
      script: toHex(encode(fromHex(data.validators[0].compiledCode)))
    };

    const { paymentCredential, stakeCredential } = lucid.utils.getAddressDetails(
      await address
    );
    console.log("paymentCredential", paymentCredential)
    var redeemerRequest = Data.to(
      new Constr(0, [])
    )

    //THIS IS THE TXHASH OF THE LISTING OF THE NFT
    const utxoHash = listingUtxoValue
    const index = 0
    var utxo = await lucid.utxosByOutRef([{ txHash: utxoHash, outputIndex: index }])
    console.log(utxo)

    var redeemerOffer = Data.to(
      new Constr(1, [])
    )
    console.log("redeemerRequest", redeemerRequest)
    console.log("utxoHash", utxoHash)
    console.log("utxo", utxo)
    console.log("redeemerOffer", redeemerOffer)

    //THIS IS THE TX OF THE OFFER 

    const utxoHashOffer = offerUtxoValue
    const indexOffer = 0
    var utxoOffer = await lucid.utxosByOutRef([{ txHash: utxoHashOffer, outputIndex: indexOffer }])
    let datumUtxo = Data.from(utxoOffer[0].datum)
    // @ts-ignore
    let pubSeller = datumUtxo.fields[0].fields[0].fields[0]
    // @ts-ignore
    let stakeSeller = datumUtxo.fields[0].fields[1].fields[0].fields[0].fields[0]
    const pubKeyCredentials = lucid.utils.keyHashToCredential(pubSeller);
    const stakeKeyCredentials = lucid.utils.keyHashToCredential(stakeSeller);
    const addressSeller = lucid.utils.credentialToAddress(pubKeyCredentials, stakeKeyCredentials);

    console.log("utxoHashOffer", utxoHashOffer)
    console.log("indexOffer", indexOffer)
    console.log("utxoOffer", utxoOffer)
    console.log("datumUtxo", datumUtxo)
    console.log("pubSeller", pubSeller)
    console.log("stakeSeller", stakeSeller)
    console.log("pubKeyCredentials", pubKeyCredentials)
    console.log("stakeKeyCredentials", stakeKeyCredentials)
    console.log("addressSeller", addressSeller)

    // @ts-ignore
    let pubMarketplace = datumUtxo.fields[8].fields[0].fields[0]
    // @ts-ignore
    let stakeMarketplace = datumUtxo.fields[8].fields[1].fields[0].fields[0].fields[0]
    const pubKeyCredentialsMarketplace = lucid.utils.keyHashToCredential(pubMarketplace);
    const stakeKeyCredentialsMarketplace = lucid.utils.keyHashToCredential(stakeMarketplace);
    const addressMarketplace = lucid.utils.credentialToAddress(pubKeyCredentialsMarketplace, stakeKeyCredentialsMarketplace);
    console.log("stakeMarketplace", stakeMarketplace)
    console.log("stakeMarketplace", stakeMarketplace)
    console.log("pubKeyCredentialsMarketplace", pubKeyCredentialsMarketplace)
    console.log("stakeKeyCredentialsMarketplace", stakeKeyCredentialsMarketplace)
    console.log("addressMarketplace", addressMarketplace)


    // @ts-ignore
    let pubRoyalty = datumUtxo.fields[4].fields[0].fields[0]
    // @ts-ignore
    let stakeRoyalty = datumUtxo.fields[4].fields[1].fields[0].fields[0].fields[0]
    const pubKeyCredentialsRoyalty = lucid.utils.keyHashToCredential(pubRoyalty);
    const stakeKeyCredentialsRoyalty = lucid.utils.keyHashToCredential(stakeRoyalty);
    const addressRoyalty = lucid.utils.credentialToAddress(pubKeyCredentialsRoyalty, stakeKeyCredentialsRoyalty);
    console.log("pubRoyalty", pubRoyalty)
    console.log("stakeRoyalty", stakeRoyalty)
    console.log("pubKeyCredentialsRoyalty", pubKeyCredentialsRoyalty)
    console.log("stakeKeyCredentialsRoyalty", stakeKeyCredentialsRoyalty)
    console.log("addressRoyalty", addressRoyalty)

    // @ts-ignore
    let unitFee = datumUtxo.fields[9] + datumUtxo.fields[10]
    // @ts-ignore
    let amountFee = datumUtxo.fields[11]
    // @ts-ignore
    let unitRoyalty = datumUtxo.fields[5] + datumUtxo.fields[6]
    // @ts-ignore
    let amountRoyalty = datumUtxo.fields[7]

    console.log("unitFee", unitFee)
    console.log("amountFee", amountFee)
    console.log("unitRoyalty", unitRoyalty)
    console.log("amountRoyalty", amountRoyalty)

    let priceFee = {
    }

    if (unitFee === "") {
      priceFee['lovelace'] = amountFee
    } else {
      // priceFee[unit] = amountFee
    }

    let priceRoyalty = {
    }

    if (unitRoyalty === "") {
      priceRoyalty['lovelace'] = amountRoyalty
    } else {
      // priceRoyalty[unit] = amountRoyalty
    }

    console.log("priceFee", priceFee)
    console.log("priceRoyalty", priceRoyalty)

    if (utxoHash < utxoHashOffer) {
      const tx = await lucid
        .newTx()
        .collectFrom(utxo, redeemerRequest)
        .collectFrom(utxoOffer, redeemerOffer)
        .payToAddress(address, { "lovelace": 1000000n })
        .payToAddress(address, { "lovelace": 1000000n })
        .payToAddress(address, { "lovelace": 1000000n })
        .payToAddress(addressSeller, { [assetValue]: 1n })
        .payToAddress(addressMarketplace, priceFee)
        .payToAddress(addressRoyalty, priceRoyalty)
        // @ts-ignore
        .attachSpendingValidator(rentScript)
        .addSignerKey(paymentCredential.hash)
        .complete();
      console.log("tx", tx)
      const signedTx = await tx.sign().complete();
      const txHash = await signedTx.submit();
      console.log(txHash)
    } else {
      console.log("caso easy")

      const tx = await lucid
        .newTx()
        .collectFrom(utxo, redeemerRequest)
        .collectFrom(utxoOffer, redeemerOffer)
        .payToAddress(addressSeller, { [assetValue]: 1n })
        .payToAddress(addressMarketplace, priceFee)
        .payToAddress(addressRoyalty, priceRoyalty)
        // @ts-ignore
        .attachSpendingValidator(rentScript)
        .addSignerKey(paymentCredential.hash)
        .complete();

      console.log("tx", tx)


      const signedTx = await tx.sign().complete();
      const txHash = await signedTx.submit();
      console.log(txHash)
      if (txHash) return true;

    }
  } catch (err) {
    console.log("err", err)
    return false
  }
}