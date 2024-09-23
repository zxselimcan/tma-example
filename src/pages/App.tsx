// import { ConnectButton } from '@rainbow-me/rainbowkit';

// import { ConnectKitButton } from "connectkit";

export function ConnectButton() {
    return <w3m-button />
}

const App = () => {
    return (
        <div>
            metamask connect
            <ConnectButton />;
            <hr />

        </div>
    )
}

export default App;