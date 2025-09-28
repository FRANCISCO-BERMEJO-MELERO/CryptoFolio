import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  getDefaultConfig,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {ledgerWallet, metaMaskWallet, rabbyWallet} from "@rainbow-me/rainbowkit/wallets";


const { wallets } = getDefaultWallets()

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'f30ad10465133843433cc9753f4ef6e1',
  chains: [
    mainnet,    
    polygon, 
    optimism, 
    arbitrum, 
    base],
  wallets: [
    ...wallets,
    {
      groupName: 'My favorite',
      wallets: [
        ledgerWallet,
        metaMaskWallet,
        rabbyWallet,
      ],
    },
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;