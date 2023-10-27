import { encode } from "cbor-x";
import { Constr, Data, Lucid, fromHex, toHex } from "lucid-cardano";
import data from './plutus.json';
export const makeCollectionOffer = async (
    address: string, lucid: Lucid, nftPrice: number, policyId: string
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
        // attach fee
        let fee = 199 * offer / 10000

        fee = fee * 50 / 100

        if (fee < 1000000) { fee = 1000000 }


        var datumRequest = Data.to(new Constr(0,
            [addressCbor,//policy Borrower
                policyId,//HERE THE POLICY OF THE TOKEN, if ADA is empty
                "",//HERE THE ASSETNAME IN HEX, if ADA is empty
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