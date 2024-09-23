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


// @ts-ignore
window.open = (function (open) {
    return function (url, _, features) {
        // Check if Telegram WebApp API is available
        // @ts-ignore
        if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
            // Use Telegram's openLink if inside the webview
            try {
                // @ts-ignore
                Telegram.WebApp.openLink(url);
            } catch (error) {
                try {
                    // @ts-ignore
                    window.Telegram.WebApp.openLink(url);

                } catch (error) {

                }
            }
        } else {
            // Fallback to default window.open behavior
            return open.call(window, url, "_blank", features);
        }
    };
})(window?.open);


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
