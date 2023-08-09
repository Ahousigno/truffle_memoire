import Portis from "@portis/web3";
import Web3 from "web3";

export const portis = new Portis(
  // "0x300642326Aa1833453115a8AB51F72C1Ed8C4823",
  "0xA05139a6546132e6A8742cA4174614AA9d4589d7",
  "development",
  { gasRelay: false }
);
export const web3 = new Web3(portis.provider);

export const web3networks: {
  [key: number]: { name: string; explorer: string };
} = {
  1: { name: "Ethereum", explorer: "https://etherscan.io" },
  3: { name: "Ethereum (ropsten)", explorer: "https://ropsten.etherscan.io" },
  4: {
    name: "Ethereum (development)",
    explorer: "HTTP://127.0.0.1:7545"
  },
  5: {
    name: "Ethereum (goerli)",
    explorer: "https://blockscout.com/eth/goerli"
  },
  42: {
    name: "Ethereum (kovan)",
    explorer: "https://blockscout.com/eth/kovan"
  },
  61: {
    name: "Ethereum Classic",
    explorer: "https://blockscout.com/etc/mainnet"
  },
  77: { name: "POA (sokol)", explorer: "https://blockscout.com/poa/sokol" },
  99: { name: "POA", explorer: "https://blockscout.com/poa/core" },
  100: { name: "XDAI", explorer: "https://blockscout.com/poa/dai" }
};
