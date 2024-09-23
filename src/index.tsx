import ReactDOM from 'react-dom/client';

import App from '@/pages/App';

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
// import './mockEnv.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';
import { injected, metaMask, walletConnect, } from 'wagmi/connectors'
import { bsc, bscTestnet } from 'wagmi/chains'
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


export const config = createConfig(
    getDefaultConfig({
        appName: 'Wagmi',
        walletConnectProjectId: 'f04b5d42a0b5cfd870c4de621991d743',
        chains: [bsc, bscTestnet],
        connectors: [injected(), metaMask(), walletConnect({
            projectId: 'f04b5d42a0b5cfd870c4de621991d743',
        })],
        transports: {
            [bsc.id]: http(),
            [bscTestnet.id]: http(),
        },
        multiInjectedProviderDiscovery: true,
        ssr: false,
    }))

// window.open = (function (open) {
//     return function (url, _, features) {
//         return open.call(window, url, "_blank", features);
//     };
// })(window.open);


window.open = (function (open) {
    return function (url, _, features) {
        // Only call window.open during user interaction
        // Use navigator.userAgent to detect mobile environments
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const metamaskDeepLink = "https://metamask.app.link/dapp/" + window.location.hostname;

        if (isMobile) {
            alert("isMobile");
            // If it's a mobile device, open the MetaMask mobile app via deep link
            url = metamaskDeepLink;
            // Open MetaMask mobile app deep link
            return open.call(window, url, "_blank", features);
        } else {
            // For desktop or regular web browser, just open the normal URL
            return open.call(window, url, "_blank", features);
        }
    };
})(window.open);


const queryClient = new QueryClient();

const Root = () => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {/* <RainbowKitProvider> */}
                <ConnectKitProvider
                    debugMode={true}
                >
                    <App />
                </ConnectKitProvider>
                {/* </RainbowKitProvider> */}
            </QueryClientProvider>
        </WagmiProvider>
    );
}


ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
