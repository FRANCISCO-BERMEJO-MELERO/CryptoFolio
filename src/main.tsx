import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// Wagmi and RainbowKit imports
import config from './config/wagmi';
import { WagmiProvider } from 'wagmi';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
              <StrictMode>
                <App />
              </StrictMode>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>,
)
