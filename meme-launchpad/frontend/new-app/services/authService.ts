import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Connection } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletProvider } from '@solana/wallet-adapter-react';

const network = WalletAdapterNetwork.Devnet;
const endpoint = 'https://api.devnet.solana.com';
const connection = new Connection(endpoint, 'confirmed');

export const wallets = [
    new PhantomWalletAdapter(),
];

export const AuthService = () => {
    return (
        <WalletProvider wallets={wallets}>
            {/* Add your components that require wallet connection here */}
        </WalletProvider>
    );
};
