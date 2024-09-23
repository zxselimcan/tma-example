// import { ConnectButton } from '@rainbow-me/rainbowkit';

import { useEffect } from "react";
import { useConnect } from "wagmi";

// import { ConnectKitButton } from "connectkit";

export function ConnectButton() {
    window.open = (function (open) {
        return function (url, _, features) {
            return open.call(window, url, "_blank", features);
        };
    })(window.open);
    return <w3m-button />
}

const App = () => {

    const { connectors, connect } = useConnect()


    useEffect(() => {

        window.open = (function (open) {
            return function (url, _, features) {
                return open.call(window, url, "_blank", features);
            };
        })(window.open);

    }, [window])
    return (
        <div>
            metamask connect
            <ConnectButton />;
            <hr />

            custom
            {
                connectors.map((connector) => (
                    <button key={connector.uid} onClick={() => connect({ connector })}>
                        {connector.name}
                    </button>
                ))
            }


            customcustom
            <a href="https://metamask.app.link/dapp/zxselimcan.github.io/tma-example/" target="_blank" rel="noreferrer">Metamask Custom</a>
        </div>
    )
}

export default App;