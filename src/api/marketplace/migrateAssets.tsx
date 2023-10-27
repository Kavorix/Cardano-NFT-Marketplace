import { encode } from "cbor-x";
import { Constr, Data, Lucid, fromHex, toHex } from "lucid-cardano";
import data from './plutus.json';

export const migrateAssets = async (
    address: string, lucid: Lucid, utxoValue: string, assets: string[]
) => {

    console.log("utxoValue", utxoValue, assets)

    const marketScript = {
        type: "PlutusV2",
        script: toHex(encode(fromHex(data.validators[0].compiledCode)))
    };


    const jpgScript2 = {
        type: "PlutusV2",
        script: "590a015909fe010000323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232222323232533535533357346064606a0062646464642466002008004a666ae68c0d8c0e00044c848c004008c078d5d0981b8008191baa357426ae88c0d80154ccd5cd1819981b0008991919191919191919191919191919191919191919190919999999999980080b80a8098088078068058048038028018011aba135744004666068eb88004d5d08009aba2002357420026ae88008cc0c9d71aba1001357440046ae84004d5d10011aba1001357440046ae84004d5d10011aba1001357440046ae84004d5d10011981300f1aba1001357440046ae84004d5d1181b001198111192999ab9a30353038001132321233001003002301d357426ae88c0e0008c078d5d0981b8008191baa00135742606a0020606ea8d5d0981a001817911a8011111111111111a80691919299aa99a998149aa99a80109815a481035054380022100203d00303903a03a1533501213302549101350033302330340362350012232333027303803a235001223500122533533302b0440040062153353333026303e040223500222533500321533533303104a0030062153353302b0010031303f3305722533500104c221350022253353305100200a100313304d33047002001300600300215335330370010031303f333302d04b0043370200200600409209008e60720020044266060920102313000333573466e20ccd54c0fc104c0a8cc0f1c024000400266aa608008246a00209600200809208e266ae712410231310004813357389201023132000470023335530360393501b0403501b04233355303603922533535002222253353302200800413038003042213303d001002100103f010333301c303403622350022253353303c00b002100313333020303803a235001222533533302a0210030012133330260220043355303e03f235001223303d002333500120012235002223500322330433370000800466aa608e09046a002446608c004666a0024002e008004ccc0c013400c0048004ccc09c11000c0040084cccc09408400c00800400c0040f140044cc0952410134003330233034036235001223303b00a0025001153353355303403523500122350012222302c533350021303104821001213304e2253350011303404a221350022253353304800200710011300600300c0011302a49010136002213355303603723500122350012222302e533350021303304a2100121330502253350011303604c221350022253353304a00200710011300600300e0033335530310342253353353530283500203f03d203f253353303c001330482253350011302e044221350022253353303000200a135302f001223350022303504b20011300600301003b1302c4901013300133037002001100103a00d1120011533573892010350543500165333573460640020502a666ae68c0c400409c0b8c0ccdd50019baa00133019223355301f020235001223301e002335530220232350012233021002333500137009000380233700002900000099aa980f81011a800911980f001199a800919aa981181211a8009119811001180880080091199806815001000919aa981181211a80091198110011809000800999804012801000812111919807198021a8018139a801013a99a9a80181490a99a8011099a801119a80111980400100091101711119a80210171112999ab9a3370e00c0062a666ae68cdc38028010998068020008158158120a99a80090120121a8008141119a801119a8011198128010009014119a801101411981280100091199ab9a3370e00400204604a44446666aa00866032444600660040024002006002004444466aa603803a46a0024466036004666a0024002052400266600a0080026603c66030006004046444666aa603003603866aa603403646a00244660320046010002666aa6030036446a00444a66a666aa603a03e60106603444a66a00404a200204e46a002446601400400a00c200626604000800604200266aa603403646a00244660320046605e44a66a002260160064426a00444a66a6601800401022444660040140082600c00600800446602644666a0060420040026a00204242444600600842444600200844604e44a66a0020364426a00444a66a6601000400e2602a0022600c0064466aa0046602000603600244a66a004200202e44a66a00202e266ae7000806c8c94ccd5cd180f9811000899190919800801801198079192999ab9a3022302500113232123300100300233301075c464a666ae68c094c0a00044c8cc0514cd4cc028005200110011300e4901022d330033301375c464a66a660180029000080089808249022d3200375a0026ae84d5d118140011bad35742604e0020446ea8004d5d09aba23025002300c35742604800203e6ea8004d5d09aba23022002375c6ae84c084004070dd500091199ab9a3371200400203202e46a002444400844a666ae68cdc79a80100b1a80080b0999ab9a3370e6a0040306a00203002a02e024464a666ae68c06cc0780044c8c8c8c8c8c8c8c848cccc00402401c00c008d5d09aba20045333573466e1d2004001132122230020043574260460042a666ae68c0880044c84888c004010dd71aba1302300215333573460420022244400603c60460026ea8d5d08009aba200233300a75c66014eb9d69aba100135744603c004600a6ae84c074004060dd50009299ab9c001162325333573460326038002264646424660020060046eb4d5d09aba2301d003533357346034603a00226eb8d5d0980e00080b9baa35742603600202c6ea80048c94ccd5cd180c180d80089919191909198008028012999ab9a301b00113232300953335734603c00226464646424466600200c0080066eb4d5d09aba2002375a6ae84004d5d118100019bad35742603e0042a666ae68c0740044c8488c00800cc020d5d0980f80100d180f8009baa35742603a0042a666ae68c070004044060c074004dd51aba135744603600460066ae84c068004054dd5000919192999ab9a30190011321223001003375c6ae84c06800854ccd5cd180c00089909118010019bae35742603400402a60340026ea80048488c00800c888cc06888cccd55cf800900911919807198041803980e8009803180e00098021aba2003357420040166eac0048848cc00400c00888cc05c88cccd55cf800900791980518029aba10023003357440040106eb0004c05088448894cd40044008884cc014008ccd54c01c028014010004c04c88448894cd40044d400c040884ccd4014040c010008ccd54c01c024014010004c0488844894cd4004024884cc020c010008cd54c01801c0100044800488488cc00401000cc03c8894cd40080108854cd4cc02000800c01c4cc01400400c4014400888ccd5cd19b8f0020010030051001220021001220011533573892010350543100164901022d31004901013700370e90001b874800955cf2ab9d2323001001223300330020020011"

    }

    const jpgScript = {
        type: "PlutusV1",
        script: "5912585912550100003323322333222332233223232333222323332223233333333222222223233322232333322223232332232333222323332223232332233223232333332222233223322332233223322332222323232323232232232325335303833300d3333573466e1cd55cea805a400046666664444446666660ba00c00a0080060040026eb8d5d0a8059bad35742a0146eb8d5d0a8049bae35742a0106eb8d5d0a8039bad357426ae89401c8d4138d4c13ccd5ce2490350543100050499263333573466e1d40112002205423333573466e1d40152000205623504f353050335738921035054310005149926498cccd5cd19b8735573aa004900011980819191919191919191919191999ab9a3370e6aae75402920002333333333301e33502c232323333573466e1cd55cea80124000466048607e6ae854008c0c4d5d09aba2500223505e35305f3357389201035054310006049926135573ca00226ea8004d5d0a80519a8160169aba150093335503375ca0646ae854020ccd540cdd728191aba1500733502c04835742a00c66a05866aa0b20a2eb4d5d0a8029919191999ab9a3370e6aae754009200023350263232323333573466e1cd55cea80124000466a05c66a08eeb4d5d0a80118261aba135744a00446a0c46a60c666ae712401035054310006449926135573ca00226ea8004d5d0a8011919191999ab9a3370e6aae7540092000233502c33504775a6ae854008c130d5d09aba250022350623530633357389201035054310006449926135573ca00226ea8004d5d09aba2500223505e35305f3357389201035054310006049926135573ca00226ea8004d5d0a80219a8163ae35742a00666a05866aa0b2eb88004d5d0a801181f1aba135744a00446a0b46a60b666ae71241035054310005c49926135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135573ca00226ea8004d5d0a8011919191999ab9a3370ea00290031181198201aba135573ca00646666ae68cdc3a801240084604460946ae84d55cf280211999ab9a3370ea006900111811181a9aba135573ca00a46666ae68cdc3a802240004604a6eb8d5d09aab9e50062350553530563357389201035054310005749926499264984d55cea80089baa001357426ae8940088d4138d4c13ccd5ce249035054310005049926104f13504d35304e3357389201035054350004f4984d55cf280089baa001135573a6ea80044d5d1280089aba25001135744a00226ae8940044d55cf280089baa0012212330010030022001222222222212333333333300100b00a00900800700600500400300220012212330010030022001122123300100300212001122123300100300212001122123300100300212001212222300400521222230030052122223002005212222300100520011232230023758002640026aa072446666aae7c004940388cd4034c010d5d080118019aba200203323232323333573466e1cd55cea801a4000466600e6464646666ae68cdc39aab9d5002480008cc034c0c4d5d0a80119a8098169aba135744a00446a06c6a606e66ae71241035054310003849926135573ca00226ea8004d5d0a801999aa805bae500a35742a00466a01eeb8d5d09aba25002235032353033335738921035054310003449926135744a00226aae7940044dd50009110919980080200180110009109198008018011000899aa800bae75a224464460046eac004c8004d540cc88c8cccd55cf80112804919a80419aa81898031aab9d5002300535573ca00460086ae8800c0b84d5d08008891001091091198008020018900089119191999ab9a3370ea002900011a80418029aba135573ca00646666ae68cdc3a801240044a01046a0526a605466ae712401035054310002b499264984d55cea80089baa001121223002003112200112001232323333573466e1cd55cea8012400046600c600e6ae854008dd69aba135744a00446a0466a604866ae71241035054310002549926135573ca00226ea80048848cc00400c00880048c8cccd5cd19b8735573aa002900011bae357426aae7940088d407cd4c080cd5ce24810350543100021499261375400224464646666ae68cdc3a800a40084a00e46666ae68cdc3a8012400446a014600c6ae84d55cf280211999ab9a3370ea00690001280511a8111a981199ab9c490103505431000244992649926135573aa00226ea8004484888c00c0104488800844888004480048c8cccd5cd19b8750014800880188cccd5cd19b8750024800080188d4068d4c06ccd5ce249035054310001c499264984d55ce9baa0011220021220012001232323232323333573466e1d4005200c200b23333573466e1d4009200a200d23333573466e1d400d200823300b375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c46601a6eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc048c050d5d0a8049bae357426ae8940248cccd5cd19b875006480088c050c054d5d09aab9e500b23333573466e1d401d2000230133016357426aae7940308d407cd4c080cd5ce2481035054310002149926499264992649926135573aa00826aae79400c4d55cf280109aab9e500113754002424444444600e01044244444446600c012010424444444600a010244444440082444444400644244444446600401201044244444446600201201040024646464646666ae68cdc3a800a400446660106eb4d5d0a8021bad35742a0066eb4d5d09aba2500323333573466e1d400920002300a300b357426aae7940188d4040d4c044cd5ce2490350543100012499264984d55cea80189aba25001135573ca00226ea80048488c00800c888488ccc00401401000c80048c8c8cccd5cd19b875001480088c018dd71aba135573ca00646666ae68cdc3a80124000460106eb8d5d09aab9e500423500a35300b3357389201035054310000c499264984d55cea80089baa001212230020032122300100320011122232323333573466e1cd55cea80124000466aa016600c6ae854008c014d5d09aba25002235007353008335738921035054310000949926135573ca00226ea8004498480048004448848cc00400c008448004488008488004800488888848cccccc00401c01801401000c0088004448c8c00400488cc00cc008008004cc8ccc888c8cc88c8cc88c8c8c8c8c8c8c8c8c8c8cc88ccc888ccc888ccc888cccccccc88888888cc88ccccc88888cccc8888cc88cc88cc88ccc888cc88cc88ccc888cc88cc88cc88cc88c8c8c8cc88c8c8c8c8cccc8888c8cc88c8c8c888c8c8c8c8c888c94cd4c13c00c54cd4c1914cd4c190ccd5cd19b8733301c33355301012001500c50283300b533535026353020500122222222220031350604988854cd4d40a00044008884d41912650013530520092222220043530520092222220034800819819441984cd5ce2481154e4654206e6f742073656e7420746f206275796572000651533530645335306433054301d33301c33355301012001500c50283300b35305200922222200650014881004881003305833058301d500850045006106613357389210f53656c6c6572206e6f742070616964000651533530645335306433054301d33301c332233355301212001500e502a3300d001002500100a489004881005004106613357389210c466565206e6f742070616964000651533530645335306453353064333573466e24d4c1480248888880052000065066133054301d33301c33355301012001500c50283300b353052009222222002500148900488100500610661066133573892113526f79616c6974696573206e6f74207061696400065153353064333573466e24c8cc8004c8004ccd54c05c48004c8cd407088ccd407000c004008d4064004cd406c888c00cc008004800488cdc0000a40040029000199aa98080900091299a9833299a9a8179a98131a981200111000911000908348833899a8148010008800a8141a98101a980f001110011111111111005240040cc0ca20cc266ae7124011a4d6f7265207468616e206f6e652073637269707420696e70757400065106510651065106515335306433223530220022222222222533535039333553022120013350262253353503b002210031001503a253353071333573466e3c0300041cc1c84d40f0004540ec00c841cc41c54004d4c14802488888801841984cd5ce2481204e6f2072696768747320746f20706572666f726d207468697320616374696f6e00065135301d001220021533530603305150565001150011505613305233057480a120d00f3018500315335305e3304f5055500115001150551330503305535304b002222222001483403cc05940044d4c12800488888801488d4c05c0048888888888ccd54c0444800488d4c09c008888d4c0c400c88cd4c15000894cd4c1b4ccd5cd19b8f01400106f06e13350300050071007200750290091223355300b120012353550200012233550230023355300e12001235355023001223355026002333535500d0012330564800000488cc15c0080048cc15800520000013355300b12001235355020001223355023002333535500a00123355300f120012353550240012233550270023550110010012233355500801600200123355300f1200123535502400122335502700235500f00100133355500301100200111122233355300612001501d3355300b1200123535502000122335502300235500d001333553006120012235355021002225335305e33355301012001323350152233353500b0032200200200135350090012200133500922533530600021062100105f235355024001223300a00200500610031335021004003501e0013355300b120012353550200012232335502400330010053200135506022533535021001135500d0032213535502600222533530633300c002008133550120070011300600300212212330010030021200132001355057221122253353501b00110022213300500233355300712001005004001112122230030041122122233002005004112122230010041120013200135505222112253353501500115017221335018300400233553006120010040013200135505122112225335350150011350060032213335009005300400233355300712001005004001123535003001220011235350020012200212212330010030021200122333573466e3c008004134130888c8c8c004014c8004d5413c88cd4d4040005200022353550150022253353052333573466e3c00802415014c4c01c0044c01800cc8004d5413888cd4d403c005200022353550140022253353051333573466e3c00801c14c14840044c01800c8cd411800520022212330010030022001222222222212333333333300100b00a00900800700600500400300220012212330010030022001222123330010040030022001112200212212233001004003120011122123300100300211200122123300100300220011212230020031122001120011221233001003002120011221233001003002120011221233001003002120011212223003004112220021122200112001212222300400521222230030052122223002005212222300100520012212330010030022001212222222300700822122222223300600900821222222230050081222222200412222222003221222222233002009008221222222233001009008200121223002003222122333001005004003200121223002003212230010032001122002122001200122222212333333001007006005004003002200122353500f002223535011003223253353017333573466e1c01400c06406054cd4c05cccd5cd19b870040020190181019150011500115335301633330080040030020011017101822353500e0022235350100032233330070040030020012222333573466e24cdc100200099b8200200301401322353500c00222353500e003223300c3370400800466e0800c00488d4d402c00888d4d403400c88cc02ccdc099b820040013370400400666e0800c00488cdc00010008998012410112f49001099800a410112f49001111980199b820025335300a333573466e1c005200000c00b14800054cd4c028ccd5cd19b890014800002c03052002133702900024004a66a6014666ae68cdc4000a4000018016266e052000001100122325335300a333573466e1c009200000c00b135006353004335738920103505433000054984cd4020cdc2001a80099b84002500113300853353009333573466e20009200000b00a13370290000010801299a9804999ab9a337100029000005805099b8148000004400448004800449848848cc00400c00848004c8004d540108894cd4c010ccd5cd19b870014800001801440084cc00c004cdc2801000891001091000900088919180080091198019801001000a451c70e60f3b5ea7153e0acc7a803e4401d44b8ed1bae1c7baaad1a62a720001"
    };

    // @ts-ignore
    const validatorHash = await lucid.utils.validatorToScriptHash(marketScript);
    console.log("validator hash")
    console.log(validatorHash)
    const CredentialSC = lucid.utils.scriptHashToCredential(validatorHash);

    // let api = undefined
    // window.connect = async function connect(wallet) {
    //     api = await window.cardano[wallet].enable();
    //     localStorage.setItem('wallet', wallet);
    // }




    // var wallet = "nami"
    // api = await window.cardano[wallet].enable();
    // lucid.selectWallet(api);
    // window.owner = await lucid.wallet.address()
    try {
        let { paymentCredential, stakeCredential } = lucid.utils.getAddressDetails(
            address
        );
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


        //THIS IS VERY IMPORTANT
        //NOW LET'S SET 

        //YOU GET THIS PRICE FROM THE API OF EXTERNAL LISTING!!!
        let price = 1000000000
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

        var redeemerMigrate = Data.to(
            new Constr(1, [])
        )


        //THIS IS THE TXHASH OF THE LISTING TO BE CANCELLED
        const utxoHash = utxoValue
        const index = 0
        var utxo = await lucid.utxosByOutRef([{ txHash: utxoHash, outputIndex: index }])

        const tx = await lucid
            .newTx()
            .collectFrom(utxo, redeemerMigrate)
            .payToContract(addressRequest, { inline: datumRequest }, nfts)
            // @ts-ignore
            .attachSpendingValidator(jpgScript2)
            .addSignerKey(paymentCredential.hash)
            .complete();

        console.log(tx)

        const signedTx = await tx.sign().complete();
        const txHash = await signedTx.submit();
        console.log(txHash)
        if(txHash){
            return true;
        }
    } catch (err) {
        console.log("Err", err)
        return false;
    }



}