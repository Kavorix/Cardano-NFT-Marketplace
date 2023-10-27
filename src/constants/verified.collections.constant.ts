const VERIFIED_COLLECTIONS =
  [
    { policyId: "c56d4cceb8a8550534968e1bf165137ca41e908d2d780cc1402079bd", description: "Bringing back our chill to the CNFT space. Among us, there are thousands of Chilled Kongs. Each one is unique, but they all have one thing in common: they are experts in enjoying the good things in life.", name: "Chilled Kongs", hero: "https://images.jpgstoreapis.com/c4168e01-9fe5-45b6-9779-fb7e531ef5df", supply: "8888" }, { policyId: "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d", description: "Pavia Metaverse", name: "Pavia", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/pavia.webp", supply: "100000" }, { policyId: "69f206a6f5cc12f7e693a757af71ffbaa67dc8fd9aeae5411cad8d25", description: "5,000 Mutant Mice, the third generation of Mutant NFTs. ", name: "Mutant Mice", hero: "https://images.jpgstoreapis.com/0d74c7dd-3f00-4efd-b26c-71972ba2929e", supply: "5000" }, { policyId: "99db568e9664669f1601dc611c67429c29eb68b0c5c5338e6b22ab6b", description: "Happy Tigers Club is NFT that blurs the boundaries between real and virtual worlds. We are the first project on Cardano to build a real-life utility: Happy Tigers Restaurant! \nCollect Happy Tigers Club NFT + Happy Tigers Business NFT and receive multiple benefits from the franchise business. ", name: "Happy Tigers Club", hero: "https://storage.googleapis.com/jpeg-optim-files/62f8c8d7-bbad-4811-bea5-4e582b0c020c", supply: "3333" }, { policyId: "c0cd26dab3d608cdf4d1e3fcae637a5b5fa72189bb65f8fdddfd42be", description: "This series of NFTs were created to reward the most loyal delegators of the Genius X ISPO. The Titan NFT is rewarded to delegators who staked 500 ADA and over for 21+ epoch. They grant a +10% weighting booster on the accelerator rewards pool. ", name: "Genius X ISPO - Titan", hero: "https://storage.googleapis.com/jpeg-optim-files/9b3b6894-460f-4b8f-8e16-95f95505237f", supply: "3161" }, { policyId: "3ca291585bbbd1deafab0495f8a7fda4753fbeae96c550492bcfd760", description: "Unpredictable cat from the Jungle.", name: "Jungle Wenno Cat", hero: "https://storage.googleapis.com/jpeg-optim-files/3d60fe63-8ea3-46f8-bd48-d990c1388b88", supply: "2001" }, { policyId: "fca746f58adf9f3da13b7227e5e2c6052f376447473f4d49f8004195", description: "Stake your place in The Ape Society as a citizen, connect an NFT from any chain, and reap benefits from the cross-chain $SOCIETY landmark ecosystem.", name: "Citizens of The Ape Society - COTAS", hero: "https://storage.googleapis.com/jpeg-optim-files/98353473-86d1-4757-85bb-663d54e68323", supply: "10000" }, { policyId: "158fd94afa7ee07055ccdee0ba68637fe0e700d0e58e8d12eca5be46", description: "Indulge in the sweet times life has to offer! Goombles are delicious and loveable candies that come in a variety of flavors, shapes, and sizes. Goombles act as your all-access-pass to everything in the Goombles ecosystem!", name: "Goombles", hero: "https://storage.googleapis.com/jpeg-optim-files/a3318076-a665-4f69-9ef2-f197add94a1b", supply: "5000" }, { policyId: "203d8bd5a7b74780228964d6dfdd7d37946b22df6e5496722b2fc92e", description: "This policyID will contain the 1900 Roleggs that will complete the Roleggs collection, different series like Impetus, Unseggs, Symposium and Valkyria have a different story and inspiration. WIll you be able to complete all the 20 series?", name: "Fabulart - Roleggs - The story continues...", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/roleggsthestorycontinues.png", supply: "599" }, { policyId: "f01e07a8038849f9c517e2862b72c2d7a25f632a62b67786ff925794", description: "Deep in the cosmos, there lies a tiny planet called Knfty World where 8,800 Knfty Creatures roam.", name: "Knfty World - Knfty Creatures", hero: "https://images.jpgstoreapis.com/df056020-38bb-4f61-9c0c-a85a0bf33b55", supply: "8800" }, { policyId: "2d868badf3dc317234fe253859621fedf661bf9eba275faea80a8bfe", description: "Incredible Artist Sh4pes Gives His Take On Nemonium Skulls", name: "Sh4pes x Nemonium", hero: "https://storage.googleapis.com/jpeg-optim-files/e4192a3a-80e3-42e5-887c-7627b91922a7", supply: "344" }, { policyId: "9974c0851e5cc09c56474bd5349bfb72bd1e0b84e18c56896d6df4b2", description: " ", name: "The Carvins:  from Happy Tigers Club ", hero: "https://storage.googleapis.com/jpeg-optim-files/078f0a0c-8729-423c-ae89-0f572c6e21ec", supply: "41" }, { policyId: "39269e37e56013a638e15d1598372eb32523929ae7b02bfab4d8f372", description: "A collection of Zigor's artwork released under the Benji's Platform.", name: "Benji's - Zigor", hero: "https://storage.googleapis.com/jpeg-optim-files/e176d477-9908-4514-be8a-c44e949c5878", supply: "271" }, { policyId: "39444484d7a844f3c59ea383649b498f40fd3d8e2ae6a923efc60897", description: "Exclusive Auction house where ETH artists launch their first collections on Cardano!", name: "Benjamin's Club", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/benjaminsclub.webp", supply: "255" }, { policyId: "b06b24176f6feed7f6af241f12333b146497a43b13afad1c66699dea", description: "The Working Dead is a collection of 6,666 NFTs brought to life on the Cardano blockchain. This project introduces the concept of learn-to-earn and will allow every undead to play a vital role in the ecosystem. Join the undead in their quest for knowledge and help them clock in their 9-to-5s.", name: "The Working Dead", hero: "https://storage.googleapis.com/jpeg-optim-files/e6672ce5-d60d-4ea6-9e1c-5b3d0fc12dac", supply: "6666" }, { policyId: "83af574378d100ffb4d657010d117c92038b9fbc9129c3b0dc4ea96b", description: "A collection of 3,333 Utility PFPs that feature unique traits based on colony. Each Seal unlocks membership and benefits.", name: "The Seal Society", hero: "https://images.jpgstoreapis.com/e6afb034-9dc2-44e6-a20f-4292982f4a99", supply: "3333" }, { policyId: "90a16d538aea92e209ced72a4d7e389409a0502dfd37b12eb07ce8a2", description: "The Apex Kingdom is a group of original 3D Predators built on the Cardano blockchain.  The Kingdom is being built into the world's greatest community through our focus on developing a sticky culture, delivering high value to our holders, and providing world class art.", name: "Apex Kingdom | Predators", hero: "https://storage.googleapis.com/jpeg-optim-files/f31dcf98-b64b-4937-8ae1-0b7c031b5256", supply: "5531" }, { policyId: "89fa6dc66a24799ccaee43a3a16930bb045a8152fdf2a2642034774f", description: "Earn crypto while you play in PlanetPalz, a Unity-based multiplayer battle arena game incorporating the Cardano blockchain.\nPlayers can purchase and trade Elder Planets, NFTs that yield materials for crafting powerful Titan Planets, weapons, and armor.", name: "PlanetPalz - Elder Planets", hero: "https://images.jpgstoreapis.com/bd982393-848d-49ec-b58c-1b8617196783", supply: "12000" }, { policyId: "24a9c997423c7f549d819c97bed367e19a282e88c74656945cc9215f", description: "First web3 multiplayer game  utilising Cardano Crocs Club ecosystem: swamplands.\nEarn passive income in $c4 by holding one of these Gamified NFTs!", name: "Swamp Tanks", hero: "https://storage.googleapis.com/jpeg-optim-files/c8bd1e25-19de-4044-ae3b-07da6d9efa59", supply: "983" }, { policyId: "e74862a09d17a9cb03174a6bd5fa305b8684475c4c36021591c606e0", description: "More than just NFTs, Derp Birds is a community of memelord degens who enjoy digital collectibles delivered to them in a fun, gamified roadmap.", name: "Derp Birds", hero: "https://storage.googleapis.com/jpeg-optim-files/d6ee14a2-9ea4-48fc-982e-9e3cecef29ca", supply: "4559" }, { policyId: "72539140e0582e9f823f8aba126cccb64dcff24bdea6472952af847f", description: "Eden's Seven is a story-driven, RPG Game World Project where holders will be able to Hunt Monsters, Complete Quests and Compete in Competitive Content. A Love Letter to RPG Gaming of the 2000s. ", name: "Eden's Seven: Children of Mir", hero: "https://storage.googleapis.com/jpeg-optim-files/32826543-f185-41ba-a77e-e1a842db55a7", supply: "7777" }, { policyId: "f201323ed0fce8db289bb98e0d9865f1d64631c76bb7055183b27454", description: "Baby CryptoDinos are here and they are ready to help your CryptoDinos and DinoSaviors go on ROARsome escapades in our official P2E CryptoDino Game!", name: "CryptoDino - Next Generations", hero: "https://images.jpgstoreapis.com/a81ea637-5fdd-44fd-91c8-20b9dfbcf2e9", supply: "2192" }, { policyId: "7a5a5c3757d33c2b2ff0b09405676e61f93d28b5d12805dd3320e31f", description: "Around 65 million years ago, fascinating creatures called dinosaurs went extinct. CryptoDino is bringing them back for the Cardano blockchain. Some of them are carnivorous, some herbivorous. A collection of 10,000 unqiue CryptoDinos.", name: "CryptoDino - CryptoDinos", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cryptodinos.webp", supply: "10000" }, { policyId: "887e4d7b2e7d574484f8c780abef1599ce0bad1c751fb14ccdf9d410", description: "From the creators of CryptoDino. There are 10,000 Dinosaviors out there. Exceptionally smart and agile. With different abilities and in various forms.", name: "CryptoDino - DinoSaviors", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/dinosaviors.webp", supply: "10000" }, { policyId: "bad98abcc82a3051b5c65fd675b1aaf5a00adaf256fcf21b95dd6eb8", description: "The Golden Tickets are the first installment from Lovelace Club. This collection of 222 animated 3D tickets offers holders significant perks within the LLC ecosystem.", name: "LoveLace Club - Golden Ticket", hero: "https://storage.googleapis.com/jpeg-optim-files/11946033-1479-4ce2-8ee6-74d41d013629", supply: "222" }, { policyId: "4e5f3e165b93c99d922111d9818c03f33e8da8a9f6ae1465c7869a21", description: "Space Pugs Alpha is a collection of 7777 uniquely generated pugs living on the Cardano blockchain. Alpha is the first collection in the Space Pugs ecosystem.", name: "Space Pugs Alpha", hero: "https://storage.googleapis.com/jpeg-optim-files/742dfcdf-6eb7-4985-8102-d11c0e7d7b18", supply: "7777" }, { policyId: "6028945c4d4d97eaea6facdb9e83eae6123e52960bcc721ee178b0d8", description: "1/1 SPECIAL EDITIONS", name: "Space Pugs Special Editions", hero: "https://images.jpgstoreapis.com/a72d119e-dcbb-4211-b393-7910c1b157b7", supply: "10" }, { policyId: "313e41b0f3f55637689d3980d3479920cb3bb0a5860d03cd49c17c11", description: "Space Pugs Poker Club Starting hands is an NFT collection comprising 7,777 Starting hands from 16 Cardano projects. Since our mint, we have burned over 3000 Starting hands to create over 1000 Full hands.", name: "Space Pugs Poker Club - Starting Hands", hero: "https://images.jpgstoreapis.com/a18a0a79-4aa8-420d-b1b2-aa244678cfde", supply: "4948" }, { policyId: "5c520ed7e841460f4e09ebad98f9d03511acef57316c8d60302cf510", description: "Collection created by fusing starting hands from the Space Pugs Poker Club - Starting Hands collection.\n", name: "Space Pugs Poker Club - Full Hands ", hero: "https://storage.googleapis.com/jpeg-optim-files/ff17c114-532f-4fc2-805f-1c05170ecab9", supply: "1194" }, { policyId: "d1db998136f4796d4b785a44a68ce2753415f3aa804b9a80008fd692", description: "Every Full hand created will receive a Full hand pass for free which you can stake for 25 pugchips each month.", name: "Space Pugs Poker Club - Full Hands Pass", hero: "https://images.jpgstoreapis.com/d343629b-8949-4ecc-8a2c-70d14f52feee", supply: "1225" }, { policyId: "5cabbdb4a2e7a2387cbeb3b097e602bf609284895a4e6fcf955fd77e", description: "A collection of metadata gamified Zombie Space Pugs, minted with our own token $Pugchip", name: "Space Pugs Zombie", hero: "https://storage.googleapis.com/jpeg-optim-files/10a2b611-7934-4459-a420-7472174a82f8", supply: "510" }, { policyId: "10e446aabf37156caa8663590edd75949ee921f6b47f84de389f7d5d", description: "A collection of 4000 Vox Pugs, ready to explore the Voxel-based metaverses.", name: "Space Pugs Vox", hero: "https://storage.googleapis.com/jpeg-optim-files/9246c69b-8961-427b-81d2-89fda3afdd25", supply: "4000" }, { policyId: "777129b4b7ecfe1969ba35358c1734a7c8c2231aafd12e36273f420c", description: "Often referred to as card protectors too, these NFTs are to be used on the Cardano Poker platform.", name: "Cardano Poker Lucky Charms", hero: "https://storage.googleapis.com/jpeg-optim-files/9df2c11b-e994-4af8-87ca-abc2f341b24a", supply: "4000" }, { policyId: "060684675065bbc615394bdf0e60cd06f2a59950ca6f33737fb455ed", description: "No need to type when you can express yourself with reactions on the Cardano Poker platform.\n\n", name: "Cardano Poker Reactions", hero: "https://storage.googleapis.com/jpeg-optim-files/49a3da07-2a52-468a-806f-bb5a8d2f5784", supply: 0 }, { policyId: "733a6dfc60ca699baab64c6586f4dc18e2ca73422670349fca9b54c9", description: "Custom 3D animated Space Pugs. Create your own in January.", name: "Space Pugs Glass / Metal", hero: "https://storage.googleapis.com/jpeg-optim-files/e9be67d7-7003-4c2e-b4f9-3bbcc68eacec", supply: "44" }, { policyId: "ad6290066292cfeef7376cd575e5d8367833ab3d8b2ac53d26ae4ecc", description: "Zombits are THE first 10k gaming NFT to be fully minted on the Cardano blockchain! With an April 27-28th 2021 mint date, you're collecting a piece of Cardano's history! \n\nThese collectibles offer unique rewards, staking, passive income, and gaming usability.", name: "Zombits", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/zombits.jpg", supply: "10000" }, { policyId: "a4b7f3bbb16b028739efc983967f1e631883f63a2671d508023b5dfb", description: "The Danketsu take on the Scavengers (formerly known as ADA NinjaZ)", name: "Danketsu:  The Fourth (main)", hero: "https://storage.googleapis.com/jpeg-optim-files/9c854bc4-38f9-40a2-8d25-f74ad2181662", supply: "1606" }, { policyId: "eaa972045049185981aca9f4aaad38bc307776c593e4a849d3802a87", description: "A collection of 7,500 uniquely generated Yeti NFT's on the Cardano blockchain.", name: "Smooth Yeti Mountain Club", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/smoothyetimountainclub.webp", supply: "7500" }, { policyId: "988e147ccf378c24315bc68e72441059713e1667f3850b31aecf38d0", description: "3,000 Radioactive Yetis are coming to the Cardano Blockchain.", name: "Radioactive Yeti Mountain Club", hero: "https://storage.googleapis.com/jpeg-optim-files/517feaa0-6424-4e0a-a784-12bcc8dd0de6", supply: "2920" }, { policyId: "4a3f0261200f39b4d03377e3d4bce6554e3af0236b2c1b4be8d8d8ca", description: "3,354 Snowmobile Parts will be able to be exchanged for 1,118 total completed Snowmobiles. Utility and more information can be found within our Discord server.", name: "Smooth Yeti Snowmobile Parts", hero: "https://images.jpgstoreapis.com/fa741cf9-fddc-4dc8-85c7-5017a2150c0f", supply: "4281" }, { policyId: "4fd402936261d7c227bc4d9beb908932d672fd92daee64d43cb4151c", description: "Exclusive VIP Pass for the Smooth Yeti Mountain Club. A List of perks can be found on the back of the card and in the Discord.", name: "Smooth Yeti Mountain Club - VIP Pass", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/smoothyetimountainclubvippass.webp", supply: "100" }, { policyId: "2a04f5c8bc3d3aab127092181750eefb3a8c7363d5190e2b77445d96", description: "Official Land Deeds for the Smooth Yeti Mountain Club's YetiVerse. These Land Deeds will be 1:1 exchangeable for Land NFT's at a future date. The YetiVerse is made up of 5,000 Plots of Land split between 6 Different zones. Staking rewards and p2e features, more information can be found on Discord.", name: "Smooth Yeti Land Deeds", hero: "https://images.jpgstoreapis.com/4a1f0a97-bb8a-48d8-833e-46420145b375", supply: "5000" }, { policyId: "ca3aeaa53c0b21fccf28c8c724141473d325fe9ea8d0314f7c3b4240", description: "Generative minimalist islands, floating in the first 2D Metaverse where players can Play-To-Earn, Create-To-Earn, and Stake-To-Earn along the way.", name: "Bitlands", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/bitlands.webp", supply: "7000" }, { policyId: "6f80b47342de4b8d534d4fe59d8995471154ff5b416a9e46723440a4", description: "The Cardano On-Chain Lottery Game", name: "Politikoz", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/politikoz.png", supply: "10000" }, { policyId: "946f7a6008edf20bb209fcf4e6ed350e5837ffd2771db66ba34da0e4", description: "A symbol worn by the most trusted members in the Syndicate", name: "Caporegime Ring", hero: "https://storage.googleapis.com/jpeg-optim-files/cad56965-384a-49bc-ae99-bc9a5ad3b768", supply: "150" }, { policyId: "8f80ebfaf62a8c33ae2adf047572604c74db8bc1daba2b43f9a65635", description: "An MMORPG that will bring the Golden Era of videogames to the New Age on the Cardano Blockchain 🏰", name: "Cardano Warriors", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cardanowarriors.png", supply: "10000" }, { policyId: "4c9f7d6c24ba8e2b12f3269ac38d706025e39a50a524afe6eaf79d95", description: "Hand-sketched art with an abundance of personality. VeggieMates is a community focused on mental, financial, and physical wellness.  ", name: "VeggieMates", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/veggiemates.webp", supply: "10050" }, { policyId: "66ffb6f177f1ed667fc5483615d86f2e11270e80473ee0a00e4c9931", description: "The Mysterious Moai Association is a collection of 3333 monolithic human figures who protect their sacred island and their worshipping inhabitants against the 5 hostile tribes.\n", name: "Mysterious Moai Association", hero: "https://storage.googleapis.com/jpeg-optim-files/25b01158-b15e-488d-90b7-b06d3373cee9", supply: "3333" }, { policyId: "911461adcf014ebfd1384a30e383bf9f9b320094202d51d831779937", description: "Cardano Island Condos are luxurious high-fidelity metaverse spaces located across three Coastal Cardano Towers (Trinity Peak, Ascendance Obelisk, and Dream Spire). Live the high life, hang out with friends, and show off your NFT collection!", name: "Virtua - Cardano Island Condos", hero: "https://storage.googleapis.com/jpeg-optim-files/73666021-4b67-466a-81f7-fc8659b40ea6", supply: "2012" }, { policyId: "347f991d4b306919e3e7b01f1cdececa06c2e493a21a0da0931d033b", description: "Cardano Island Land Deeds entitle their owners to select and claim an available Land Plot on Cardano Island – the Cardano community’s true home in the metaverse. Cardano Island is the first crypto island on Virtua Prime where you can purchase land and condos, interact, and explore.\n", name: "Virtua - Cardano Island Land Deeds", hero: "https://images.jpgstoreapis.com/92c25b1c-e08d-4642-9e76-bcc515812673", supply: "1922" }, { policyId: "440606b6a9de303b6886bf7a9e9944f528cabf99096668000665918b", description: "This fully on chain project is a study into chaos mathematics.\n\nFrom the largest structures in the cosmos to the smallest in the quantum realm, mathematics is the language of our universe.\nLike ripples in the sand shifting with ocean waves these patterns evolve into mesmerising formations. This project is here to show you that there is beauty in numbers dancing on the edge of form and chaos.", name: "Eternal Chaos", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/eternalchaos.jpg", supply: "512" }, { policyId: "6e8b22447d73a9823c045513c34d57550a341a6e0836814f900464a2", description: "Allegiance and loyalty to Mad Ape Syndicate, sworn to by oath", name: "Omerta Card", hero: "https://storage.googleapis.com/jpeg-optim-files/5e43c0a8-211b-442f-9fc3-4478a1755c4d", supply: "150" }, { policyId: "3f788a7c5917da8f4c349798a4df3a2f24e5e9004d9062975b9f45b8", description: "300 Arrest Warrants has been issued all over the City of Paragon. The authorities are the one should be in possession of these warrants, but why are you holding one of these?", name: "Arrest Warrant", hero: "https://storage.googleapis.com/jpeg-optim-files/953dde1e-259d-4799-aad9-f112b4ccb180", supply: "165" }, { policyId: "a5425bd7bc4182325188af2340415827a73f845846c165d9e14c5aed", description: "CardanoCity is an evolving NFT project based on the Cardano blockchain. This story begins with Mikka, a girl that lives in Cardano City. Her journey began in our imagination, we introduce her to you via art, now let’s make that art evolve. A collection with 50,000 unique, one-of-a-kind, NFTs.", name: "CardanoCity", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cardanocity.webp", supply: "22917" }, { policyId: "99d99e341dfd21809058fd1c32d4ce6622df7cde4bfcf292c79bfa63", description: "Lovelace Club is an immersive 3D Art & Utility Project. The masked-creatures are a collection of 4444 high-quality NFTs that offer holders significant ecosystem perks.\n\nArtist- Riju Karunakaran", name: "Lovelace Club - The Masks", hero: "https://storage.googleapis.com/jpeg-optim-files/5c1fc29e-c328-4671-bb2f-b0f09096f0b6", supply: "4444" }, { policyId: "59142df7dfea56a5b76b842c206fc7bd844b43a2d10f5eb05f695dcb", description: "Raccoon Syndicate is a high-quality, next-generation, 3D rendered Cardano NFT project aiming to explore Plutus powered smart contract gaming!", name: "Raccoon Syndicate", hero: "https://storage.googleapis.com/jpeg-optim-files/9651d9a4-b834-4fd0-a1e5-5cc0dc1438bd", supply: "10000" }, { policyId: "bb3ce45d5272654e58ad076f114d8f683ae4553e3c9455b18facfea1", description: "Holders of the parent collections Cardano Crocs Club and Radioactive Crocs Club bred these Baby Crocs by combining any two Parent Crocs. These babies share a mix of DNA from both parents and act as $C4 staking multipliers 👀. The process took over 3 months to complete. Here are the incredible results.", name: "Baby Crocs Club", hero: "https://images.jpgstoreapis.com/cb8f811d-2885-42d0-9145-543053702acb", supply: "5081" }, { policyId: "b6f448244e0d1dd7e16e1ab5f55c4a1d0f2b808198f69ec59be7fe75", description: "Hunter Pass gives you lifetime hunter sniping permissions for the most advanced Cardano NFT sniping tool made by cnftjungle.io.", name: "Jungle Hunter Lifetime Pass", hero: "https://storage.googleapis.com/jpeg-optim-files/c86b6f82-fb06-462a-aa4e-5e5636692668", supply: "1079" }, { policyId: "bbb6c713c497b8a9c3390a2157bac72d730ce842b27b5672d3b3d51f", description: "Many generations before The Tribe, GOATIA came to be. Subjects of radical home experimentation, GOATIA charts the first evolutionary step from goat to the hominid Tribe we know and love.", name: "GOAT Tribe: GOATIA", hero: "https://storage.googleapis.com/jpeg-optim-files/60589a74-ee2c-4ded-b756-4fc6368a75ff", supply: "13431" }, { policyId: "65bef6b6530ed7bcda9a3fa50c21e1dfda7ebb93f7255a5f64c8c4a4", description: "\"A billionaire scientist goes by the name The Commander,  successfully created the perfect formula for the Acorn Serum which will transform BigBang Moonimals into their final form!\"", name: "Moonimals Mutant Club", hero: "https://storage.googleapis.com/jpeg-optim-files/8bf21ba3-0081-4bf2-8cbe-ff634a427a68", supply: "552" }, { policyId: "4a813ebb132081c77ad204051852bc7e94582dcb57e2d08d45cedce2", description: "I profess not to know how women's hearts are wooed and won. To me they have always been matters of riddle and admiration.", name: "Book.io - The Legend of Sleepy Hollow", hero: "https://storage.googleapis.com/jpeg-optim-files/d6064c07-70dd-4461-8b53-1eb17143bd8b", supply: "627" }, { policyId: "49b4109aa40548dd55dd106ce58003c9601da016992cc276ed880cd0", description: "The Radioactive Crocs Club is the second collection of the Cardano Crocs Club project. CCC focuses on quality, community, and creating a sense of belonging through gaming. Radioactive Crocs are 3D models, in preparation for metaverses to come in the future.", name: "Radioactive Crocs Club", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/radioactivecrocsclub.webp", supply: "9976" }, { policyId: "2d868badf3dc317234fe253859621fedf661bf9eba275faea80a8bfe", description: "Incredible Artist Sh4pes Gives His Take On Nemonium Skulls", name: "Sh4pes x Nemonium", hero: "https://storage.googleapis.com/jpeg-optim-files/e4192a3a-80e3-42e5-887c-7627b91922a7", supply: "344" }, { policyId: "6ce2d3c06e323d522d0d1c67b4ebae39d62549acc633733e357d6027", description: "The biggest \"real art\" collection in Crypto. Best entry point - NOW.\nComes with a Token and a whole earning Ecosystem.\n", name: "ProxiesNFT", hero: "https://storage.googleapis.com/jpeg-optim-files/19d88e70-f5ed-4edf-bcb2-eb08af370e6c", supply: "5000" }, { policyId: "761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d", description: "The BCRC Rocket is the most scarce and sought after NFT collection in Cardano history. There are three types of available parts to assemble a BCRC Rocket: Solid Rocket Boosters, External Fuel Tank, and Orbiter. With the release of 3,333 total rocket parts, you can acquire three matching parts to fully assemble one of our 1,111 possible BCRC Rockets.", name: "Boss Cat Rocket Parts", hero: "https://images.jpgstoreapis.com/QmeaZ5Uiuc5yQDo9C1npcT4obZcz61Lp6mhmYcoRgCLGV4", supply: "4444" }, { policyId: "a8c68ff1e130c79cd0cad73357670b3b4fd11a0708319a99be14e860", description: "A collection of 9,999 unique Boss Cat VOX Avatars. The first official Boss Planet compatible Avatar collection.", name: "Boss Planet Vox Cats", hero: "https://images.jpgstoreapis.com/ef845bf6-a339-4bd6-83c2-355017bde578", supply: "9999" }, { policyId: "fa5770697a50c517dee8f71a337c38b346f4691c6b3b57a9a25c471e", description: "We make Cardano Village. Be a member of this village. Oh, there's our Charles. Let's create a peaceful Cardano CNFT village.", name: "Cardano Village - Series2", hero: "https://images.jpgstoreapis.com/07620bf6-f547-4078-8216-9ec5dbd16cc1", supply: "7498" }, { policyId: "2c763e2db8337324df122fffa38e0d97ecdf53d139025a0e1b6d6b97", description: "We make Cardano Village. Be a member of this village. Oh, there's our Charles. Let's create a peaceful Cardano CNFT village.", name: "Cardano Village", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cardanovillage.webp", supply: "25502" }, { policyId: "c912fcd6b568582a746e0274f1d4e82161de6df0887da0f0b3d88c4f", description: "GET YOUR CARDANO LOG PET! Take, Play, Feed, Care. \r\noh!! This PET can also be grown in Cardano Village.", name: "LOG PET - DOG", hero: "https://images.jpgstoreapis.com/8f05cd52-45b1-49f0-8cf5-6a74872e1df0", supply: "3003" }, { policyId: "6f9adb8bad2661f2ded205e1d94a1fa9de347432847d7554a8ad8127", description: "A collection of 1,111 algorithmically generated vox frends", name: "The Vox Society - Series 1", hero: "https://images.jpgstoreapis.com/08b109c5-e81d-405b-b904-8e54c849e79b", supply: "1107" }, { policyId: "dc4afb03e6fb51a8aa8537aebe41d7aa018ccfa0201b2b484e3a4e13", description: "CardaStacks is a 3D immersive virtual space easily accessible straight from your browser. Our virtual tower hosts residential living spaces, communal experiences, and storefronts where residents can explore and discover fun and interactive experiences, brands and collaborative projects. This collection holds special items and perks for our community.", name: "CardaStacks - Specials", hero: "https://images.jpgstoreapis.com/53e94af0-442f-49db-a5c9-9a3af7defbb3", supply: "500" }, { policyId: "64250e68a8e02f95c4cfbf9bcbfbd0d8f4ba6682a09faad2017f75b4", description: "CardaStacks is a 3D immersive virtual space easily accessible straight from your browser. Our virtual tower hosts residential living spaces, communal experiences, and storefronts where residents can explore and discover fun and interactive experiences, brands and collaborative projects. This collection holds our limited edition items.", name: "CardaStacks - Limited Editions", hero: "https://images.jpgstoreapis.com/b33a0163-9e78-4a01-be97-a8fa2b494605", supply: "66" }, { policyId: "6e0af8e781acccfdbda55a2cd09c4e35484d63aa7f3c6e5c207dd18d", description: "CardaStacks is a 3D immersive virtual space easily accessible straight from your browser. We are Cardano’s first vertical residential and commercial space all incorporated into our luxury skyscraper known as ‘MetaView Tower’. Our virtual tower hosts residential living spaces, communal experiences, and storefronts where residents can explore and discover fun and interactive experiences, brands and collaborative projects.", name: "CardaStacks - MetaView Tower", hero: "https://images.jpgstoreapis.com/5c276aa7-eb0a-493f-9543-e0d075630783", supply: "10144" }, { policyId: "505afce44a42cd4e55d5607587e393c0fc9b83a6ff826aa671f65938", description: "CardaStacks is a 3D immersive virtual space easily accessible straight from your browser. We are Cardano’s first vertical residential and commercial space all incorporated into our luxury skyscraper known as ‘MetaView Tower’. This collection holds the inventory items you can use in your rooms.", name: "CardaStacks - Inventory", hero: "https://images.jpgstoreapis.com/5beda9d7-13fd-4a69-a271-c41584b6dfbe", supply: "419" }, { policyId: "55daa23e0e243bb4dda613c9d06a78da955f26160b13320999f912e2", description: "Lazy Llama has teamed up with Ada Realm to bring you the Lazy Island metaverse.", name: "Ada Realm: Lazy Island", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/adarealm-lazyisland.jpg", supply: "19966" }, { policyId: "fba0ecd770b0281a4501bc09acb16fee1e38d004be74b31bdc0dd5a4", description: "Adventure through the lands of Adania, a distant realm of high fantasy.  This is a land where humans, elves, orcs and goblins continually do battle for the sake of their own survival. Adania Adventurers are the first to explore this land!", name: "Adania Adventurers", hero: "https://images.jpgstoreapis.com/QmdBZeCD1M7fxWDZ5BnJ3MvpwaFe1g1uvXUPqYguNw7Vr8", supply: "605" }, { policyId: "f01e07a8038849f9c517e2862b72c2d7a25f632a62b67786ff925794", description: "Deep in the cosmos, there lies a tiny planet called Knfty World where 8,800 Knfty Creatures roam.", name: "Knfty World - Knfty Creatures", hero: "https://images.jpgstoreapis.com/df056020-38bb-4f61-9c0c-a85a0bf33b55", supply: "8800" }, { policyId: "43206de9e07fbd36ce6c109b3d34637727233c58a0b38f1da00a9ccf", description: "Panda Society is an exclusive community of 3,333 degenerate pandas exploring the Cardano blockchain. A story-driven experience will lead them on a path of elemental transformation that will change their course of history forever.", name: "Panda Society - OG", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/pandasociety.webp", supply: "3333" }, { policyId: "fd0544d336d9048108cd90eac9d6db315d0eb3a41547ac8375583545", description: "An exclusive limited collection of 333 pandas influenced by the Japanese emperor era aesthetic", name: "Panda Society - Shogun", hero: "https://images.jpgstoreapis.com/598bbfa0-6ec0-47dd-ab89-7a36bb60d50f", supply: "333" }, { policyId: "58b9f55e6ea9828dea7a8d9f49420171c6360f99b5e6e86de5fdb644", description: "9999 of the sexiest Apes in the jungle. They are all unique but share one thing in common, they're all apart of the best community on Cardano!", name: "Ape Nation", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/apenation.jpg", supply: "9999" }, { policyId: "8023e79397e3e8a367ab269390e070aee20328b0177515aafa0d7ff3", description: "The most advanced Fruit on the Cardano Blockchain! A truly unique, colourful & fruity CNFT Collection!", name: "Cryptofruit", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cryptofruit.jpg", supply: "170" }, { policyId: "e965ea5ba5564662242dcbe7b0301bf77840bf6e0f57ec838dc7eb03", description: "Phoenix Arena is a play-to-earn NFT game utilizing the Cardano blockchain. Players can purchase NFTs that provide utility as both PFPs as well as in-game assets. ", name: "Santa Diver by Phoenix Arena", hero: "https://images.jpgstoreapis.com/fb1f07c9-52c4-43ed-9a97-02400812dc53", supply: "55" }, { policyId: "dd69528872e351a402d3edbc6d484cdc45119d6aa5d1869a09473daa", description: "Phoenix Arena is a play-to-earn NFT game utilizing the Cardano blockchain. Players can purchase NFTs that provide utility as both PFPs as well as in-game assets. ", name: "Max by Phoenix Arena", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/maxbyphoenixarena.jpg", supply: "3775" }, { policyId: "372b988d54c5ae6468daf62a72d24837495ea92dc0a6e57f9e518101", description: "An NFT project on the Cardano Blockchain by Outer Space Society.\r\n5.555 auto-generated Haliens with a passion for fashion.", name: "Haliens by Outer Space Society - Season 1", hero: "https://images.jpgstoreapis.com/bffae14a-e49b-49bd-87e3-c48ec70a5086", supply: "5554" }, { policyId: "6d94df95819251df4d66921a244ab13dcb3f21f9da1ce6530e80caef", description: "SnowPunkz is a fun and interactive NFT collection on the Cardano Blockchain. 8,888 SnowPunkz are ready to fight global warming and save the snowmen!!", name: "SnowPunkz", hero: "https://images.jpgstoreapis.com/41b20e37-680b-4363-b142-572c2c5a79cd", supply: "8888" }, { policyId: "d5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc", description: "This collection is deprecated. Head over to spacebudz.io and enter the wormhole to upgrade.", name: "SpaceBudz V1", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/spacebudz.webp", supply: "10000" }, { policyId: "40fa2aa67258b4ce7b5782f74831d46a84c59a0ff0c28262fab21728", description: "Clay Nation is a collection of 10k digital characters with algorithmically assembled, handcrafted clay traits. \nEach is a 1-of-a kind NFT, stored on the Cardano blockchain. Clay Nation is collaborating with industry leaders and developing an expansive social, festival environment; the Clayverse.", name: "Clay Nation", hero: "https://images.jpgstoreapis.com/a1ee80d0-64b4-476b-b659-384bc9fc4b19", supply: "10000" }, { policyId: "20928a85ba1455ca9a2d6a373271f9280c954a3d3b1560902628f134", description: "Clay Mates - the first stop-motion NFTs on Cardano.", name: "Clay Mates Mystery Mates - Clay Nation Astronaut", hero: "https://storage.googleapis.com/jpeg-optim-files/25743999-57f0-4616-90cd-b6afc9f36bdc", supply: "88" }, { policyId: "13e3f9964fe386930ec178d12a43c96a7f5841270c2146fc509a9f3e", description: "Virtual land pitches in Clay Nation - an expansive festival environment - with 3 pockets of community: Sonic Village, Underworld & Baked Nation.\nBaked Nation also combines claymation collectibles & new music - all written into the metadata of these limited edition NFTs x Snoop Dogg & Champ Medici.", name: "Pitches at Clay Nation", hero: "https://images.jpgstoreapis.com/77486ed8-e882-4c87-803c-224be1a8d830", supply: "32027" }, { policyId: "db572f3df42417ce7df52be19905dc30c58f508fa2da10c241dcd713", description: "The first instalment of the official collaboration between Clay Mates and SpaceBudz.", name: "ClayBudz", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/claybudz.png", supply: "657" }, { policyId: "94da605878403d07c144fe96cd50fe20c16186dd8d171c78ed6a8768", description: "The Clay Nation halloween collection created in collaboration with US punk rock band, Good Charlotte. Each character is a one-of-a kind NFT, stored on the Cardano blockchain. \nFull body 3D avatars for each are downloadable, free, on our website - for use in Clay Nation's Clayverse.", name: "Clay Nation X Good Charlotte", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/claynationxgoodcharlotte.webp", supply: "9427" }, { policyId: "b1814c6d3b0f7a42c9ee990c06c9d504a42bb22bf0e34e7908ae21b2", description: "A Collection of 10,000 Yummi Universe - Naru NFTs with Utility.", name: "Yummi Universe - Naru", hero: "https://images.jpgstoreapis.com/8049d274-ff59-4ddb-9bc0-4f6adfd4e61e", supply: "10000" }, { policyId: "7d2d1ee92be476d47043d26ac5a45402e3bdb50a34aa8d716babeefc", description: "Yummi Universe presents the Spoopy Naru Collection that is part of the 10k Seasonal Collection of Spring, Spoopy (Autumn), Summer, and Winter Naru.", name: "Yummi Universe - Spoopy Naru", hero: "https://storage.googleapis.com/jpeg-optim-files/cbec8c2d-6b5a-40e9-a8d1-9baa28d420c2", supply: "4696" }, { policyId: "fe632e251fd654d795dda3d62b9301bae4ea7f1d80da6ab57322667a", description: "Yummi Universe presents the Spring Naru Collection that is part of the 10k Seasonal Collection of Spring, Spoopy (Autumn), Summer, and Winter Naru.", name: "Yummi Universe - Spring Naru", hero: "https://images.jpgstoreapis.com/372bbd84-f38b-46fd-aa0b-4742a2f26943", supply: "1714" }, { policyId: "a5bb0e5bb275a573d744a021f9b3bff73595468e002755b447e01559", description: "The least exclusive, lowest quality, largest cash grab on Cardano. This is not art, they have no utility, we are just printing JPGs.", name: "HOSKY C(ash grab)NFT", hero: "https://storage.googleapis.com/jpeg-optim-files/QmdWnZuTv7nXZUQgb2FanjabzyVt9m4ate7tTKpPWusb4K", supply: "420420" }, { policyId: "5d5b205252b9f5016422d0eace869d7fd45074a4ea4b6c1dc78d1705", description: "Our first launch includes 10,000 adorable and unique Mocomons named Ito. Our Mocomons will soon be game characters.", name: "Mocossi - ITOs", hero: "https://storage.googleapis.com/jpeg-optim-files/da32e011-c2ea-4bb4-9bb1-ba9b306e0ed4", supply: "10000" }, { policyId: "4c3f8a1773b7813e537a75f7b1b2897996bdc0e1d6d7d0c11252e252", description: "The 2nd launch includes 50,000 adorable and unique Mocomons named ITO2. They are born from the breeding process between 1st generation ITOs. Our Mocomons will soon be game characters.", name: "Mocossi - ITO2s", hero: "https://storage.googleapis.com/jpeg-optim-files/4498d748-e6b9-4c81-89bb-bed806671095", supply: "28002" }, { policyId: "5ccef4a926c65c7ae2910056383a285b354340350cac37b552b51e4e", description: "This is a collection of seasonal themed ITOs and collaboration NFTs between projects. They are just collectibles with no utility attached to them.", name: "Mocossi NFTs - Collectible Series", hero: "https://images.jpgstoreapis.com/QmQDFiABtMAeb6u1jcV38u7RV2JAFRkHXcSBAtCQfMbfG7", supply: "217" }, { policyId: "d4473a78ae992ed6d95299e7177b45c8053d5db5495467a29ff0c780", description: "The 2nd launch includes 50,000 adorable and unique Mocomons named ITO2. They are born from the breeding process between 1st generation ITOs. Our Mocomons will soon be game characters.", name: "Mocossi - Magic Pills", hero: "https://images.jpgstoreapis.com/QmZERutW3SFnDuYjJ8UpHsZsbHW6oauKs5148NbeN1ABCa", supply: "7140" }, { policyId: "d8f509072dcaa7c87d4a47dbf512f939838113a36d12ae73b6101866", description: "This is a Christmas themed collection of 20 ITOs from Mocossi project. They are just collectibles with no utility attached to them.", name: "Mocossi NFTs - Christmas ITOs", hero: "https://images.jpgstoreapis.com/QmNzmq3KgHivhEtMexFy92bVy4uDhwJaJfv7FZeLEDzjZ3", supply: "20" }, { policyId: "0af69d267670bfc1bea2c591b95131688b201f499310360e52cee812", description: "Mocossi lands are limited to 10,000 plots, featuring 10 different wonderful themes. Each area is centered on a legendary plot, which is the rarest of all lands.", name: "Mocossi - Lands", hero: "https://storage.googleapis.com/jpeg-optim-files/1bd336c1-954c-4bc5-93bd-a5cff38ae713", supply: "10000" }, { policyId: "de2340edc45629456bf695200e8ea32f948a653b21ada10bc6f0c554", description: "It was a bright day in April when Wilhelm Tesseract discovered he could jump through time.  The year was 2097.  We are the Dead Rabbits.", name: "Dead Rabbit Resurrection Society", hero: "https://images.jpgstoreapis.com/708c5aea-2e32-4634-94e7-531214601106", supply: "6000" }, { policyId: "dac355946b4317530d9ec0cb142c63a4b624610786c2a32137d78e25", description: "The Ape Society is a collection of 7,000 NFTs generated on the Cardano blockchain. Every holder is a member of one of 35 families, and gets access to the DAO. We aim to create tools, resources, art, and harness the power of community to create a breeding ground for knowledge, collaboration, and fun.", name: "The Ape Society", hero: "https://images.jpgstoreapis.com/QmZjgJUXDNvDwpL61KpU8XpTkw5F3SmYHz1SQCSnGSAsxp", supply: "7001" }, { policyId: "0e14267a8020229adc0184dd25fa3174c3f7d6caadcb4425c70e7c04", description: "A study of color exploring making art with a blockchain (compared to putting art on a blockchain)", name: "unsigned_algorithms", hero: "https://storage.googleapis.com/jpeg-optim-files/bc9df34d-5525-4477-9016-ab1207975aef", supply: "31119" }, { policyId: "bff82d31352d9bdfdb49e243ab74af715488631f330b2cf064178f90", description: "BlockOwls is a story based NFT adventure on the Cardano blockchain. \n\nNote: 60 % of our season 1 BlockOwls have undergone the upgrade, which means they have sounds + animated thumbnail. If you are looking for an upgraded BlockOwl we advise you to use the filter: upgraded.", name: "BlockOwls - Hydra Collection", hero: "https://storage.googleapis.com/jpeg-optim-files/5268529e-d500-47ef-9e0f-4fbcd6b069a2", supply: "2654" }, { policyId: "7ea3e7719938f8acd700327d6c9dffd7523a02dce1d9891b5f3a452d", description: "BlockOwls is a story based NFT adventure on the Cardano blockchain. The BlockOwls are the first and main characters in this story.", name: "BlockOwls - Plutus Collection", hero: "https://storage.googleapis.com/jpeg-optim-files/9e84d4eb-38a5-4566-9c7d-e6cbfc66f265", supply: "2243" }, { policyId: "7ea3e7719938f8acd700327d6c9dffd7523a02dce1d9891b5f3a452d", description: "BlockOwls is a story based NFT adventure on the Cardano blockchain. The BlockOwls are the first and main characters in this story.", name: "BlockOwls - Plutus Collection", hero: "https://storage.googleapis.com/jpeg-optim-files/9e84d4eb-38a5-4566-9c7d-e6cbfc66f265", supply: "2243" }, { policyId: "62afb32c355614608390ccfd007f87fb06844cec373dba4ce8272184", description: "In this collection you will find key assets from our story, collaboration NFTs and holiday mints from Chapter 1 Glitchy BlockOwls in Chains.", name: "BlockOwls - Story Collection", hero: "https://storage.googleapis.com/jpeg-optim-files/d48f2ba2-4f50-4a4d-a921-62b7dbf2c29d", supply: "7736" }, { policyId: "3bcc312ebe7cd9281ab3e3d641bf70f207012e539b0e6e7c3f1560d7", description: "A premature monument to paper currency", name: "Old Money - $0.2 Bills", hero: "https://storage.googleapis.com/jpeg-optim-files/52ed0e87-8c5e-4f82-b2fe-8d412225d47f", supply: "7500" }, { policyId: "0e14267a8020229adc0184dd25fa3174c3f7d6caadcb4425c70e7c04", description: "A study of color exploring making art with a blockchain (compared to putting art on a blockchain)", name: "unsigned_algorithms", hero: "https://storage.googleapis.com/jpeg-optim-files/bc9df34d-5525-4477-9016-ab1207975aef", supply: "31119" }, { policyId: "0e14267a8020229adc0184dd25fa3174c3f7d6caadcb4425c70e7c04", description: "A study of color exploring making art with a blockchain (compared to putting art on a blockchain)", name: "unsigned_algorithms", hero: "https://storage.googleapis.com/jpeg-optim-files/bc9df34d-5525-4477-9016-ab1207975aef", supply: "31119" }, { policyId: "0e14267a8020229adc0184dd25fa3174c3f7d6caadcb4425c70e7c04", description: "A study of color exploring making art with a blockchain (compared to putting art on a blockchain)", name: "unsigned_algorithms", hero: "https://storage.googleapis.com/jpeg-optim-files/bc9df34d-5525-4477-9016-ab1207975aef", supply: "31119" }, { policyId: "12f9d9446c422caa870948bae1b8844c26c64958943a3954103b034f", description: "1000 randomly selected mints, including 20 motion animations and music tracks.", name: "Ugly Bros: The Intro", hero: "https://images.jpgstoreapis.com/QmTFQEDLMxakhfMc9kqzEvKMr2fM762caawejdr2kvvS1j", supply: "1000" }, { policyId: "d7726f6b882c6fc2ca0cd96c51e5328e1d577d789b085ee0fbe23bf7", description: "The Ugly Bros season 2 collection is set to become the FIRST non-autogenerated project with a supply of 7500 across ALL blockchains. \n", name: "Ugly Bros: The Definitive", hero: "https://storage.googleapis.com/jpeg-optim-files/98443c75-8d59-4051-855b-43ccbe51b2e2", supply: "7500" }, { policyId: "9e7d7a86edeb47bb78a6b98a0c0556028eddac4c4ec91e778b62ae15", description: "Featuring: OddBoyz, Gnomies, Zi Project, Deathsquad, JB Customs, & The Sven from the Cardano Lounge.", name: "Ugly Bros x Ugly Community", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/uglyboysxuglycommunity.webp", supply: "2000" }, { policyId: "e81db1e5903e43490cce84a826030fe16889f5842b3b1a51487435e4", description: "Ugly Bros X Adey", name: "Music Auction: Ugly Bros X Adey", hero: "https://images.jpgstoreapis.com/QmUszFtXkY1BEyxuq8w6GPK1RopJsjAuffT2fWQvKyq9Az", supply: "20" }, { policyId: "3e506a8f0849e39f40cc65c1db266e760e951700a9344797884cce44", description: "Ugly Bros Customs", name: "Ugly Bros Customs", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/uglybroscustoms.jpg", supply: "75" }, { policyId: "f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a", description: "An NFT-powered naming solution for your Cardano wallet address, secured entirely on-chain via the Handle Standard.", name: "ADA Handle", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/adahandle.webp", supply: "207052" }, { policyId: "d1cec82b0608ab5483bd6969cccd0867d60dc9a8bf9700617210b8a5", description: "Lucky Lions is a collection of 8888 unique Non-Fungible Tokens (NFTs) on the Cardano Blockchain. We aim to be a Community Focused project that invests in CNFT projects and more!  Staked on cardanolands and Mutants", name: "Lucky Lions", hero: "https://storage.googleapis.com/jpeg-optim-files/5d771ed6-22aa-4d66-872a-02631afac26b", supply: "7987" }, { policyId: "961cd58296989d288d8ad39507e81fd40c3e562da89c90e5632061da", description: "GOAT Tribe Helloween 2021 is a special seasonal GOAT Tribe drop airdropped for free, exclusively to GOAT Tribe NFT holders, to mark Hallowe'en and celebrate a successful OG mint.", name: "GOAT Tribe: Helloween", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/goattribehelloween.webp", supply: "666" }, { policyId: "1a71b32ad783556b005f449f3945d711b9103cfc5e6c06e7c129d76e", description: "A one-off piece based on the original GOAT Tribe collection, originally auctioned for charity in 2021", name: "GOAT Tribe: Baphomet", hero: "https://storage.googleapis.com/jpeg-optim-files/7e7d542c-ebf5-4126-bbf0-a126509d1034", supply: "1" }, { policyId: "206c651b110d91d26106e8aa9237e09ac23c6be854f0f3c2e7338668", description: "GOAT Tribe Festive Offering 2021 is a special seasonal GOAT Tribe drop airdropped for free, exclusively to GOAT Tribe NFT holders.", name: "GOAT Tribe: GTFO", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/gtfo2021.png", supply: "1212" }, { policyId: "bbb6c713c497b8a9c3390a2157bac72d730ce842b27b5672d3b3d51f", description: "Many generations before The Tribe, GOATIA came to be. Subjects of radical home experimentation, GOATIA charts the first evolutionary step from goat to the hominid Tribe we know and love.", name: "GOAT Tribe: GOATIA", hero: "https://storage.googleapis.com/jpeg-optim-files/60589a74-ee2c-4ded-b756-4fc6368a75ff", supply: "13431" }, { policyId: "3f75c1332868430e28e156f6309836de8df19b620ab604c166741836", description: "This is a collection of 8888 unique Mandrillz. A meteor strikes near a zoo and the mandrill enclosure is largely destroyed. Some animals are able to flee but carry splinters of the meteor in their bodies - be a part of the horde.", name: "The Mandrillz", hero: "https://storage.googleapis.com/jpeg-optim-files/97598e38-d330-4dec-966e-7b1d5686b04f", supply: "8888" }, { policyId: "1ec85dcee27f2d90ec1f9a1e4ce74a667dc9be8b184463223f9c9601", description: "Find the best deals at lower fees on the dedicated DEADPXLZ marketplace: https://pxlz.org/explorer/", name: "DEADPXLZ", hero: "https://storage.googleapis.com/jpeg-optim-files/573d9cff-e780-48a1-ab32-b003ac1ba321", supply: "10000" }, { policyId: "c364930bd612f42e14d156e1c5410511e77f64cab8f2367a9df544d1", description: "Boss Cat Rocket Club is a finite supply of 9,999 algorithmically generated space bound cats living on the Cardano Blockchain. Our team of artists, programmers, game developers, NFT entrepreneurs and community managers, are all united with one common goal: to create a self-perpetuating, creatively driven, lucrative community that thrives on the collective engagement and ubiquitous proaction of its members.", name: "Boss Cat Rocket Club", hero: "https://images.jpgstoreapis.com/b172fed3-73ac-4586-804f-c6ed75b697fb", supply: "9999" }, { policyId: "5a2cdc6e3aa9612fe4676672f443e7efd39c309d45e7919a4bf27750", description: "Immerse yourself in a digital reality where the impossible becomes possible. Build and Create anything your heart desires, and experience limitless opportunity in your own new virtual universe.", name: "Boss Planet Real Estate", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/bossplanet.webp", supply: "44300" }, { policyId: "761ed110b4040e153ffc20bd2203f2e7d57d610a0cf0eae6167e574d", description: "The BCRC Rocket is the most scarce and sought after NFT collection in Cardano history. There are three types of available parts to assemble a BCRC Rocket: Solid Rocket Boosters, External Fuel Tank, and Orbiter. With the release of 3,333 total rocket parts, you can acquire three matching parts to fully assemble one of our 1,111 possible BCRC Rockets.", name: "Boss Cat Rocket Parts", hero: "https://images.jpgstoreapis.com/QmeaZ5Uiuc5yQDo9C1npcT4obZcz61Lp6mhmYcoRgCLGV4", supply: "4444" }, { policyId: "a8c68ff1e130c79cd0cad73357670b3b4fd11a0708319a99be14e860", description: "A collection of 9,999 unique Boss Cat VOX Avatars. The first official Boss Planet compatible Avatar collection.", name: "Boss Planet Vox Cats", hero: "https://images.jpgstoreapis.com/ef845bf6-a339-4bd6-83c2-355017bde578", supply: "9999" }, { policyId: "af267bd857e9d78fdb5fa05e91a342907518e30b0211cdf2b9c7cd00", description: "Aneta Angels is a collection of 8888 NFTs on the Cardano Blockchain.", name: "Aneta Angels", hero: "https://storage.googleapis.com/jpeg-optim-files/f6a65876-6c3e-4b85-9889-d63caa0f08a1", supply: "8888" }, { policyId: "9e7b9873fc65bc20ada9739b85d15057603577c1777c7325bba9ae9c", description: "5,000 unique Lazy Llamas were released onto the Cardano Blockchain. The Lazy Llama population decreases as they get mutated!", name: "Lazy Llamas", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/lazyllamas.png", supply: "3738" }, { policyId: "852526a77c45662e981181ed9b0afca13cfd8e45c169a20b37832ea7", description: "We are Cardano NFTs you don’t buy, you catch. 🤬 We will be found all over the http://Pavia.io Metaverse.", name: "Pavs", hero: "https://images.jpgstoreapis.com/4f4c7ee6-d854-444b-9fe4-a14bf0e02e09", supply: "10222" }, { policyId: "1bf64bc834b8fb82a9896933182a444d8e3f5e9339881ac3a255c992", description: "4000 Serum-X ready to mutate your Lazy Llama!", name: "Lazy Llamas - Serum X", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/lazyllamasserumx.jpg", supply: "2434" }, { policyId: "4c68c9f9580b7c68b215073c68294e920856c15392df361b83628880", description: "Lazy Llama Mutants can only be created by injecting a Lazy Llama NFT with Serum-X! There are four possible tiers of mutants including Biomutant, Undead, Robo, and a Mystery Mutation!", name: "Lazy Llamas - Mutants", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/lazyllamasbiomutants.webp", supply: "1279" }, { policyId: "30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b", description: "Equine is a racehorse management NFT-based game on the Cardano blockchain; where users can race, breed and trade their horses!\nPioneer collection is the first official drop, including horses, jockeys and skins.", name: "Equine NFT - Pioneer Horses Collection", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/equinepioneerhorses.webp", supply: "14165" }, { policyId: "23a000a839f04bb71b59b4ae74bf8cf5ed21ee0be520690e665ae4b4", description: "Equine is a racehorse management NFT-based game on the Cardano blockchain; where users can race, breed and trade their horses!\nPioneer collection is the first official drop, including horses, jockeys and skins.", name: "Equine NFT - Pioneer Jockey Collection", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/equinepioneerjockeys.webp", supply: "14125" }, { policyId: "22d843e9e8b39d105c645944cc848abee2673d64e60f1f022791ec85", description: "Equine is a racehorse management NFT-based game on the Cardano blockchain; where users can race, breed and trade their horses!\nPioneer collection is the first official drop, including horses, jockeys and skins.", name: "Equine NFT - Pioneer Skins Collection", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/equinepioneerskins.webp", supply: "14125" }, { policyId: "e35121f11357905a7597c923ee5e650394ec5ccafcef3d2c0dc7025a", description: "No description", name: "ADAX/VYFI Partnership NFT", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/adaxvyfi.png", supply: "750" }, { policyId: "6d8dfd8e196b6d233fa6431d6dd39da1a1e8340637ed90d0681ed1dd", description: "VyFinance is a DeFi protocol bringing Neural Net AutoHarvesting & KYC-less Hedge Fund Staking to Cardano.", name: "VyFinance", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/vyfinance.gif", supply: "2030" }, { policyId: "d4162cfa26718e8a4357226ffbfc3df6a210b2a4d5727ecbfd1e8eac", description: "6,666 creatures living on the brink of fud. Here to cause chaos and whatever else they decide to do, idk I'm not their boss or whatever!", name: "Fudbuddies", hero: "https://images.jpgstoreapis.com/QmT6EcNNR5gDuiejXrcqGNkQs2bF5H74Sizi5ktCa7bMbh", supply: "6666" }, { policyId: "a587ce7893ec56fa6136e483499d2a8210e29c34b7dc673446128875", description: "10,000 3D based Heroes representing the four known species of the world of Tyrrha\r\nand their division into multiple factions. The Genesis Heroes collection is the centerpiece in the utility phase and the foundation for gamification. Enter the realm.", name: "Chains of War - Genesis Heroes", hero: "https://images.jpgstoreapis.com/5df8233f-2e15-4494-a0a1-c163ec2ecfda", supply: "10000" }, { policyId: "ed0b8cbd6784015e98bde4c57d898ea900a218ed5542b9aadb950485", description: "Chains of War is building a neo-fantasy world on the Cardano blockchain. The world of Tyrrha is inhabited by various species and shaped by historic events, cultural habits, macro-economical systems and mutual relationships. The collectibles reveal the world of Tyrrha.", name: "Chains of War - Collectibles", hero: "https://storage.googleapis.com/jpeg-optim-files/59be58ad-5bdf-419f-b9cf-3e1f66347845", supply: "650" }, { policyId: "ffa56051fda3d106a96f09c3d209d4bf24a117406fb813fb8b4548e3", description: "From braided steel to polished mahogany, Mekanism is a collection of biomechanical soldiers, dreamers and lovers. They share the same pose and live in the same darkness - connected by the hands that built them, the hands that infused consciousness", name: "Mekanism - Over Exposed", hero: "https://images.jpgstoreapis.com/1cb6619e-2c97-40a7-be9d-d7e223b97ab0", supply: "4000" }, { policyId: "2058eda85ddd54815bf4483aeb7a294c54ecf83b89d1d642f0481a58", description: "Adanauts is an art-focused, story lead project with 7 unique characters hand-crafted in clay, who are trapped in a parallel universe. Their identity has been stripped, stuck in unwanted alien bodies, leaving holders on a journey to BURN to unlock their true identity.", name: "Clay Force", hero: "https://storage.googleapis.com/jpeg-optim-files/c6be08a6-8a93-439b-b47a-721877844146", supply: "6765" }, { policyId: "5329a9b87459e1df8e86ce56bae4b3770862c0969011e6faf474b65f", description: "7777 unique Seagulls in an 11 colony hierarchy, fully funded DAO, and $SALTY token ecosystem. A clash between colonies seems imminent… Gull Wars approaches... Does the monarch with the strongest rule amongst its colony win? Or will the citizens unite to carry their colony to victory?", name: "Salty Seagulls Society", hero: "https://images.jpgstoreapis.com/c1d2f73e-8df5-499e-bcf3-a67a16423af4", supply: "7230" }, { policyId: "86ec26a91051e4d42df00b023202e177a0027dca4294a20a0326a116", description: "Aquafarmers is a collection made by Liqwid Finance consisting of 10000 NFTs on the Cardano Blockchain. By holding one Aquafarmer and staking it on the Liqwid platform, the user can receive a bonus on his staking rewards from 2% to 5% (Depending on the Aquafarmer NFT rarity).", name: "Aquafarmers", hero: "https://images.jpgstoreapis.com/739a3e08-4a96-45d5-b478-627049e13c10", supply: "10000" }, { policyId: "d1b21921e3cc1b7559c2691365ab3b9b1e495e1b0391213b71577430", description: "The Other Planet | Welcome to the New Era of Open World Metaverse in Cardano | UE5", name: "EIKONIKOS - Genesis Passports", hero: "https://images.jpgstoreapis.com/9d5382a3-c0f3-4a2e-b382-8c135bb3d111", supply: "3248" }, { policyId: "07b39a8ead0ef1e3054e816a3b6910060beaf2210fded63fb90ce137", description: "Cornucopias District land is a plot of NFT land within the theme zones and is owned by players. The plots have a pre-determined layout and have five variations of size. The plots are empty upon purchase, and can be built on.", name: "Cornucopias Land Sale - Zones 1-3", hero: "https://images.jpgstoreapis.com/3a19bafb-c4b3-411a-954f-1a39e42b1780", supply: "24000" }, { policyId: "8021c0ab3285cc3cfff2b7e61e96ece565fb37279b67666741587b54", description: "love chapter retire live metal ridge carpet guard original ostrich envelope anchor blossom nothing market", name: "Ghostchain", hero: "https://storage.googleapis.com/jpeg-optim-files/867d0b63-7080-417c-ad34-c60c18635d59", supply: "10000" }, { policyId: "6f3a7634e62c5daae02bcb6b5be34d30e72cf469a13ed2a2458c2154", description: "5410 unique Teddy Troops are coming from a long road of art heritage to conquer the Cardano blockchain now. Created by street and graffiti artist Flying Förtress they are bringing color, style and humor to the CNFT community. Join the Teddy Troops!", name: "Teddy Troops", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/teddytroops.webp", supply: "5410" }, { policyId: "23cacf206fa16c48a6ef61040cd54104005dddcb51e7857dd761a298", description: "See the Teddy Troops marching on teddytroops.io", name: "Teddy Troops - Hosky Trooper Limited Edition", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/teddytroops-hoskytrooper.jpg", supply: "34" }, { policyId: "0ae7039929ebb2fc51858a86e4fc8a4ddc273a380a3436e9d5f7b39b", description: "See the Teddy Troops marching on teddytroops.io", name: "Teddy Troops - Early Birds Limited Edition", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/earlybirdsteddytroops.jpg", supply: "20" }, { policyId: "ec149a4be24c58980f34531186f8535bc61135c4bf9fcdaee714b8b0", description: "Join street and graffiti artist Flying Förtress on his next \"Travel Memories\" journey. This limited NFT edition takes you on his roadmap to the digital art space. See the Teddy Troops marching on teddytroops.io", name: "Teddy Troops - Streuner On The Roadmap Limited Edition", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/teddytroops-streunerontheroadmap.webp", supply: "32" }, { policyId: "3f75c1332868430e28e156f6309836de8df19b620ab604c166741836", description: "This is a collection of 8888 unique Mandrillz. A meteor strikes near a zoo and the mandrill enclosure is largely destroyed. Some animals are able to flee but carry splinters of the meteor in their bodies - be a part of the horde.", name: "The Mandrillz", hero: "https://storage.googleapis.com/jpeg-optim-files/97598e38-d330-4dec-966e-7b1d5686b04f", supply: "8888" }, { policyId: "83c0ab67afc9148bd1571b7a14de1df03cd5624f5992d3b8ec84d6fb", description: "The first clan of the community-driven multimedia brand incorporating music, manga-comics, gaming and NFTs (formerly known as ADA NinjaZ)", name: "Danketsu - Aramar (main)", hero: "https://images.jpgstoreapis.com/0dab0414-baa0-4537-9098-1ed3eb87f6e1", supply: "7252" }, { policyId: "83cb87b69639e20d7c99755fcfc310fb47882c3591778a3c869ea34c", description: "The second clan of the community-driven multimedia brand incorporating music, manga-comics, gaming and NFTs (formerly known as ADA NinjaZ)", name: "Danketsu - Atsuko (main)", hero: "https://images.jpgstoreapis.com/e0fd51ae-315c-469a-873a-7c1ec210d313", supply: "6520" }, { policyId: "8903555ad05ed1794f26240d44137717d0c8049e9133266222c4186a", description: "The third clan of the community-driven multimedia brand incorporating music, manga-comics, gaming and NFTs (formerly known as ADA NinjaZ)", name: "Danketsu - Daisuke (main)", hero: "https://images.jpgstoreapis.com/bae94720-fa50-4c9d-b91f-8e5782f15e34", supply: "8888" }, { policyId: "e1ee4c6d66ce4a7b07143e570ae0ff7013db5ac8388b2b01e90c2b42", description: "The Forgotten Spirits of the community-driven multimedia brand incorporating music, manga-comics, gaming and NFTs (formerly known as ADA NinjaZ). Only 552.", name: "Danketsu - The Forgotten Spirit", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/adaninjaztheforgottenspirit.jpg", supply: "552" }, { policyId: "d6fe6efa7788cb70e57a91891605e3694352cabb4837e870610300e9", description: "ADA Army is a collection of 5000 unique hand-drawn non-fungible tokens created by NFT degens for NFT degens.", name: "ADA Army", hero: "https://images.jpgstoreapis.com/QmdYMyh4819pHm5ygS15ggBgsuGWdkSyi53y47EgHDFDjG", supply: "4996" }, { policyId: "43206de9e07fbd36ce6c109b3d34637727233c58a0b38f1da00a9ccf", description: "Panda Society is an exclusive community of 3,333 degenerate pandas exploring the Cardano blockchain. A story-driven experience will lead them on a path of elemental transformation that will change their course of history forever.", name: "Panda Society - OG", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/pandasociety.webp", supply: "3333" }, { policyId: "df432ac2d6c36c1cf3991bf5587aa9232aa66d80b7142aa9f75c6e01", description: "Flac Finance mascot Milo. Get benefits by holding Milo on the Flac Finance Platform. There are 3900 Standard Edition, 1100 Flac Edition (with Flac t-shirt or cap) NFTs in the collection. Do you have a Milo with a Cardano t-shirt?\n", name: "Milo the Meerkat", hero: "https://images.jpgstoreapis.com/7f346df9-ec72-4a22-aa76-f6eda6c397fa", supply: "5000" }, { policyId: "11ff0e0d9ad037d18e3ed575cd35a0513b8473f83008124db89f1d8f", description: "Club of 11,111 Hoppers living near a lake drawn by community-beloved artist oodon!", name: "Happy Hoppers Club", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/happyhoppersclub.webp", supply: "11111" }, { policyId: "a616aab3b18eb855b4292246bd58f9e131d7c8c25d1d1d7c88b666c4", description: "There is a divergence in the evolution of our species.\r\nWill you embrace CHAOS?\r\nWill you enforce ORDER?", name: "Pendulum – ORDER", hero: "1e6c0f3b-5c36-44a9-8597-bf6d30de4275", supply: "5009" }, { policyId: "f01e07a8038849f9c517e2862b72c2d7a25f632a62b67786ff925794", description: "Deep in the cosmos, there lies a tiny planet called Knfty World where 8,800 Knfty Creatures roam.", name: "Knfty World - Knfty Creatures", hero: "https://images.jpgstoreapis.com/df056020-38bb-4f61-9c0c-a85a0bf33b55", supply: "8800" }, { policyId: "7eb7cf060a9740b63de68afb1c0fde7f74f2895c981573259046ae3f", description: "Lion Legends is a 3D digital art collection of 5555 unique NFTs. The lions have been kept in captivity for years in their homeland. Mint one and you free one.", name: "LionLegends", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/lionlegends.webp", supply: "5555" }, { policyId: "6c79a125d11bdf0cd0323dde9ce28d5ea201a259159205d7539c41d4", description: "The Apes are here on one mission: to run the biggest RIOT the Cardano world has ever seen.  Earn 2.87 $HEXO and 100 $NFTC for staking!", name: "Aping Riot Community", hero: "https://storage.googleapis.com/jpeg-optim-files/81994573-c091-4ecc-9a48-1d06dc8327e4", supply: "5000" }, { policyId: "9bee44c5c494dee38622e6da0b3b312820f9f75dd6cc256c769db788", description: "Knitties is a collection of 10,000 adorable and unique Non-Fungible Tokens (NFTs) on the Cardano blockchain. ", name: "Knitties", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/knitties.png", supply: "10000" }, { policyId: "5230d16116431597796d250dcd7acf1e3afb717bf66c8108abdc83df", description: "Knitties series 2 is a collection of AR compatible characters dropped in smaller sets of 250 per Knittie. Each has a uncommon, collaboration, rare and super rare variant. \n\nEach will provide customisation to your Knitties in the game world, known as Knittie Nook. ", name: "Knitties - Series 2", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/knittiesseries2.png", supply: "2981" }, { policyId: "c410abae1c397ca66bfe0571ef940d13811c6afb1d5775ee1f152476", description: "Handmade algorithmically assembled characters and the first stop-motion NFTs on Cardano", name: "Clay Mates - Pet Shop", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/claymatespetshop.gif", supply: "300" }, { policyId: "333427e94971f530653bb945f34f914252ad570c0b84dfd8c8e8c97b", description: "Yummi Universe - Series 1 collection includes the ultra unique two Tester cards, ten unique Original Naru cards, 01-07 Trading cards, 01-07 Boxed and Unboxed Narus!", name: "Yummi Universe - Series 1", hero: "https://images.jpgstoreapis.com/5be51c19-8a2c-4ac4-8828-07dd2176fa9f", supply: "2170" }, { policyId: "eeac10623d3b950cd81c5f8a1ca1fb7ce786526f50e1e87f25603b60", description: "We are the psychedelic goats, we will live in a very peaceful world known as pyx.  We possess the greatest source of knowledge and magic known to earth kind. Our secret got leaked to humans and they decide to take over the pyx world.  5656 psychedelic goats was chosen to invade the cardano chain and look out for protectors. farm while Trippin", name: "Trippy Goats", hero: "https://images.jpgstoreapis.com/e9105f68-7b8c-40c8-810b-5359996ab06f", supply: "435" }, { policyId: "901ba6e9831b078e131a1cc403d6139af21bda255cea6c9f770f4834", description: "The Mallard Order is a secret society of Ducks hell-bent on dominating Cardano. \r\nJoining their exclusive order will mean taking an Oath of Secrecy.", name: "The Mallard Order", hero: "https://images.jpgstoreapis.com/c7ccb24c-0a7e-43a1-b805-3af3ac7124ae", supply: "6500" }, { policyId: "c4895fbe3dd0b20f268d9dc1dc4802a488050bfae46f73e5d7118b8e", description: "Part 2 of Block Series 01", name: "aeoniumsky - Blocks Part 2", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/aeoniumskyblocks-part2.jpg", supply: "5000" }, { policyId: "6dad8c414e24f941eedb8275c0a1d341e697d584b1b92f4a5193a62f", description: "A psychedelic art adventure on Cardano\nNFT collectibles, Treasure Hunts and more.", name: "aeoniumsky - Blocks", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/aeoniumskyblocks.webp", supply: "2154" }, { policyId: "af267bd857e9d78fdb5fa05e91a342907518e30b0211cdf2b9c7cd00", description: "Aneta Angels is a collection of 8888 NFTs on the Cardano Blockchain.", name: "Aneta Angels", hero: "https://storage.googleapis.com/jpeg-optim-files/f6a65876-6c3e-4b85-9889-d63caa0f08a1", supply: "8888" }, { policyId: "e282271ec9251ba23fb123b0f53618b35cf5a6cde4170c003a0ebf13", description: "Cornucopias ‘The Island’ is a massive Play-To-Earn, Build-To-Earn, and Learn-To-Earn blockchain based game where players can be rewarded with and/or own land, properties and other NFT based assets with real world value all by playing games in a fun and safe metaverse.\n\n‘The Island’ is split into a number of themed zones such as the ‘Wild⋆West’ zone, ‘Farm Life’ zone, ‘Age of The Samurai’ zone etc where people of all ages can play a series of mini games, getting lost in the play-to-earn ecosystem where they can earn real world value as they explore and build in our safe and secure world.", name: "Cornucopias Bubblejett Sprinter 2022", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cornucopias-bubblejett-sprinter2022.webp", supply: "12000" }, { policyId: "b92f6473f18d4b78733d022fd89f3cacc1484fab6eddfd3c5d4b9494", description: "The Legacy(OG) Collection of Derp Birds, used to upgrade to Derp Birds 2.0.", name: "Derp Birds - OGs", hero: "https://storage.googleapis.com/jpeg-optim-files/fed1b452-ef42-47e3-b0ad-61e55cfe4c5c", supply: "10000" }, { policyId: "cb6989d37ab131053737ccab9d22720880a07276eb04e137a4e58291", description: "VyFinance is a DeFi protocol bringing Neural Net AutoHarvesting & KYC-less Hedge Fund Staking to Cardano.", name: "VYFINFTWhite", hero: "https://images.jpgstoreapis.com/e2d27df5-ee86-421c-ab4c-7b35b6d44acf", supply: "3" }, { policyId: "086849cd9f672e731e0d9590a2d28a6a690ffa2f73bae0e1970f0491", description: "The GTI Javelin is a top-of-the-line performance vehicle for the solo adventurer--there's no faster way to get involved in Cornucopias' racing scene!\n\nCornucopias ‘The Island’ is a massive Play-To-Earn, Build-To-Earn, and Learn-To-Earn blockchain based game where players can be rewarded with and/or own land, properties and other NFT based assets with real world value all by playing games in a fun and safe metaverse. ‘The Island’ is split into a number of themed zones such as the ‘Wild⋆West’ zone, ‘Farm Life’ zone, ‘Age of The Samurai’ zone etc where people of all ages can play a series of mini games, getting lost in the play-to-earn ecosystem where they can earn real world value as they explore and build in our safe and secure world.", name: "Cornucopias GTI Javelin 2022", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cornucopiasgtijavelin2022.webp", supply: "12400" }, { policyId: "e282271ec9251ba23fb123b0f53618b35cf5a6cde4170c003a0ebf13", description: "Cornucopias ‘The Island’ is a massive Play-To-Earn, Build-To-Earn, and Learn-To-Earn blockchain based game where players can be rewarded with and/or own land, properties and other NFT based assets with real world value all by playing games in a fun and safe metaverse.\n\n‘The Island’ is split into a number of themed zones such as the ‘Wild⋆West’ zone, ‘Farm Life’ zone, ‘Age of The Samurai’ zone etc where people of all ages can play a series of mini games, getting lost in the play-to-earn ecosystem where they can earn real world value as they explore and build in our safe and secure world.", name: "Cornucopias Bubblejett Sprinter 2022", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cornucopias-bubblejett-sprinter2022.webp", supply: "12000" }, { policyId: "3f943ea81ff99b5564925d948b316bde11a1bb567e76e4b6dd3fea7e", description: "Pavia RPM Avatar Merch", name: "Pavia RPM Avatar Merch", hero: "https://images.jpgstoreapis.com/d9329e60-8f43-4541-84d2-785368dfdbb1", supply: "33255" }, { policyId: "9cce4bbd9f6e06ef9d67b95ad8511532b4569d290d1575fcbac48732", description: "Cornucopias Custom Domes are the largest NFT land types in the Cornucopias ecosystem. With our advanced building systems, custom domes can be molded into virtually anything you can imagine.", name: "Cornucopias Custom Dome Sale", hero: "https://storage.googleapis.com/jpeg-optim-files/a8d6b0e0-85d5-4f7a-8053-c6a9d6d55567", supply: "6000" }, { policyId: "f7f5a12b681be1a2c02054414a726fefadd47e24b0343cd287c0283d", description: "Funplastic is the result of years of R+D+I and thousands of nautical miles travelled resulting in the digitalization of marine plastic collected from the ocean.\r\n\r\nThe collection acts as digital membership to exclusive benefits for Benjamin's Group holders.", name: "Funplastic", hero: "https://images.jpgstoreapis.com/d17cd889-1166-48d7-b5dc-2354937e6a3b", supply: "10000" }, { policyId: "9b15cc4fa78bf2b7fc337b36bdf2e540e2a0973bd748e6292a480f35", description: "Arcade-inspired Battle Cyborgs. Three Classes. One Empire. Reavers primed up for Invasion. Join the Empire in its Galactic Domination.", name: "Reaver Empire", hero: "https://storage.googleapis.com/jpeg-optim-files/bed82ce9-35bd-44e7-b5ea-f60586845371", supply: "877" }, { policyId: "8f63e08467bfbbc260a382a80f3297f9a569fca0293f296620d72d17", description: "Machine Headz is a series of 1000 all animated skulls set in a sci-fi future. The story starts in the year of 2180, where most of mankind is wiped out or in hiding. It is a cold and dystopian world ruled by the feared Machine Headz.", name: "Machine Headz", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/machineheadz.webp", supply: "1030" }, { policyId: "477cec772adb1466b301fb8161f505aa66ed1ee8d69d3e7984256a43", description: "The very first NFT Books – a fully decentralized encrypted asset – a book that can never be burned. This marks a new era in publishing in which you truly own your digital books and the introduction of a secondary market to sell them. The next chapter in the story of books has begun.", name: "Book.io - Gutenberg Bible Collection", hero: "https://images.jpgstoreapis.com/93ed65d5-61bd-4ee5-9858-f654135424cf", supply: "10000" }, { policyId: "e7514e65f977ee4b84a8e62e7d97ea2e5c11682dfe1444d8a14e74db", description: "A collection of our favorite Monsters from Classic Books. Each NFT is a full book and each title has its own rarity model.", name: "Book.io Classics: Monster Series", hero: "https://images.jpgstoreapis.com/b3098c4f-3f27-471e-ace0-76cb5f6268e4", supply: "5580" }, { policyId: "af3566f6e17b0d6a829f673c99a2f4c782bea73b04d8e1cc63db01c6", description: "“Dwell on the beauty of life. Watch the stars, and see yourself running with them.”\n― Marcus Aurelius, Meditations", name: "Book.io - Meditations", hero: "https://storage.googleapis.com/jpeg-optim-files/072ff8df-8ad3-4f33-8c9c-525fdd4996cc", supply: "400" }, { policyId: "44d2b230968b058fd563dd965de1dccb3fe4c6842fdde3f54fcd6b5c", description: "The human mind delights in grand conceptions of supernatural beings.", name: "Book.io - 20,000 Leagues Under The Sea ", hero: "https://storage.googleapis.com/jpeg-optim-files/62e0c86c-23a6-40ea-9fdf-a8662047c349", supply: "2760" }, { policyId: "bed43c1c5e999cc8974d34c75343329153d6298a32886bb04003cf0e", description: "Welcome to the Fluffy‘s! \nA web3 adventure you don't want to mi...𝘽𝙪𝙪𝙐𝙐𝙍𝙋! 🧪", name: "The Fluffy's", hero: "https://storage.googleapis.com/jpeg-optim-files/491783eb-2ec9-4cae-b4e4-be99cfdab19d", supply: "2999" }, { policyId: "3b07e0f2a262fa1436df3c91e420d57ad9fd46aa04377ec80a05ee3f", description: ".", name: "MELD Diamond Hand NFT", hero: "https://images.jpgstoreapis.com/ac7784c2-393f-455e-bfeb-15a524a4044b", supply: "4676" }, { policyId: "5bf59c047ca68a7bb84e81c07c3b5b0d2c41fec55e7a31223f3e700b", description: "Cardalonia Metaverse Lands called Terrania where land owners can interact, explore and customize their lands.", name: "Cardalonia Lands", hero: "https://storage.googleapis.com/jpeg-optim-files/15325533-38b6-49dc-891e-2ce39731b42f", supply: "12168" }, { policyId: "d4e087164acf8314f1203f0b0996f14908e2a199a296d065f14b8b09", description: "Cabins are your interactive gallery, virtual economy, games room, and cigar lounge.  Own a piece of luxurious real estate in The Ape Society and participate in the $SOCIETY ecosystem. Escape within.", name: "Cabins by The Ape Society", hero: "https://images.jpgstoreapis.com/d00e9536-748a-4728-aae4-b5c0526525fa", supply: "10000" }, { policyId: "aa19d5f5ae9b6c93c8e278851194553ddd4789d77f86d3ad2f7480d8", description: "Cardano Croc NFT's. Join the Swamp! The Best Gaming NFT Community On Cardano.", name: "Cardano Crocs Club", hero: "https://storage.googleapis.com/jpg-store-images/hero-images/cardanocrocsclub.jpeg", supply: "7700" }, { policyId: "075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81", description: "GGMC is the first NFT project to expose the masses to diversified cryptocurrency mining in a fun, gamified way. We have a vision to make mining as easy to access and decentralized as possible. This is just the foundation of the project, learn more by reading our Minepaper!", name: "Goofy Gophers Mining Club", hero: "https://storage.googleapis.com/jpeg-optim-files/6b228edb-42a3-421f-8e59-00bd112e5cf9", supply: "5931" }, { policyId: "dff5ea701ad05d953c89c3c5ed0c5fa79a19c47d6f766f314b267eb9", description: "Get Ducked Motherducker! 🦆", name: "Lunatics - Quackheads", hero: "https://storage.googleapis.com/jpeg-optim-files/e842bec8-e2af-4503-aeb9-a3871b232d70", supply: "5555" }, { policyId: "7e605894cdcbe8d1933f0a8760d93bd121aca583cf21ad1c25e51fd3", description: "Mad collection of 9,999 unique dogs that are speeding around the Cardano blockchain with the meanest cars on the block. Not only a brand in the NFT space but a brand in the real world. Owning a Mad Dog gives you access to a plethora of benefits.", name: "Mad Dog Car Club", hero: "https://images.jpgstoreapis.com/66993c1e-f823-4a24-86c4-9fa98faa84da", supply: "9999" }, { policyId: "0414065c7a2bbf91b876449384ba68a17aec83e8e08ab919262225ed", description: "A variety of Car Parts that you will assemble to create a fully built Mad Dog Car. Each Mad Dog Car will be utilized in our Play-2-Earn Game: MD Racing. MD Racing will give \"utility\" a whole new meaning. Hop in and enjoy the ride.", name: "Mad Dog Car Collection", hero: "https://images.jpgstoreapis.com/c5402e3a-f6f1-44a3-8ff2-cec2d5d651ac", supply: "3746" }, { policyId: "d0112837f8f856b2ca14f69b375bc394e73d146fdadcc993bb993779", description: "A decentralised retrotopian universe on Cardano.", name: "Disco Solaris", hero: "https://storage.googleapis.com/jpeg-optim-files/a2f6dfb8-079e-4c5a-b5f4-103fa6e332e4", supply: "5777" }, { policyId: "062b1da3d344c1e6208ef908b2d308201e7ff6bcfddf0f606249817f", description: "OREMOB by Berlin artist ORE ORE ORE is the expansion of his successful Web3 anime project he started in 2021. A community focused on exciting narrative in a world of distinctive visual identities and strong pop-culture references as artform.\n", name: "OREMOB ", hero: "https://storage.googleapis.com/jpeg-optim-files/318f205d-734c-44c3-9988-70c02f7ddf0d", supply: "10000" }, { policyId: "167248c765f731a1535d60acef2fef06cfdf6a4d085917903fc8e820", description: "An exclusive collection of 750 Player Passes for the C4Poker.io poker platform. Each pass can be staked alongside any 8 Cardano Crocs Club NFTs to receive a share of 30% of the poker platform profits. All 3 CCC collections are eligible to be staked with a pass.", name: "$C4 Player Pass", hero: "https://storage.googleapis.com/jpeg-optim-files/721ee6b0-7715-4fc4-bbca-9d7547051193", supply: "747" }, { policyId: "01cecfaeda9d846c08675902b55a6371f593d9239744867462c5382e", description: "No description", name: "Matrix Berries", hero: "QmT3t3ee3gn4Atd32HXKEV4cpDEUbr9gTSKUEPVt2kR2pp", supply: "100" }, { policyId: "788cc573eb32a5378f1d25e6414228c0b7effd788e2f6fb2b11471f3", description: "The Knights of Cornucopias was founded during the early stages of development for Cornucopias. It was built upon passionate adopters of crypto gaming & truly believed this game was the first AAA metaverse to be built on the Cardano blockchain.", name: "Knights Guild of Cornucopias", hero: "https://images.jpgstoreapis.com/754212af-f8e9-4b09-b74d-11b1568dc461", supply: "556" }, { policyId: "11f757d6a582d14faf6a289c4fda728fd33cc1888d16172a964b2145", description: "The Knights of Cornucopias was founded during the early stages of development for Cornucopias. It was built upon passionate adopters of crypto gaming & truly believed this game was the first AAA metaverse to be built on the Cardano blockchain.", name: "Knights Guild of Cornucopias - Part 2", hero: "https://images.jpgstoreapis.com/dcf53cfb-d949-45ed-884d-675e60543dab", supply: "1110" }, { policyId: "90a16d538aea92e209ced72a4d7e389409a0502dfd37b12eb07ce8a2", description: "The Apex Kingdom is a group of original 3D Predators built on the Cardano blockchain.  The Kingdom is being built into the world's greatest community through our focus on developing a sticky culture, delivering high value to our holders, and providing world class art.", name: "Apex Kingdom | Predators", hero: "https://storage.googleapis.com/jpeg-optim-files/f31dcf98-b64b-4937-8ae1-0b7c031b5256", supply: "5531" }, { policyId: "a1a23483764117264791aa80adac1c597bef547dca9e955a4aa229b3", description: "Phoenix Arena is a play-to-earn NFT game utilizing the Cardano blockchain. Players can purchase NFTs that provide utility as both PFPs as well as in-game assets. Step forth into the world of the interstellar Cao Wari empire.", name: "Fluffy by Phoenix Arena", hero: "https://storage.googleapis.com/jpeg-optim-files/de10fe37-6b84-4154-b2c2-c6041bf15eac", supply: "5000" }, { policyId: "8cfa9a13c339f6d1e9fd3373698194e4a0b6da205c6f36cd1c324fcd", description: "FreeLoaderz Load Warrior Series 1 - a collection of 250 fee discount NFTs", name: "Freeloaderz NFT Series 1", hero: "https://images.jpgstoreapis.com/4649a88e-15a8-4327-90ee-32e9cc16063e", supply: "259" }, { policyId: "7a3b4cef5cee62f67626b0db635af0c727001841198435ba64dc627c", description: "Play to Earn Game on Cardano", name: "Chibidango Heroes", hero: "https://storage.googleapis.com/jpeg-optim-files/fd7e0354-04e5-49da-9c50-a7ff52f453e1", supply: "19999" }, { policyId: "4430451b6b2cbbe493326d1220a02718c8a2839095175b2d6b7af2cd", description: "Play to Earn Game on Cardano", name: "ChibidangoMythic", hero: "https://storage.googleapis.com/jpeg-optim-files/1f579f71-ea24-40d8-941c-ac751c4f8de6", supply: "86" }, { policyId: "d436d9f6b754582f798fe33f4bed12133d47493f78b944b9cc55fd18", description: "The Cardano Summit 2022 NFTs are powered by Turf NFT!\n\nThere are 52 different Cardano Summit 22 NFTs\n\n1 for each location where #CardanoSummit2022 takes place\n\n- 1 main event \n- 1 virtual event\n- 50 community events\n\nAttendees can mint\nNo one else\nCollecting them all is HARD", name: "Cardano Summit 2022", hero: "https://storage.googleapis.com/jpeg-optim-files/a352bb14-7d3d-4376-a4d5-31aef4d7bad8", supply: "21790" },
    { policyId: "e5a2bcc51466942a9db1da62471a1b682bde3abcebafee2c7fb1e378", description: "5000 unique plots generated using real lunar mapping data, each representing approximately 1.8M acres of virtual space in the Artifct metaverse.", name: "Artifct Moon", hero: "https://storage.googleapis.com/jpeg-optim-files/ec315485-3f4c-454a-9d7c-bc96aa4becc0", supply: "5000" },
    {
      name: "Alley Katz",
      policyId: "d34743543ccbda22bb948400a4a919b7b54e82123030702e38cc62b6",
      hero: "https://storage.googleapis.com/jpeg-optim-files/6f81589a-dda0-4c46-8917-6c29f4fa3c37",
      supply: "9999",
      description: "An NFT project that will onboard users to Cardano through Gaming, Streetwear and Web3. \n\n#JoinTheDestruction"
    }, {
      name: "SpaceBudz",
      policyId: "4523c5e21d409b81c95b45b0aea275b8ea1406e6cafea5583b9f8a5f",
      hero: "https://storage.googleapis.com/jpg-store-images/hero-images/spacebudz.webp",
      supply: "10000",
      description: "Let's go on an adventure, where will your SpaceBudz take you?"
    }, {
      name: "Magic Kongs",
      policyId: "2eeb39204c3d104b40ec56bfd612bb1067fdea45de15f3a8aad9db71",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/v1680289868/collections/hero_image/a88db1dc-10e7-42ec-8d06-e87376f94cee.webp",
      supply: "4888",
      description: "Bringing some more magic to the Cardano Blockchain, the Chilled Kongs are dropping it's second collection! Join now with the upcoming Magic Kongs mint and take a trip with us into web3!"
    }, {
      name: "Clumsy Ghosts",
      policyId: "b000e9f3994de3226577b4d61280994e53c07948c8839d628f4a425a",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_scale,w_176/v1678458447/collections/hero_image/6a46fc7c-84a7-4af1-ba18-26d5c116e92e?_a=ATCqVAA0",
      supply: '10000',
      description: 'The animated pixel art project. Sometimes spooky, always clumsy!'
    }, {
      name: 'ENCS',
      policyId: '9abf0afd2f236a19f2842d502d0450cbcd9c79f123a9708f96fd9b96',
      'hero': 'https://encoins.io/images/logo.svg',
      supply: '15,000,000',
      description: 'Cardano Native Tokens with Encrypted Redeeming Values'
    }, {
      name: 'IAG',
      policyId: '5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114',
      supply: '1,000,000,000',
      description: 'IAGON is bridging decentralization with compliance for Web 3.0'
    }, {
      name: "Jabi-Zs - Clans of Chaos",
      policyId: "3cf310307e805e598b601b537de0eb18c9f1906649a9a21555877248",
      hero: "https://storage.googleapis.com/jpeg-optim-files/4d542dc5-0f81-4804-a4a7-2e10ae62967b",
      supply: "3200",
      description: "With Chapter two in the BlockOwls Universe, we are introducing the Jabi-Zs: The Clans of Chaos, the enemies of the BlockOwls. Join us in our adventure as we are slowly unfolding the story of the Jabi-Zs."
    }, {
      name: "Melting Moonboy",
      policyId: "637bae5845e801779651d997bedc2dad53ddbe0d5f940b4ff723d769",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678459879/collections/hero_image/4894cc2c-046f-4865-9fdf-fbc8737feaa6?_a=ATCqVAA0.webp",
      supply: "5555",
      description: "Art that melts the heart. A CNFT project designed to celebrate style and positivity."
    }, {
      name: "Cornucopias NFT2Tree 2022",
      policyId: "754b103922978d3e4969d36420239f0cfd8604ebbf094996e4c20c13",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457022/collections/hero_image/4f1bbbdf-55fc-4487-b19b-091d46638ca2?_a=ATCqVAA0.webp",
      supply: "2600",
      description: "The Cornucopias NFT2Tree is a unique and environmentally conscious way to bridge the gap between the metaverse and real life through veritree. Every penny earned from royalties will be allocated directly to veritree for planting additional trees in The Cornucopias Forest."
    }, {
      name: "Cornucopias NFT2Tree Series Two 2022",
      policyId: "916a6fdd92c86dee9be3e68f93279c914566bb1278de80567768268f",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457022/collections/hero_image/4f1bbbdf-55fc-4487-b19b-091d46638ca2?_a=ATCqVAA0.webp",
      supply: "2592",
      description: "The Cornucopias NFT2Tree is a unique and environmentally conscious way to bridge the gap between the metaverse and real life through veritree. Every penny earned from royalties will be allocated directly to veritree for planting additional trees in The Cornucopias Forest."
    }, {
      name: "Cornucopias NFT2Tree Douglas Fir 2022",
      policyId: "4fc6c6639b26992d9b9d887ef1cb959fe8b33bc2bbde4b5afbeda28a",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458597/collections/hero_image/049214dc-df80-45cd-8c20-ced2b2d7173e?_a=ATCqVAA0.webp",
      supply: "2601",
      description: "The Cornucopias NFT2Tree is a unique and environmentally conscious way to bridge the gap between the metaverse and real life through veritree. Every penny earned from royalties will be allocated directly to veritree for planting additional trees in The Cornucopias Forest."
    }, {
      name: "Berry",
      policyId: "b863bc7369f46136ac1048adb2fa7dae3af944c3bbb2be2f216a8d4f",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457345/collections/hero_image/QmSNJ78jdqwbd6yRtHzLrXNnaY8vnuuGN4AbJbMVd2XRuC?_a=ATCqVAA0.webp",
      supply: 100,
      description: "Berry brought NFTs to Cardano and started the first stake pool on a Raspberry Pi. These NFTs were gifted to early supports of berrypool.io"
    }, {
      name: "Genesis - Over Exposed",
      policyId: "5fd604255c9c14dbf3930b78aeb2ccb70fb553bccf898696e92d5191",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678459175/collections/hero_image/7a251e02-ac3d-43e8-999a-81d0982edf76?_a=ATCqVAA0.webp",
      supply: 1000,
      description: "The year was 1928. Steel industry was booming, cars were hitting the scene while flappers were dancing in underground clubs in London. Something else was stealthily unveiled to the world which changed the way we view it: the German-made Rolleiflex film camera. Within the bones of this masterpiece, the Genesis was born. Holding this digital membership token grants full access to exclusive perks within the Over Exposed ecosystem"
    }, {
      name: "Mutants",
      policyId: "2d37295347d9fbd197ecfd0e4ddef32ef757083c23985049326a5411",
      hero: "https://storage.googleapis.com/jpeg-optim-files/802ce852-7e6c-4e99-bfe5-accd6f3b3305",
      supply: 4154,
      description: "Mutants. Just Mutants."
    }, {
      name: "EarthNode",
      policyId: "b97859c71e4e73af3ae83c30a3172c434c43041f6ff19c297fb76094",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458236/collections/hero_image/83be415f-b18a-4995-863a-36e42772bebc?_a=ATCqVAA0.webp",
      supply: 1000,
      description: "EarthNode NFTs (ENNFTs), unique non-fungible tokens for EarthNode Operators which represent their ownership of an EarthNode. EarthNodes are the brain powering the Sharing Economy of World Mobile, the first mobile network owned by the people and built on blockchain. Connecting the unconnected 🌍📱"
    }, {
      name: "Tappy by TapTools",
      policyId: "e3ff4ab89245ede61b3e2beab0443dbcc7ea8ca2c017478e4e8990e2",
      hero: "https://storage.googleapis.com/jpeg-optim-files/d911ee3a-80c2-45a1-b278-29b31a3abab6",
      supply: 5555,
      description: "Tappy is a collection of 5,555 unique penguins living on the Cardano blockchain, each acting as an access pass to TapTools Pro"
    }, {
      name: "MulgaKongz",
      policyId: "77999d5a1e09f9bdc16393cab713f26345dc0827a9e5134cf0f9da37",
      hero: "https://storage.googleapis.com/jpeg-optim-files/3e6415f3-30e7-4425-8ff7-fc5f4450ad1d",
      supply: 5555,
      description: "MulgaKongz is a collection of 5,555 beach loving gorillas created by commercial artist Mulga!"
    }, {
      name: "Platypus Cyberpunks",
      policyId: "787a6798527b21ad0e0f62c021b4ce036513a2d3342b5cb519d2ca19",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1680291553/collections/hero_image/565f0a39-3878-4ada-87af-07e3c4952f1e?_a=ATCqVAA0.webp",
      supply: 5555,
      description: "Platypus Cyberpunks is a collection platypuses with a mission to rebuild the financial world. Join us on our journey to disrupt the real estate industry and make it anew."
    }, {
      name: "OsmiumShare",
      policyId: "fd0c117cd4f8a6cc65ba8f3dfaf7dcfae8aece9c535c79efcdcd6742",
      hero: "https://storage.googleapis.com/jpeg-optim-files/43e683c9-dfe5-4c28-b3ca-57ad113fd691",
      supply: 1200,
      description: "OsmiumShares provide ownership share and additional benefits from partner projects distinguishable through metadata"
    }, {
      name: "OsmiumDAO Cofounders NFT.",
      policyId: "ebcbaec17b9b967ef20cd2e5e35329a422ebda3fe214d441f8fb2213",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678453459/collections/hero_image/e4165a4d-0070-46ba-8ca3-2a8a55bef456?_a=ATCqVAA0.webp",
      supply: 28,
      description: "OsmiumDAO Cofounders On-chain Identifier. All perks attached to the DAO's cofounders is redeemable through this NFTs."
    }, {
      name: "OsmiumDAO OG Collection",
      policyId: "5f812c655ee02b2bfe2ad8d31cab5edd4b66c09149905fd23d768f5e",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678458226/collections/hero_image/c0e68296-dac7-4c7e-b270-a9fe2b3cc907?_a=ATCqVAA0.webp",
      supply: 395,
      description: "OsmiumDAO OG Collection"
    }, {
      name: "ADA Inmates",
      policyId: "65138e35d33281e6f8d39988f8c94754a606297ee43fb2f68c36cca2",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678459855/collections/hero_image/d8b67f1f-f95e-46ef-985b-45abc50b93de?_a=ATCqVAA0.webp",
      supply: 5000,
      description: "Ada Inmates are members of a Prison Ecosystem on the Cardano Blockchain."
    }, {
      name: "FLAC",
      policyId: "8daefa391220bd0d8d007f3748d870f7f3c106040314c8515ccc35a5",
      hero: "",
      supply: 2000000000,
      description: "A RealFi banking platform on Cardano"
    }, {
      name: "Tavern Squad",
      policyId: "2d01b3496fd22b1a61e6227c27250225b1186e5ebae7360b1fc5392c",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457504/collections/hero_image/tavernsquad?_a=ATCqVAA0.webp",
      supply: 10000,
      description: "Embark on a thrilling adventure with Tavern Squad, a Cardano NFT project that merges RPG-themed NFTs and gamification. Take on mysterious dungeons in our Dungeon Raids, a gamified staking platform, earn rewards and climb the leaderboard. Sharpen your sword and join us now for the ultimate quest!"
    }, {
      name: "Clumsy Valley",
      policyId: "b00041d7dc086d33e0f7777c4fccaf3ef06720543d4ff4e750d8f123",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678459027/collections/hero_image/7ae09fab-8622-4a29-8e05-9a61e4061dd8?_a=ATCqVAA0.webp",
      supply: 10000,
      description: "Clumsy Valley is the Clumsy Ghosts' Play-To-Mint Utility Ecosystem. Farm, Craft, Mint and Battle with new NFTs forged in the Valley!"
    }, {
      name: "Derp Birds - PRED",
      policyId: "73056bffdf28f82da5db1f5ac7c06d030c8a551f43889f7f85746a4a",
      hero: "https://storage.googleapis.com/jpeg-optim-files/fa9559a0-c6b4-49da-b59f-87deb63b0f62",
      supply: 3808,
      description: "A customizable and dynamic NFT collection, the PRED are the enemies of the Derp Birds and have arrived to destroy Derpetonia!"
    }, {
      name: "Hokusai Universe - Genesis Pass",
      policyId: "7e5607a2bd62ff22bb23806486b8f09fbe22cc292a71f998d4c315ee",
      hero: "https://storage.googleapis.com/jpeg-optim-files/58a6d9be-bfac-479a-a94a-8277af4a2d0f",
      supply: 500,
      description: "The Hokusai Universe Genesis Pass is the key access to unique experiences, bridging the world of Web2 and Web3, bringing the community together through art, theatre, music, masterclasses, and IRL experiences. This Genesis Pass NFT was designed by Katsumi Sakakura and illustrated by Takashi Okazaki."
    }, {
      name: "MELD Bank Manager v1",
      policyId: "b06729158210bf1ba13f8f3d7d422a918d3eaa82561a705552a2568b",
      hero: "https://storage.googleapis.com/jpeg-optim-files/c5d2134b-0f94-4187-b968-323e7a5b1d42",
      supply: 3326,
      description: "MELD Bank Managers are a community NFT for the MELD protocol. The Bank Managers provide both identity to MELD users and utility to the lending & borrowing protocol. A Bank Manager will boost in yield when supplying by 0.3% and if you apply it to borrowing it will reduce the interest rate by 0.3%."
    }, {
      name: "Cornucopias Bubblejett Bonanza OG Custom 2023",
      policyId: "a34d2c4d1e27334ff6e580904bf4b69cc34640e9f9a495b704d4f0ef",
      hero: "https://storage.googleapis.com/jpeg-optim-files/c5929b82-0b1d-4352-a35f-30dab8940f4b",
      supply: 0,
      description: "Brace yourself for Bubblejett and OG Custom's electrifying collaboration. Boldly featuring two fanless quantum compressors, the Bonanza is OG Custom's adrenaline-fueled masterpiece. This daredevil beast roars right into the A-Class Racing category!"
    }, {
      name: "Melonaires",
      policyId: "6ef872103fd32ea294230a38e950fd2d4a1008ce66e7afe0eb023229",
      hero: "https://storage.googleapis.com/jpeg-optim-files/0f425522-2ed2-4382-949c-731f6c3796a9",
      supply: 928,
      description: "Melonaires is an exclusive community of like-minded DeFi enthusiasts and traders."
    }, {
      name: "CTV - EarthVault",
      policyId: "2af4e8789778b79ddf25f2062377709e49181265d87beb2f99c902a4",
      hero: "https://storage.googleapis.com/jpeg-optim-files/0f11a24e-d4e8-4316-b925-f774310e406e",
      supply: 2000,
      description: "Each CTV EarthVault NFT represents an equal share in all reward distributions related to the ownership & active operating of an EarthNode run through Cardano Token Vault. 1200 of 2000 owned by $ctv_treasury"
    }, {
      name: "Cornucopias Valley Raceworx T3 2023",
      policyId: "ba6015d1f4ba32815ce34831e9b033b1918a849931ae8b67cdeef74d",
      hero: "https://storage.googleapis.com/jpeg-optim-files/4fe2cdad-3b34-4c20-a5e6-14cfe8355a6f",
      supply: 4390,
      description: "The 2023 T3 by Valley Raceworx is a revolutionary flying super vehicle, blending high end sports vehicle aesthetics with advanced jet technology. Speed - 5.70 | Acceleration - 6.71 | Breaking/Handling - 5.38 | Efficiency - 5.95 | Cargo - 10"
    }, {
      name: "CTV - Vault Seeker",
      policyId: "1c9cc348fcb844ba233b1d9582d177a99c25b0117cbb4ca14b9bcebb",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678459166/collections/hero_image/ab0b7618-3276-4ea0-baaf-2d0dc544a60a?_a=ATCqVAA0.webp",
      supply: 10000,
      description: "Cardano Token Vault's **Vault Seeker NFT** rewards its holders in the daily accumulation of our $CTV governance token and a share of control in our community built Cardano token investment portfolio ~ SOLD OUT"
    }, {
      name: "CTV - Chamber Key",
      policyId: "fb57afa1f178d13fdc7bb5609e8fae5859bae9e6d670278f9acbef90",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457992/collections/hero_image/f186fd50-cd45-44fe-b46e-3589604edec0?_a=ATCqVAA0.webp",
      supply: 126,
      description: "The CTV Chamber Key is held by Cardano Token Vault Chamber BoardMembers, Directors and Chair who are responsible for craftingproposals that are voted on by $CTV holders to shape the future of CTV"
    }, {
      name: "The Frog Collective",
      policyId: "4f72dd6b2ac871e99424292129362027dbf4b7f7e378c04b404c641c",
      hero: "https://storage.googleapis.com/jpeg-optim-files/ff726afa-9d36-4e11-94c7-abf1010981dc",
      supply: 3348,
      description: "The Frog Collective is an art and utility NFT Project on the Cardano blockchain 🐸 Besides striving to deliver the cleanest art, we provide the community with tools that enrich the ecosystem and make every CNFT Degen hop with happiness."
    }, {
      name: "The Frog Collective - VIF Pass",
      policyId: "94f30af1f94383ee041e99045eee7b80229457d9e6a509fa8d1ddd84",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678459352/collections/hero_image/861f449a-f0e4-4c59-abb6-2abaa7c6a7ee?_a=ATCqVAA0.webp",
      supply: 200,
      description: "The Frog Collective VIF Pass gives you all the privilege inside TFC's ecossystem. The full list of perks is available on our Discord. #Ribbit"
    }, {
      name: "The Vault",
      policyId: "717718c42fc4e9d1ad8b91df519b3d2182ab5b18e4ffd8bebef9aa82",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458604/collections/hero_image/fade2db2-10ac-46df-816f-1263218455eb?_a=ATCqVAA0.webp",
      supply: 330,
      description: "Owning a vault token gives access to 'The Vault' discord group by CNFT Tools."
    }, {
      name: "PFPPB - Badge of Honor",
      policyId: "0889a2d542897f0c7eefed47d2d809bd8d8ec78881bd4ff9464f683a",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678459374/collections/hero_image/c550fb08-b780-4a09-bcf8-fb32efe70cca?_a=ATCqVAA0.webp",
      supply: 401,
      description: "PFP Pit Brawl is a turn-based player vs. player game. The Badge of Honor will grant holders exclusive in-game rights, allow them to receive airdrops, & participate in governance decisions. Additionally, the Badge of Honor is minted with CIP-68 and will evolve along with the player & game!"
    }, {
      name: "SE Brawlers",
      policyId: "25c75bbf105310685d51cd3adbdd50b72fdbd99be2cc3757dde7eafc",
      hero: "https://storage.googleapis.com/jpeg-optim-files/1f25fb46-c4a1-4ede-9938-d9e211ad1eef",
      supply: 242,
      description: "This collection is part of the PFP Pit Brawl ecosystem. All NFTs are unique 1:1 playable characters in PFP Pit Brawl. Their metadata enables them to receive upgraded stats and additional in-game benefits!"
    }, {
      name: "XDIAMOND",
      policyId: "b6798a74fb7441ef5f7af1ff4ea6150bbb7aaeb0aca0113e558592f6",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457355/collections/hero_image/15c12b3d-1126-4f98-bbc5-b10666fcb8a7?_a=ATCqVAA0.webp",
      supply: 19000,
      description: "XDIAMOND is a Cardano collectible NFT token for marketing and community incentives. You can get it for participation in marketing activities and giveaways, keep an eye on Ray Network social media. Can be redeemed for an XRAY or used as a booster in RayStake!"
    }, {
      name: "BANK- Bankcard",
      policyId: "1d52a061c0b6daea2cb248d32790fbf32d21b78723fcfde75177f176",
      hero: "BANK- Bankcard",
      supply: 2600,
      description: "Bankcard is the BANK team's first max utility mint and the staking vehicle for the BANK ecosystem. Staking multipliers, partner perk cards, and unique one of ones await in this low supply collection"
    }, {
      name: "Poki Lifetime Pass",
      policyId: "9fa8b41c2c7e8902a2b7b14bb957a2b39ff6a7a032fed0d4e687db5e",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458947/collections/hero_image/574c13d4-11df-4739-8450-db443d533359?_a=ATCqVAA0.webp",
      supply: 1000,
      description: "Poki is the first comprehensive Mobile Cardano Portfolio App for iOS, Android and in the Browser. The Poki Lifetime Pass is a limited supply utility token that allows you to unlock the wallet limit on your Portfolio and gives you exclusive access to other premium in-app features in the future."
    }, {
      name: "The Hand by TGT Alpha",
      policyId: "311ce726255e36b230c6315fa89ab952f51e44afc46a458c6852e4ff",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457331/collections/hero_image/cea10b1e-cd7e-4e36-8192-5d70133b0538?_a=ATCqVAA0.webp",
      supply: 300,
      description: "The lifetime access key to TGT Alpha 🤚 Cardano's leading NFT Alpha Community. To be granted access, please reach out to @TGTAlpha on Twitter."
    }, {
      name: "We are Boomers!",
      policyId: "443977d5e32ec0a43e9d82996df41593983ad77c85c908978ee536eb",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678457328/collections/hero_image/71aba032-e7e5-4493-8c8e-8bf555c806f3?_a=ATCqVAA0.webp",
      supply: 1998,
      description: "We are Boomers! is a collection included in the Ash & Tray fictional universe, that features them and some of their closest friends. A bunch of mediocre fifty-somethings who haven't been wised up by age. They were mediocre at their best and that hasn't changed over the years."
    }, {
      name: "Boomerville Comics",
      policyId: "54964119ab1372ac4384c1f08924da1fc3e3997dc048e6f9cd3d9d10",
      hero: "https://storage.googleapis.com/jpeg-optim-files/fc984114-1327-4b32-bef6-b0f5979b833f",
      supply: 48,
      description: "Boomerville comics is a series of short, satirical, and fun stories featuring the characters we got to know from the We are Boomers! Collection. In each of these stories, one of our characters will experience a little adventure that shows us what their everyday life is like in Boomerville."
    }, {
      name: "PlayerMint Purple Founder",
      policyId: "aa4f61af3a968b979b53c5f2cbd9ebc656c172cef6a49626db24482d",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458011/collections/hero_image/playermintpurplefounder?_a=ATCqVAA0.webp",
      supply: 1999,
      description: "NFTs with a focus on utility in the PlayerMint project. Holders gain access to community and product benefits such as exclusive mints and the PlayerMint Beta."
    }, {
      name: "Book.io - Anna Karenina",
      policyId: "a38d0e67e597e7723f648336722b9f167af7f86298016e27a52273ed",
      hero: "https://storage.googleapis.com/jpeg-optim-files/ba2ecbf0-b9e7-47a7-be76-11550c65a98d",
      supply: 999,
      description: "If you look for perfection, you will never be satisfied."
    }, {
      name: "ChainLobby Pioneer Token",
      policyId: "94bab822a8718127f5d5efc1b8e838c0cc578ec260218b1e902206ee",
      hero: "https://storage.googleapis.com/jpeg-optim-files/682f1b61-7c21-4645-b4b9-bec3f3de1c10",
      supply: 1300,
      description: "This token was airdropped to adadigiverse holders and early pioneer projects for supporting the project. The token will give premium feature access to collectors & projects when they go live."
    }, {
      name: "Andels",
      policyId: "49f565e692cbecf4b38a94df1dcc21635a07222efd4dafb470fa4057",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458912/collections/hero_image/1cf9e4e5-4e75-4ad5-ac58-7a7c2a9cd35c?_a=ATCqVAA0.webp",
      supply: 17900,
      description: "Andels is a CNFT minigame. They are five guilds of the Andels. Each guild has its unique benefits in battle."
    }, {
      name: "Andels merchant store",
      policyId: "18693bb90156c9af2207b628876b8b0ce018b17493097ae033f19ffe",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458191/collections/hero_image/f6a24a8a-48c8-4277-97b8-76cc7ce2436a?_a=ATCqVAA0.webp",
      supply: 364,
      description: "Merchant Store Items"
    }, {
      name: "Xerchers",
      policyId: "8b4e239aef4d1d1bc5dd628ff3ce34d392d632e5cda83e42d6fcb1cc",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458607/collections/hero_image/ed18e186-8694-4821-8fe5-335ff2e794ca?_a=ATCqVAA0.webp",
      supply: 769,
      description: "Access NFT to XERBERUS.IO: a powerful Cardano analytics tool! A Xerchers NFT grants you a life long Researcher Subscription, the opportunity to win future $XER Token airdrop"
    }, {
      name: "Hungry Cows - by MuesliSwap",
      policyId: "11ebbfbfd62985cbae7330b95488b9dcf17ecb5e728442031362ad81",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678456482/collections/hero_image/cee37402-33c3-4061-b224-367438b242ee?_a=ATCqVAA0.webp",
      supply: 10000,
      description: "Hungry Cows is a collection of 10,000 unique utility NFTs from MuesliSwap! Boost your yield farming rewards by locking a Hungry Cow when yield farming on MuesliSwap. Each Hungry Cow NFT has a boosting factor between 10% and 90% (based on its rarity level)."
    }, {
      name: "Hash Guardians",
      policyId: "b7ef0cfb14f588740d02ce8a53879ff96ab03c7b21ec1c459ac2bdda",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678453428/collections/hero_image/cf35e35d-b36f-4ab8-818b-947ae21468d0?_a=ATCqVAA0.webp",
      supply: 10000,
      description: "Adventure through the HashGuardians Universe on one of Cardano's most developed gaming platforms. Your NFT = Your Guardian. All 10,000 NFTs are now playable in-game. Tripple Staking: HashGuardians HashCoins | $Society with @the_ape_society | $Hexo with @CardanoLands"
    }, {
      name: "VyFinance",
      policyId: "6d8dfd8e196b6d233fa6431d6dd39da1a1e8340637ed90d0681ed1dd",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678460278/collections/hero_image/vyfinance?_a=ATCqVAA0.webp",
      supply: 2030,
      description: "VyFinance is a DeFi protocol bringing Neural Net AutoHarvesting & KYC-less Hedge Fund Staking to Cardano."
    }, {
      name: "MulgaKongz",
      policyId: "77999d5a1e09f9bdc16393cab713f26345dc0827a9e5134cf0f9da37",
      hero: "https://storage.googleapis.com/jpeg-optim-files/3e6415f3-30e7-4425-8ff7-fc5f4450ad1d",
      supply: 5555,
      description: "MulgaKongz is a collection of 5,555 beach loving gorillas created by commercial artist Mulga!"
    }, {
      name: "Book.io the scarlett letter",
      policyId: "a8742b38d24458133fcecb357d690dc90d37a1fe304a05d4f2fb9d2d",
      hero: "https://storage.googleapis.com/jpeg-optim-files/78da5976-a27b-456f-8178-50f83abf6917",
      supply: 999,
      description: "She had not known the weight until she felt the freedom."
    }, {
      name: "Book.io - The Adventures of Huckleberry Finn",
      policyId: "4a67af6166a185dd1208153a03db338c1eeca415774a91cbdbbd2bdf",
      hero: "https://storage.googleapis.com/jpeg-optim-files/7cb845bc-ed5e-4886-a349-07af8f000916",
      supply: 746,
      description: "That is just the way with some people. They get down on a thing when they don't know nothing about it."
    }, {
      name: "Book.io - The Last of the Mohicans",
      policyId: "4ef871d229458911895f8d332f9ca2f695d63474858b535f3672c4dc",
      hero: "https://storage.googleapis.com/jpeg-optim-files/00c9bfb5-055d-455f-92b7-2cf67dd0b2c9",
      supply: 745,
      description: "God gave him enough, and yet he wants all. Such are the pale-faces."
    }, {
      name: "Book.io - The Story of Doctor Dolittle",
      policyId: "1acfa94c919a585bfe64c77aa10d3dd76ad71da126032f17a353eac1",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1680204332/collections/hero_image/1b813990-b78b-4d24-80b9-d68d3479ee15?_a=ATCqVAA0.webp",
      supply: 700,
      description: "I like animals better than the best people."
    }, {
      name: "Book.io - The Trial",
      policyId: "4babb7775ab277de2497b4710cf5f6d87eda674c4179fad83b248f9c",
      hero: "https://storage.googleapis.com/jpeg-optim-files/913d85e2-9fdb-46cf-a71e-334cf256098f",
      supply: 700,
      description: "You don't need to accept everything as true, you only have to accept it as necessary"
    }, {
      name: "Book.io - The Age of Innocence",
      policyId: "6a8cb6eb56934634749c3f6c4a38dbfefa38a060b145e9481532fb76",
      hero: "https://storage.googleapis.com/jpeg-optim-files/08292f40-86dc-4248-bcae-cce351463845",
      supply: 700,
      description: "Each time you happen to me all over again."
    }, {
      name: "Book.io - The Origin of the Species",
      policyId: "2611c66c9bf4d7c0a5586f9749ff0fdae59c4b91d10aa623eb145cc5",
      hero: "https://storage.googleapis.com/jpeg-optim-files/7c7d066c-8711-4464-a540-5de810e913ae",
      description: "Whilst man, however well-behaved, at best is but a monkey shaved!"
    }, {
      name: "Derplings",
      policyId: "b2d25f829ebb7f4c97b5e847923a1115b23ebf78000722c229c9c9f7",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678458814/collections/hero_image/derplings?_a=ATCqVAA0.webp",
      supply: 7497,
      description: "From the creators of Derp Birds. A Mad Scientist has developed an incubation device that allows male birds to produce eggs containing Derplings!"
    }, {
      name: "Derp Apes",
      policyId: "f4873b426a498350c579690bd1f4a369d5d7b521c778acf322f77334",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678457525/collections/hero_image/derpapes?_a=ATCqVAA0.webp",
      supply: 8888,
      description: "Drapes (Derp + Apes) are a first-of-their-kind, never-before-seen, completely 100% original NFT animal species brought to you with ❤️ from the team that brought you Derp Birds."
    }, {
      name: "Night of the Living Dead- nucast",
      policyId: "93e8c3752f8c6bbeab10a48943d548653f3ab1105f5e0b832cd93a1e",
      hero: "https://storage.googleapis.com/jpeg-optim-files/6bc5e1a0-8e09-47a1-a2f3-8b629311ce7a",
      description: "Night of the Living Dead is a collection of 700 NFTs, each representing ownership of the iconic 1968 George Romero horror film. Stream the film using Nucast and enjoy a legendary Cardano film experience!"
    }, {
      name: "Cornucopias Bubblejett Sprinter OG Custom 2022",
      policyId: "a4badea66770768b02ff7b9674d445f13016ce901804f45844e00ebd",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678460243/collections/hero_image/dca9e109-642a-4a31-80b9-e86a4114dad7?_a=ATCqVAA0.webp",
      supply: 800,
      description: "The Bubblejett Sprinter is a flying car that is used to travel from your Home Bubble to the Themed Zones or the City."
    }, {
      name: "Chains of War - Genesis Mounts",
      policyId: "6f0a817307ed83a7a99e95f71dcc2808804e9ebc3ed0bf007239cebc",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458989/collections/hero_image/1bf45e38-9b98-41cd-b3f6-d690df663e8a?_a=ATCqVAA0.webp",
      supply: 4000,
      description: "Chains of War is building a mainstream Extraction Game on Unreal Engine 5 and now returns with the Genesis Mounts collection. High-quality 3D NFTs that are one-of-a-kind, game-ready mounts. Play with your unique skin or lease your limited edition to gamers. Rigged and fully compatible with UE5."
    }, {
      name: "Chains of War - Armory",
      policyId: "d68c174fe9edcb5c0c89770aa88ae680508e75a0c0967c645f0aa800",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678456920/collections/hero_image/7588f3ea-9407-41eb-91e9-f83e714bc9c1?_a=ATCqVAA0.webp",
      supply: 26,
      description: "The Chains of War Armory collection contains unique cosmetic application for in-game purposes, such as skins, theme packages, titles, weapons, armor, etc."
    }, {
      name: "Book.io - The Kama Sutra",
      policyId: "067e768e94056c5b70911944d9ea6f43b065797b419039fb8effa6f0",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678457865/collections/hero_image/1691cf5f-5628-4ff6-b5d9-a55d4a6e92fb?_a=ATCqVAA0.webp",
      supply: 999,
      description: "Love is necessary to satisfy the mind."
    }, {
      name: "Tooligans",
      policyId: "aa4411ee213166c23050ec6b3e782500fd3f9210121d607378622548",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678457403/collections/hero_image/466145b8-3292-4574-b8f7-eb9ee43050b1?_a=ATCqVAA0.webp",
      supply: 1024,
      description: "A World Cup Celebration NFT Series by CNFT Tools & Pixelado.1024 unique Tooligan supporters all hoping to see their team win, all you have to do is mint the winning Tooligan to win! All profits and royalties raised from this project will be used as community prizes."
    }, {
      name: "Cornucopias Cheeky Racer",
      policyId: "742b004c42b6dd7f7935c85f5d3884037778c8d80a0f9724d3b57049",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1678459350/collections/hero_image/8eaee89d-6c77-4be2-a98f-2c849b4b97b7?_a=ATCqVAA0.webp",
      supply: 5560,
      description: "This is an in-game wearable racing suit with partnership utility. Suit holders will gain access to Cryptopia (VC Firm partnered with Cheeky Crypto), an early-stage, decentralized investment gateway to NFT startups and Crypto startups."
    }, {
      name: "Fraction Estate V.I.P",
      policyId: "fa0009db1a71d3618ce6336f8bc623cdf81c99a3572f6755ef77e9ae",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_352/q_auto:best/v1680273823/collections/hero_image/30903ee1-adae-4e77-8992-ce7497ba8ea0?_a=ATCqVAA0.webp",
      supply: 15,
      description: "Become an early adopter of Fraction Estate. Get access to our marketplace before anyone else and receive a discount on fees forever"
    }, {
      name: "Jellycubes - BIG",
      policyId: "3ee441f40fe395a2e98eea1df7cf8816b0fca3d5d164893596ce306d",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_176/q_auto:best/v1678458594/collections/hero_image/ba2636b2-60e3-4df9-9464-33fdf2b0cb7d?_a=ATCqVAA0.webp",
      supply: 2600,
      description: "Jellycubes are your ticket into the Exclusive Block Investment Group - an Alpha Group that provides members with the Information, Tools, and Networking to succeed in the Crypto & NFT Space. Make sure to check out our Installment/Payment Plans on our Discord to buy your Jellycube over time!"
    }, {
      name: "Toolheads",
      policyId: "285c0b8e91ba323da4ca083c9db837e111dafbf3143ece4d03eba8f4",
      hero: "https://storage.googleapis.com/jpeg-optim-files/b05f4587-eacd-416c-b6f9-7d4668a2a50f",
      supply: 4755,
      description: "Toolheads - An NFT Collection from CNFT Tools. Earn $TOOL. Have fun."
    }, {
      name: "Katana",
      policyId: "68020267bc8fda8e4e19cca05fe61fbe9b44dd00bebe8baf62762338",
      hero: "https://storage.googleapis.com/jpeg-optim-files/a0b710b3-dd0f-420f-ab3e-cfe1f9e12312",
      supply: "441",
      description: "Owning a Katana NFT grants collectors exclusive benefits and opportunities within the Elevators Labs ecosystem. These benefits include access to Alpha group, early access to our DEX, and even lifetime access to all our products."
    }, {
      name: "Walkers-WalkPASS",
      policyId: "6209c0ea7a7662e868ce8fbf6a251c78517fa03a8b9aefb94af55d98",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/…279c-679a-49e3-a38a-19dcd88de148?_a=ATCqVAA0.webp",
      supply: "200",
      description: "The WalkPass is your proof of fortitude to battle with the challenges of the Labyrinth and rise above and beyond to find the exit"
    }, {
      name: "ROBOROBO",
      policyId: "f4db6ebd66ca30d3c49af3aa4285b08c64f4cb3f53790d0f760e09fc",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/…/collections/hero_image/roborobo?_a=ATCqVAA0.webp",
      supply: "1006",
      description: "ROBOROBO is a collection of unique randomly generated 3D robot NFTs - there will be multiple seasons. Each ROBOROBO comes with a random set of traits & weapons that set the overall strength factor for the ROBOROBO NFT."
    }, {
      name: "Book.io - The Fixer (Lawson Vampire Series Book 1)",
      policyId: "efc46d26f2a914c405bd99b249eb2de7cd2ad320b5cbe74e4f8e9510",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_256/q_auto:best/v1678458185/collections/hero_image/205716ec-3d48-490d-9d7f-ee4587d64b9f?_a=ATCqVAA0.webp",
      supply: "2750",
      description: "Not every vampire likes drinking blood... Meet Lawson: vampire by birth, Fixer by trade. His mission: preserve the secret existence of living vampires by any means necessary."
    }, {
      name: "Book.io - To the Vanishing Point",
      policyId: "7cf9b30e0ebd3a74a97e684bda2a8235995508aaba852a57b21aa2c1",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_256/q_auto:best/v1678457483/collections/hero_image/1db24268-45b5-4448-b8c7-5af426fc935a?_a=ATCqVAA0.webp",
      supply: "1511",
      description: "Aliens in the mirror are closer than they appear. New York Times-bestselling author, Alan Dean Foster, takes readers on an out-of-this-world road trip."
    }, {
      name: "Book.io - A Scream of Angels",
      policyId: "4570dc68d1362c3317659cbad84d7dd13047a99e501f1f77e7e8ab82",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_256/q_auto:best/v1678456399/collections/hero_image/45a2e0c1-509c-4196-9bd0-612776b93652?_a=ATCqVAA0.webp",
      supply: "1801",
      description: "From New York Times and USA Today bestselling author Joseph Nassise comes the second action-packed entry in the internationally acclaimed Templar Chronicles urban fantasy series!"
    }, {
      name: "StripperCoin Box Girls",
      policyId: "2d00254bceb5e6bd34943ae6fd91335694e88cc28276a1fa3453c0ed",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_256/q_auto:best/v1678458524/collections/hero_image/f61b4182-b61d-4ca7-b5de-6b1cf5b1ad91?_a=ATCqVAA0.webp",
      supply: "900",
      description: "StripperCoin Box Girls are an NSFW NFTease series aiming to titilate and bring you closer to your favorite stripper archetypes. Stakable on @CardanoLands!",
      nsfw: true
    }, {
      name: "Disco Solaris - Moebius Pioneers: Naked Discos",
      policyId: "3dcf9134d9d1bcf3bcad9bdcf0f46d602f5eaa579204d085ab8749e1",
      hero: "https://storage.googleapis.com/jpeg-optim-files/6b1927f2-551f-4ba2-9ff5-4fc95682e71e",
      supply: "3732",
      description: "Naked Discos from the customisable Moebius Pioneers collection.",
    }, {
      name: "Token Riot - Revolutionary Faction IDs",
      policyId: "2c1f512e2a3dd5f8c5b749a58e180aa8c552fcb02464f3356b823618",
      hero: "https://storage.googleapis.com/jpeg-optim-files/09d3c06a-3c3b-4ff5-ad25-601c629f66f5",
      supply: "14400",
      description: "We are an underground movement, spawned by a rebellion against boring old ideas. We didn't come to sit still and be quiet. We came to start a riot.",
    }, {
      name: "Flooftopia Founder Pass",
      policyId: "f0d44789e1634fca70a36a693a4ebb4a71bec2f6c11c2eb89f78abe7",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678459277/collections/hero_image/ba51bb0f-0014-4270-b593-702d36a7f633?_a=ATCqVAA0.webp",
      supply: "261",
      description: "Flooftopia is an MMORPG built on the Cardano Blockchain with innovative developments such as the Build-an-NFT Functionality and unique gameplay!",
    }, {
      name: "ADAZOO x Gen1 Lacies",
      policyId: "8cea09a81ddf9707fd2c80f544d984bd0e8f16898bba852c53bc1048",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678458146/collections/hero_image/adazoo-gen1ladies?_a=ATCqVAA0.webp",
      supply: "4958",
      description: "Experience one of the first CNFT integrated games on the Cardano blockchain! Collectables and gamification into one project. First Generation lacies are limited to 5.000 and will give you early access to the game.",
    }, {
      name: "Book.io - The Island of Dr. Moreau",
      policyId: "7865c7c27bb388010363f22f7738bf8b68c7bd166323194bb584de6c",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678459379/collections/hero_image/9a8bec72-c92f-4924-ab0b-45d873fde884?_a=ATCqVAA0.webp",
      supply: "1628",
      description: "An animal may be ferocious and cunning enough, but it takes a real man to tell a lie.",
    }, {
      name: "Book.io - Treasure Island",
      policyId: "377237b0569943236fd503c6755cd208f1df00d5fb30fda0fdcef3c6",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678458101/collections/hero_image/51ae3595-baba-47a7-bdc0-09d6314b0823?_a=ATCqVAA0.webp",
      supply: "2407",
      description: "Seaward, ho! Hang the treasure! It's the glory of the sea that has turned my head.",
    }, {
      name: "Book.io - Don Quixote",
      policyId: "aa21582ec1ce92f2c21ac61c8b5bbcdaadad0efa59aca5d64fba22ab",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678457009/collections/hero_image/84194a43-ffd1-4212-9616-424df4e4bf23?_a=ATCqVAA0.webp",
      supply: "2402",
      description: "for the truth may run fine but will not break, and always rises above falsehood as oil above water...",
    }, {
      name: "Book.io - The Count of Monte Cristo",
      policyId: "88a3c2d3f63aea5cc823f423723d5d34e5c020d902f74e33ffd2976a",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678459849/collections/hero_image/04a66f69-367c-4ccd-aef5-40c5e0fc29a9?_a=ATCqVAA0.webp",
      supply: "3149",
      description: "All human wisdom is summed up in these two words, - 'Wait and hope.",
    }, {
      name: "Book.io - The Time Machine",
      policyId: "4ef3715c651f3ab9e7ab6a3c0ab43002ddc3c3f48ab41bce766a396c",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678459859/collections/hero_image/58b0368b-2622-44cb-8cfe-bd945b8dceaf?_a=ATCqVAA0.webp",
      supply: "1629",
      description: "Looking at these stars suddenly dwarfed my own troubles and all the gravities of terrestrial life.",
    }, {
      name: "Book.io - The Adventures of Sherlock Holmes",
      policyId: "922cb1a254f09f4b51c6613c10303fcc26735d1620d257a9eb064af6",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678459859/collections/hero_image/58b0368b-2622-44cb-8cfe-bd945b8dceaf?_a=ATCqVAA0.webp",
      supply: "1628",
      description: "You could not possibly have come at a better time, my dear Watson.",
    }, {
      name: "Book.io - The Three Musketeers",
      policyId: "b64b1ef042a36b8e028fcf1393abf1ec81665266a2f0d568ef116b50",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678458481/collections/hero_image/f16e855f-35ef-491c-b340-bce0d62c7f77?_a=ATCqVAA0.webp",
      supply: "1165",
      description: "All for one, one for all.",
    }, {
      name: "Book.io - Journey to the Center of the Earth",
      policyId: "6a1388037f4a58d3acd4c121a94a6ebb0ca428a53d4321ce1f7ac28d",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678458804/collections/hero_image/d21badf5-b0e6-4626-a57e-961cb727011c?_a=ATCqVAA0.webp",
      supply: "1155",
      description: "Our principle is, that books, instead of growing mouldy behind an iron grating, should be worn out under the eyes of many readers.",
    }, {
      name: "Book.io - Around the World in Eighty Days",
      policyId: "38cd9d0f7c8f3ce5778e2c0f425cb3cb13e73b84aa80891c761bcf72",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1678458591/collections/hero_image/f0c1ddd4-eaa2-4fd9-83c7-353d330e2aa6?_a=ATCqVAA0.webp",
      supply: "1165",
      description: "The chance which now seems lost may present itself at the last moment.",
    }, {
      name: "Book.io - Gulliver's Travels",
      policyId: "a2f5e154d6283a51878dba2276c280930255a27e0172abd70f889afb",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_128/q_auto:best/v1680290034/collections/hero_image/9d6f1dfe-2214-4030-8c74-fff2be0fcd84?_a=ATCqVAA0.webp",
      supply: "1165",
      description: "Every man desires to live long, but no man wishes to be old.",
    }, {
      name: "Book.io - The Man in the Iron Mask",
      policyId: "ab7c7e0d4e4c5c5b1c07940d8cfa30ce3831f9b1978690759a27b429",
      hero: "https://storage.googleapis.com/jpeg-optim-files/78ca8f22-42ea-4946-8459-55a85943d93e",
      supply: "745",
      description: "A man is held to be a criminal, sometimes, by the great ones of the earth, not because he has committed a crime himself but because he knows of one which has been committed.",
    }, {
      name: "Book.io - Robinson Crusoe",
      policyId: "55c31185da61f608e500720ab7fcd352b7d9aac3501e0acdfd498919",
      hero: "https://storage.googleapis.com/jpeg-optim-files/1b15e178-635e-43d6-a9dc-0b70d6e173ec",
      supply: "745",
      description: "It is never too late to be wise.",
    }, {
      name: "Book.io - Robin Hood",
      policyId: "3d3b6eea71eff36cb7befa620518622e281733e515b4bbc400f4ff78",
      hero: "https://storage.googleapis.com/jpeg-optim-files/4c80cca6-73da-4c9b-89e6-034b984c4b32",
      supply: "745",
      description: "What is done is done; and the cracked egg cannot be cured.",
    }, {
      name: "Book.io - King Solomon's Mines",
      policyId: "2cdb2193bf02fbf409417a8b085a23ebc7f2ca54a0d1b05ea3c9cd76",
      hero: "https://storage.googleapis.com/jpeg-optim-files/ba293022-0419-4358-9919-147a37c2dd12",
      supply: "745",
      description: "Fortune favours the brave",
    }, {
      name: "Book.io - The Hardy Boys 1-3",
      policyId: "adfb8845215a9a71384353dbb6222fb1f911f2845dcacc463e882c23",
      hero: "https://storage.googleapis.com/jpeg-optim-files/97796bf3-9e1b-4ba0-9659-d8b65614b792",
      supply: "745",
      description: "The smarter crooks are, the harder they fall.",
    }, {
      name: "House Of Titans",
      policyId: "53d6297f4ede5cd3bfed7281b73fad3dac8dc86a950f7454d84c16ad",
      hero: "https://storage.googleapis.com/jpeg-optim-files/5de65048-3646-4d62-9a3d-62a637295f0c",
      supply: "6000",
      description: "Step forth into a Game of Thrones-style world where you can choose and identify with a house that resonates with you. How deep down the rabbit hole are you ready to go?",
    }, {
      name: "Book.io - The Heart of Darkness",
      policyId: "21f3f8a8fcdffb15ff287594d2533d3460aa1ba227a16b7898adb645",
      hero: "https://storage.googleapis.com/jpeg-optim-files/bb2a45a2-5591-4552-8f5b-a81159592320",
      supply: "482",
      description: "The horror! The horror!",
    }, {
      name: "Rarity Dawg",
      policyId: "c7e0049200851adec2cb4d9abf2e9a57e24bf1389181dc536c5bfc89",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458439/collections/hero_image/0af363ce-3920-4396-8772-144a7cbfcb67?_a=ATCqVAA0.webp",
      supply: "1541",
      description: "Assembled using the rarest attributes from the most esteemed projects on Cardano, Rarity Dawg is a utility-laden PFP collection providing collectors with unbridled access to the Splash ecosystem and exclusive benefits that enhance your token collection experience.",
    }, {
      name: "Book.io - Dog Breaking (Hosky Edition)",
      policyId: "a9aad3d5f252fbed2e7965eab30dd01427291185b2e2cbca822e1ee5",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678456402/collections/hero_image/9f1f0e43-b379-4485-8b15-bd256871f514?_a=ATCqVAA0.webp",
      supply: "420",
      description: "Judicious perseverance,-in other words, consistency,-will not only teach accomplishments, but correct bad manners.",
    }, {
      name: "Cardano Summit 2021",
      policyId: "0ad7f7a3281ba7c832344eb267594899147709b708176bc1084979f1",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678460182/collections/hero_image/93416455-a0f4-4cc8-869a-5d9ce71f5d7c?_a=ATCqVAA0.webp",
      supply: "25500",
      description: "Cardano Summit 2021 collectible NFTs",
    }, {
      name: "Virtua - Cardano Island Vehicles",
      policyId: "5204dddfa644faf333efa77d97e4119a9eb6196404b89a411dd84288",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458766/collections/hero_image/d7d2dc36-a8e6-4c16-b7d2-b8b13fb14b24?_a=ATCqVAA0.webp",
      supply: "7854",
      description: "With the rise of the first crypto island on Virtua Prime, the community will get their hands on exclusive vehicles!",
    }, {
      name: "Virtua - Cardano Island Miner Bots",
      policyId: "b3a992c60d22b6fdfdd82b9a15105323ec0be6e6698ae36a54820002",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458624/collections/hero_image/63690926-dba8-4704-80be-4a9ac9274ef0?_a=ATCqVAA0.webp",
      supply: "6170",
      description: "Collect unique Land Bots to get even more value from your Land Plots, and bring your Virtua Prime experience to life! Each Bot is a one-of-a-kind 1/1 generative NFT with its own set of attributes and skills. Land Bots can also be used as PFP assets!",
    }, {
      name: "HOSKY: S#!tties",
      policyId: "de8086819da489257867042d568d4d7d4822387f94a092a578c40473",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678460176/collections/hero_image/486dbe45-5a2a-4458-9101-eac7f53df4a0?_a=ATCqVAA0.webp",
      supply: "101",
      description: "A tribute to Berries, but s#!ttier.",
    }, {
      name: "Book.io - The Prince",
      policyId: "bdd1d375c058986c9bc374cf8ec7fbdf8042e0e3946f2fa3ebc5099f",
      hero: "https://storage.googleapis.com/jpeg-optim-files/110d4fab-6570-4570-a452-a352f332957c",
      supply: "592",
      description: "Every one sees what you appear to be, few really know what you are.",
    }, {
      name: "Book.io - Beyond Good and Evil",
      policyId: "bc5a925491648f7693da014ad89cf950c2221b2af80daa8c23f026b0",
      hero: "https://storage.googleapis.com/jpeg-optim-files/00a4dd44-379b-4d95-aa5b-96d27aa5decf",
      supply: "750",
      description: "He who fights with monsters should be careful lest he thereby become a monster.",
    }, {
      name: "Book.io - Tarzan of the Apes",
      policyId: "42001f94bddc04afa955e9aaab7181f858e85a664182a10312ada795",
      hero: "https://storage.googleapis.com/jpeg-optim-files/b23cc536-be63-42d4-abcf-777e83b0d1ab",
      supply: "700",
      description: "I got this story from someone who had no business in the telling of it.",
    }, {
      name: "Book.io -The Heretic",
      policyId: "b2ce39e8921573ceab254a841d6570f748ccf36be6202244de407dac",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458523/collections/hero_image/20376667-4618-47df-9555-a45e713a6175?_a=ATCqVAA0.webp",
      supply: "2746",
      description: "From New York Times, USA Today, and Der Spiegel bestselling author Joseph Nassise comes the first book in the internationally acclaimed Templar Chronicles urban fantasy series! Monsters prey on the innocent. He preys on the monsters.",
    }, {
      name: "Book.io - The Picture of Dorian Gray",
      policyId: "017336e023bac175b6d21643a7156da57494bdb47fa79da2624bd6f4",
      hero: "https://storage.googleapis.com/jpeg-optim-files/94fcfba2-d622-4bd0-91cd-8eed8624b782",
      supply: "482",
      description: "The books that the world calls immoral are books that show the world its own shame.",
    }, {
      name: "Book.io - Black Financial Culture",
      policyId: "ad641c04deb45658085cefe7ad8d8894061e7cbf0949bd6fe1cbf2f6",
      hero: "https://storage.googleapis.com/jpeg-optim-files/f532bb5e-a409-4f0d-bbec-37d68c91dedb",
      supply: "500",
      description: "Unlock Financial Freedom by Discovering the Heart and Humanity of Personal Finance.",
    }, {
      name: "Cardania Citizens",
      policyId: "3530c5d7ce77ea067c20bbca7688e18731c8f0c7de456a940eefa27c",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458589/collections/hero_image/8f4ba914-1825-4bd7-9400-1545da85bd36?_a=ATCqVAA0.webp",
      supply: "5999",
      description: "Cardania Citizens have arrived! Experience the Ultraverse in style as a Biosynthetic, immortal, self-aware, autonomous Citizen!",
    }, {
      name: "Cardania Terraforms",
      policyId: "c859e9d7e71b8f90bdc1e453fd1b9adbc5e6163898fb574543cb5be8",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458882/collections/hero_image/f84a784e-e36b-41f5-8830-2036d1994e90?_a=ATCqVAA0.webp",
      supply: "20000",
      description: "Cardania Terraforms are pioneering digital land on Cardano. Harvest on-chain resources, put your Citizens to work, and join Cardania as they build out an epoch-based land strategy game!",
    }, {
      name: "Cardania Starships",
      policyId: "9a4579e93ba889999f91db52f8b2268541fea47b8b16d961e0f77e6d",
      hero: "https://ipfs5.jpgstoreapis.com/ipfs/QmcR427je1PMzAZunBiyfYvG8STV5ZW6dmKgvGHvKe7WTP",
      supply: "1840",
      description: "Next Generation Dynamic NFT collectible starships by Cardania.",
    }, {
      name: "Attention, Citizens - NFT Music Album",
      policyId: "54989366c95fcd4727732cb77f711bd9a891b8a00d11e889131fe6ee",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458659/collections/hero_image/3f81f44a-48a6-43f9-82b0-b880af2cbf30?_a=ATCqVAA0.webp",
      supply: "961",
      description: "Cardania presents a full 30 track original soundtrack album featuring 4 artists, and unique album art with rarities. 'A beautiful electronic space magic symphony', available exclusively on Cardano.",
    }, {
      name: "Cardania - First Edition Collector's Art",
      policyId: "a1dbe9979c84f028c7c24f0ae63a32e10ebac8e091cc5fdb94e22e67",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678459849/collections/hero_image/b95440aa-c048-44af-8593-1934fa9668d3?_a=ATCqVAA0.webp",
      supply: "343",
      description: "Collector's 1/1 Card Art for Cardania: Enter the Ultraverse, 1st Edition.",
    }, {
      name: "Cardania - Founders Cards",
      policyId: "ccb3577601d6cf0e021288871112926338bee685c6c37eeadf6dddd9",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458925/collections/hero_image/fb3b5298-88dd-4979-8f54-70e40ca6cc80?_a=ATCqVAA0.webp",
      supply: "21",
      description: "Cardania Founder's Cards function as an early supporter badge in the Cardania ecosystem. Current active utility includes harvesting bonuses through Cardania Terraforms!",
    }, {
      name: "Cardania: Enter the Ultraverse 1st Ed. Cards",
      policyId: "880d0843d1a2c582af8ec88b7c5d8c92266096c5d10ff5ecb9c28be3",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458606/collections/hero_image/d51b9eee-60b4-49c5-86fe-9526587dd5ca?_a=ATCqVAA0.webp",
      supply: "31900",
      description: "Cardania: Enter the Ultraverse is a trading card game in development on the Cardano network. This set encompasses ~49,000 individual NFT trading cards from 9 different artists across 7 unique factions. LEVEL UP AND INTERACT WITH YOUR CARDS at nexus.cardania.com",
    }, {
      name: "Cardania - Ghost Chain Commemorative Cards",
      policyId: "3cf7bd1c22f87aa81adaf886089fbefa01af9339099f999df0e0c708",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458581/collections/hero_image/2d27b121-2c88-44f2-bdc1-e67ece46f087?_a=ATCqVAA0.webp",
      supply: "36",
      description: "Cardania's commemorative card collection from the Alonzo hardfork combinator event, September 12th 2021.",
    }, {
      name: "Cardania - Interplanetary Postage Collection",
      policyId: "5e5fa5618b01679afecbda56f63df9dbd699ce0fa93434896d314513",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678457860/collections/hero_image/03977bc4-8415-4f07-a125-887125375cfa?_a=ATCqVAA0.webp",
      supply: "1000",
      description: "An early Cardania collaboration with DBStudio featuring an artful set of stamps featuring the art of the Summoning Pool and the Ultraverse!",
    }, {
      name: "Cardania - Holiday Collection",
      policyId: "d0b4c7811012fc5e9860c2fe374265f4e465ff99586ed7352fa9a866",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458825/collections/hero_image/52637414-1b3a-4819-90a1-88933dc9c2d6?_a=ATCqVAA0.webp",
      supply: "1140",
      description: "A variety of unique holiday mints from the Ultraverse!",
    }, {
      name: "Cardania Resources",
      policyId: "650296faadaccf9bb9852678ce0e881c5c09f1a6da9cb7531b3c23bb",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678459369/collections/hero_image/3e3ccf1a-72e6-482f-95da-eebfcb8f2477?_a=ATCqVAA0.webp",
      supply: "41",
      description: "A rare and incredibly useful arrangement of particleswhich defy the laws of traditional Newtonian physics.Most commonly utilized in modern spacecraft propulsion.",
    }, {
      name: "Cardania - Dark Technologies Unopened Packs",
      policyId: "71ed3b742838988825e2e574e441e11a19ab6e9e4f101e5f59a46a76",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678460105/collections/hero_image/437c2ce1-1638-4032-b8b5-e9714751c3c4?_a=ATCqVAA0.webp",
      supply: "1",
      description: "Dark Technologies Unopened Packs for Cardania: Enter the Ultraverse. These packs feature Technomage x Void Priest factions - Redemption Date TBD!",
    }, {
      name: "Cardania - Technocracy Unopened Packs",
      policyId: "4de8f6ef521125e09d898267368ebeebf2287a562620daea3d853163",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678456484/collections/hero_image/1d20f8eb-b5fa-428b-ba56-4292979b5942?_a=ATCqVAA0.webp",
      supply: "1",
      description: "Technocracy Unopened Packs for Cardania: Enter the Ultraverse. These packs feature Technomage x Imperator factions - Redemption Date TBD!",
    }, {
      name: "Cardania - Cleansing Fire Unopened Packs",
      policyId: "f9c7a0cb60e2bd7c2bcd7041460dc19f8767623a735994e1d2f54186",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678459952/collections/hero_image/a1f0f39c-a947-40e5-af1b-abd2e7721027?_a=ATCqVAA0.webp",
      supply: "1",
      description: "Cleansing Fire Unopened Packs for Cardania: Enter the Ultraverse. These packs feature Solar Barbarian x Imperator factions - Redemption Date TBD!",
    }, {
      name: "Transfungalism Unopened Packs",
      policyId: "f1dd8861a9b92fb42c54c3d11486a7ae60a48c3aaa87b717d586a667",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458819/collections/hero_image/8bde57d3-fc47-442c-b7e6-4084344829ea?_a=ATCqVAA0.webp",
      supply: "1",
      description: "Transfungalism Unopened Packs for Cardania: Enter the Ultraverse, 1st Edition. Transfungalism packs are redeemable for 6x NFT cards from the Custodian and Fungus factions! Redemption date TBD!",
    }, {
      name: "Cardania - Symbiosis Unopened Packs",
      policyId: "c872827bbd63ddef2fb635b2136d224c7e5871c749f818ff0dbf9eb7",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678458789/collections/hero_image/4732f085-4986-40d7-869a-63a4cb76a54a?_a=ATCqVAA0.webp",
      supply: "1",
      description: "Symbiosis Unopened Packs for Cardania: Enter the Ultraverse. These packs feature Solar Barbarian x Fungus factions - Redemption Date TBD!",
    }, {
      name: "Cardania - Astral Alliance Unopened Packs",
      policyId: "de0056ba8e5ea474363308d347bb75820c5d2126fcd958addca4ebfc",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678457329/collections/hero_image/QmNmRr2pPaB2hdBDPiXrWhNA3XEdDrxo2YZdcgDrU4KtMX?_a=ATCqVAA0.webp",
      supply: "1",
      description: "Astral Alliance Unopened Packs for Cardania: Enter the Ultraverse. These packs feature Spacer x Void Priest factions - Redemption Date TBD!",
    }, {
      name: "Cardania - Ballad of the Cosmic Cartel Unopened Packs",
      policyId: "37fc73405f59155f88e4f80f54124aaf035ba2d3fb82376ae420736b",
      hero: "https://storage.googleapis.com/jpeg-optim-files/b74f8a2c-721b-459e-93b5-8bfcb9fa5665",
      supply: "1",
      description: "The final 1st edition pack for Cardania: Enter the Ultraverse features the musical AI Custodians and the unscrupulous Spacers",
    }, {
      name: "Mysterious Orbs",
      policyId: "a8437dfff20edb4bff07b00277e9a197f111bcf12c44728c19519663",
      hero: "https://res.cloudinary.com/dkjdnfj7u/image/upload/c_limit,w_144/q_auto:best/v1678459860/collections/hero_image/076c23b0-88e3-48bb-9bb3-06002936ff6c?_a=ATCqVAA0.webp",
      supply: "1",
      description: "Enigmatic artifacts from Cardania - what could they be for?",
    },
    {
      name: "Bombers",
      policyId: "848838af0c3ab2e3027d420e320c90eb217f25b8b097efb4378e90f5",
      hero: "https://storage.googleapis.com/jpeg-optim-files/4bcf2e14-20c0-4e6f-a870-5c9afd87dd67",
      supply: "1",
      description: "Bombers powered by CRASHR, is a community built around the most primal values of internet culture. Attracting creators, innovators, artists, influencers entrepreneurs, and web3 mfers.",
    },
  ];

export default VERIFIED_COLLECTIONS;
