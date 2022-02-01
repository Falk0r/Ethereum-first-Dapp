export const chains = [
    {
    chainId: '0xA869',
    chainName: 'Avalanche Testnet C-Chain',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
        },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/']
    },
    {   
    chainId: '0x3',
    chainName: 'Ethereum Testnet',
    },
    {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
        name: 'Binance Smart Chain Testnet',
        symbol: 'BNB',
        decimals: 18
        },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://testnet.bscscan.com']
    },
    {
    chainId: '0x13881',
    chainName: 'Matic Mumbai',
    nativeCurrency: {
        name: 'Matic Mumbai Testnet',
        symbol: 'MATIC',
        decimals: 18
        },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
    },
];
