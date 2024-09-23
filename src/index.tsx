import ReactDOM from 'react-dom/client';

import App from '@/pages/App';

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
// import './mockEnv.ts';


import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import the builder util

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Your Reown Cloud project ID
const projectId = 'd99dbd10562e3ca62a197a45d3494c0f'

// 2. Create wagmiConfig
const metadata = {
    name: 'deneme',
    description: 'AppKit Example',
    url: 'https://zxselimcan.github.io/tma-example/', // origin must match your domain & subdomain
    icons: ['https://assets.reown.com/reown-profile-pic.png']
}




const chains = [mainnet, arbitrum] as const
const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    //   ...wagmiOptions // Optional - Override createConfig parameters
    auth: {
        email: false,
        socials: [],
        showWallets: true,
    }
})

// 3. Create modal
createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true, // Optional - false as defaultü

})

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}

window.open = (function (open) {
    return function (url, _, features) {
        return open.call(window, url, "_blank", features);
    };
})(window.open);

const Root = () => {
    return (
        <Web3ModalProvider>
            <App />
        </Web3ModalProvider>

    );
}


ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
