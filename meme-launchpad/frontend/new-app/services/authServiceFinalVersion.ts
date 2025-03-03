import { useState, useEffect, ReactNode } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Connection } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
// import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
// import { LedgerWalletAdapter } from '@solana/wallet-adapter-ledger';
import { WalletProvider } from '@solana/wallet-adapter-react';

const network = WalletAdapterNetwork.Devnet;
const endpoint = 'https://api.devnet.solana.com';
const connection = new Connection(endpoint, 'confirmed');

export const wallets = [
    new PhantomWalletAdapter(),
    // new CoinbaseWalletAdapter(),
    // new LedgerWalletAdapter(),
];

interface AuthServiceProps {
    children: ReactNode;
}

export const AuthService = ({ children }: AuthServiceProps) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkConnection = async () => {
            try {
                // Check connection or wallet status here
                setLoading(false);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
                setLoading(false);
            }
        };

        checkConnection();
    }, []);

    return (
        <WalletProvider wallets={wallets}>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <>{children}</>
            )}
        </WalletProvider>
    );
};
