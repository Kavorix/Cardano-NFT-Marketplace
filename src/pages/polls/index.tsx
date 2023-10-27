import HeaderBanner from 'components/HeaderBanner'
import PollCard from 'components/card/PollCard'
import CustomButton from 'components/common/CustomButton'
import CustomSearchInput from 'components/common/CustomSearchInput'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import CreatePollsModal from 'components/modal/CreatePollsModal'
import PollDetailModal from 'components/modal/PollDetailModal'
import RaffleSuccessModal from 'components/modal/RaffleSuccesModal'
import VoteSuccessModal from 'components/modal/VoteSuccessModal'
import { H1 } from 'components/typography'
import { POLICYID_ASSET_LIST } from 'constants/document'
import { POLLS_HEADER_IMAGE } from 'constants/image.constants'
import { governanceDetailsScript } from 'constants/script.constants'
import { useGlobalContext } from 'context/GlobalContext'
import { useWalletConnect } from 'context/WalletConnect'
import { infoAlert } from 'hooks/alert'
import { generateRandomString } from 'hooks/function'
import { Data, fromHex } from 'lucid-cardano'
import { useEffect, useState } from 'react'
import { Container, PageWrapper } from 'styles/GlobalStyles'
let restrictedVoting = [
  "7cf50a7cd92bb4178c548cd215f0e65985ebb2a62b20c62e76e9f00cfe2bdb19",
  "eb137a8cc9d47c61fdc8ad90327958eeba27cef2c06988478196b2752df4ca06",
  "9b077e7d1988d67426bfb2b45df3a4e308df2f51f1b3b889c5b0eb39d899e658"
]

type FormValueType = {
  currency: string;
  goverVoteName: string;
  projectName: string;
  GoverDesc: string;
  // avaChoice: number;
  endDate: string;
  firstVote: string;
  // firstImage: string;
  secondVote: string;
  // secondImage: string;
  role: string;
  // imgUrl: string;
};


const today = new Date();
const today_12_hours_later = new Date(today);
const today_48_hours_later = new Date(today);
const today_24_hours_later = new Date(today);
const endTime = new Date(today);
today_12_hours_later.setHours(today.getHours() + 12);
today_48_hours_later.setHours(today.getHours() + 48);
today_24_hours_later.setHours(today.getHours() + 24);
endTime.setMonth(today.getMonth() + 1);

const Polls = () => {
  const [search, setSearch] = useState("")
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false)
  const [activeShowVotingData, setActiveShowVotingData] = useState([])
  const [pollDetailData, setPollDetailData] = useState({})

  const [formData, setFormData] = useState<VoteFormDataType>({
    topic: '',
    description: '',
    project: '',
    endDate: today_24_hours_later,
    choseDate: 1,
    role: '',
    currency: '',
    attachedImage: '',
    vote1: '',
    attachedImage1: '',
    vote2: '',
    vote3: 'ok',
    vote4: 'ok',
    attachedImage2: '',
    agree1: false,
    agree2: false
  });
  const [voteInputs, setVoteInputs] = useState(["", ""]);

  const { myWalletAddress, lucid } = useWalletConnect()
  const { myBalance, votingData } = useGlobalContext()

  useEffect(() => {
    if (votingData && Object.values(votingData).length > 0) {
      console.log("voting data", votingData)
      // @ts-ignore
      let filter_arr1 = Object.values(votingData).filter((item) => (item.status) === 'active')


      // @ts-ignore

      let filtered_arr2 = filter_arr1.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
      setActiveShowVotingData(filtered_arr2)
    }
  }, [votingData, search])


  const submit = async (values: FormValueType) => {
    // console.log('values', formData);
    // console.log(JSON.stringify(values, null, 2));
    if (myBalance.ada + formData.choseDate * 15 < 2) {
      infoAlert("You don't have enough ADA")
    } else {
      let errors = {};
      let current = new Date().getTime();

      if (Object.keys(errors).length > 0) {
        console.log('error');
        // setErrorText(errors);
      } else {
        //let posix = Math.floor(new Date(start.value).getTime());
        let policyId = '';
        let asset = '';
        // console.log("myWalletAddress", myWalletAddress)
        if (myWalletAddress === '') {
          infoAlert("Your wallet is not connected")
        } else {
          // @ts-ignore
          const { paymentCredential } = lucid.utils.getAddressDetails(myWalletAddress);
          // @ts-ignore
          const governanceAddress = lucid.utils.validatorToAddress(governanceDetailsScript);
          console.log("governanceAddress", governanceAddress)
          // @ts-ignore
          policyId = POLICYID_ASSET_LIST[formData.currency].policyId;
          // @ts-ignore
          asset = POLICYID_ASSET_LIST[formData.currency].asset;

          let posix = Math.floor(new Date(formData.endDate).getTime());
          // console.log('posix', posix);


          let vote1 = voteInputs[0] ? voteInputs[0] : "";
          let vote2 = voteInputs[1] ? voteInputs[1] : "";
          let vote3 = voteInputs[2] ? voteInputs[2] : "";
          let vote4 = voteInputs[3] ? voteInputs[3] : "";


          console.log("input value", voteInputs.length, policyId, asset, formData)

          // @ts-ignore
          let datumGovernance = Data.to([
            // @ts-ignore
            paymentCredential.hash, //winner
            policyId, //ADA byte array vuoto
            asset, //amount
            fromHex(formData.topic), //interesse
            // @ts-ignore
            parseInt(voteInputs.length),
            fromHex(vote1),
            fromHex(vote2),
            fromHex(vote3),
            fromHex(vote4),
            // @ts-ignore
            0,
            fromHex(formData.attachedImage),
            fromHex(formData.description), //hours in ms
            // @ts-ignore
            posix,
            // @ts-ignore
            0,
            fromHex(formData.project),
            fromHex(''),
            fromHex(''),
            fromHex(''),
            fromHex(''),
            fromHex(formData.role),
            fromHex(formData.currency)
          ]);

          console.log('datumGovernance', datumGovernance);
          console.log('governanceAddress', governanceAddress);
          const projectAddress =
            'addr1q8dtcsrnkgvqdpq8lzesdhna0n5t8n3ajhdrpuc52lghtrlujxkk79xplzdvk3eqqy3cwwrynsahnp9waq2faa4faswsglvx73';
          console.log("projectAddress", projectAddress)
          // const days = formData.choseDate;

          // @ts-ignore
          try {
            const tx = await lucid
              .newTx()
              // @ts-ignore
              .payToContract(governanceAddress, { inline: datumGovernance }, { lovelace: 2000000 }) //2000000
              // @ts-ignore
              // .payToAddress(projectAddress, { lovelace: 0 }) //15000000
              .complete();

            console.log('tx', tx);

            const signedTx = await tx.sign().complete();
            console.log("singedTx", signedTx)


            let uuid = generateRandomString();
            // let current_waiting = { ...txWaitingList }; // Use spread operator or Object.assign() to create a new object
            // current_waiting[uuid] = {
            //   success: false,
            //   actionTime: Date.now(),
            //   actionTitle: "Create New Vote",
            //   txAddr: "",
            // };
            // setTxWaitingList(current_waiting)
            // setShowWaitingList(true)

            const txHash = await signedTx.submit();
            console.log("txHash", txHash)

            // setShowWaitingList(true);
            if (txHash !== "") {
              // current_waiting[uuid].success = true;
              // current_waiting[uuid].txAddr = txHash;
              // setTxWaitingList({ ...current_waiting });
              // // setShowWaitingList(true);
              // localStorage.setItem("crashr_tarnsaction_list", JSON.stringify(current_waiting))

              // toast(txHash);
              setShowCreateModal(false)
              setShowSuccessModal(true);
              console.log('txHash', txHash);
            }
          } catch (err) {
            console.log("err", err)
          }
        }
      }
    }
  };

  return (
    <PageWrapper>
      <HeaderBanner
        image={POLLS_HEADER_IMAGE}
      />
      <Container paddingTop='12px' smMarginTop='-30px'>
        <H1>
          Polls
        </H1>
        <CustomText
          text={`<span>With Crashr’s On-Chain Voting System, you can create polls and vote on polls across various NFT projects, <b>all on one platform</b>.</span>`}
          fontSize='21px'
          fontWeight='400'
          marginTop='25px'
          marginBottom='40px'
          maxWidth='832px'
          fontFamily='Open Sans'
          smMarginBottom='15px'
          smMarginTop='15px'
        />
        <FlexBox justifyContent='start' marginBottom='80px' gap='13px' smMarginBottom='28px'>

          <CustomButton
            text="Create Your Own"
            fontFamily='Open Sans'
            fontSize='21px'
            fontWeight='600'
            width='205px'
            height='64px'
            onClick={() => setShowCreateModal(true)}
            smWidth='170ox'
            smHeight='42px'
          />
        </FlexBox>

        <CustomSearchInput
          input={search}
          setInput={setSearch}
          placeholder='Search'
        />
        <FlexBox marginTop='28px' flexWrap='wrap' gap='16px 80px' justifyContent='start'>

          {activeShowVotingData &&
            activeShowVotingData.length > 0 &&
            activeShowVotingData.map((item, index) => {
              // @ts-ignore
              if (!restrictedVoting.includes(item.utxo)) {
                return (
                  <PollCard
                    key={index}
                    item={item}
                    utxo={item.utxo}
                    votingData={votingData}
                    onClick={() => {
                      console.log("hey")
                      setPollDetailData(item);
                      setShowDetailModal(true)
                    }}
                  />
                );
              }
            })}

        </FlexBox>
      </Container>
      {
        showCreateModal &&
        <CreatePollsModal
          show={showCreateModal}
          onClose={() => { setShowCreateModal(false) }}
          formData={formData}
          setFormData={setFormData}
          submit={submit}
          setVoteInputs={setVoteInputs}
          voteInputs={voteInputs}
        />
      }
      {
        showSuccessModal &&
        <VoteSuccessModal
          message='We have received your submission.'
          show={showSuccessModal}
          onClose={() => { setShowSuccessModal(false) }}
        />
      }
      {
        showDetailModal &&
        <PollDetailModal
          show={showDetailModal}
          onClose={() => setShowDetailModal(false)}
          pollDetailData={pollDetailData}
        />
      }
    </PageWrapper>
  )
}

export default Polls