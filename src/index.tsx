import ReactDOM from 'react-dom/client';

import App from '@/pages/App';

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
// import './mockEnv.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';
import { injected, metaMask } from 'wagmi/connectors'
import { bsc, bscTestnet } from 'wagmi/chains'
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';


export const config = createConfig({
    chains: [bsc, bscTestnet],
    connectors: [injected(), metaMask()],
    transports: {
        [bsc.id]: http(),
        [bscTestnet.id]: http(),
    },
})

window.open = (function (open) {
    return function (url, _, features) {
        return open.call(window, url, "_blank", features);
    };
})(window.open);

const queryClient = new QueryClient();

const Root = () => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <App />
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}


ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
