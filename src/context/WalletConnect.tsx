import { createContext, PropsWithChildren, useState, useEffect, useContext } from 'react';
import { Blockfrost, Lucid, WalletApi } from 'lucid-cardano';
import { useLocalStorage } from 'react-use';

interface WalletConnectContextValues {
  api: WalletApi | null;
  lucid: Lucid | null;
  activeWallet: string;
  accumulating: boolean;
  myWalletAddress: string;
  enableWallet: (name: string) => Promise<void> | void;
  disableWalletAddress: () => Promise<void> | void;
  setMyWalletAddress: (newValue: string) => void;
}

export const WalletConnectContext = createContext<WalletConnectContextValues>({
  api: null,
  lucid: null,
  activeWallet: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  enableWallet: () => { },
  myWalletAddress: '',
  accumulating: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disableWalletAddress: () => { },
  setMyWalletAddress: () => { },
});

export const WalletConnectProvider = ({ children }: PropsWithChildren) => {
  const [api, setApi] = useState<WalletApi | null>(null);
  const [lucid, setLucid] = useState<Lucid | null>(null);
  const [accumulating, setAccumulating] = useState(false);
  const [myWalletAddress, setMyWalletAddress] = useState<string>();

  const [activeWalletName, setActiveWalletName] = useLocalStorage('active-wallet-name', '');

  const disableWalletAddress = () => {
    setMyWalletAddress('');
    setActiveWalletName('');
  };

  const enableWallet = async (name: string) => {
    const api = await window.cardano[name].enable();
    const newLucid = await Lucid.new(
      new Blockfrost(
        "https://cardano-mainnet.blockfrost.io/api/v0",
        process.env.REACT_APP_BLOCKFROST_API_KEY
      ),
      "Mainnet"
    );
    newLucid.selectWallet(api);
    setApi(api);
    setActiveWalletName(name);
    setLucid(newLucid);
    const my_wallet_address = await newLucid.wallet.address();
    // const my_wallet_address = "addr1q9m863n9rukl0e7ley0t2mqeqpu069datc6qs4gdukhaxxnr8lv7uxlmykp28rhdc0vsyynqnpt3jhk7uj407u6q5pxq34fuh7"



    setMyWalletAddress(my_wallet_address);

  };
  useEffect(() => {
    const initializeWallet = async () => {
      if (activeWalletName) {
        const isEnabled = await window.cardano[activeWalletName].isEnabled();

        if (isEnabled) {
          enableWallet(activeWalletName);
        }
      }
    };

    initializeWallet();
  }, [activeWalletName]);


  return (
    <WalletConnectContext.Provider
      value={{
        api,
        lucid,
        activeWallet: activeWalletName ?? '',
        enableWallet,
        accumulating,
        myWalletAddress,
        disableWalletAddress,
        setMyWalletAddress
      }}
    >
      {children}
    </WalletConnectContext.Provider>
  );
};

export const useWalletConnect = () => useContext(WalletConnectContext);