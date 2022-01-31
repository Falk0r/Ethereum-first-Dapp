<template>
<!-- navbar -->
<nav class="h-min w-full bg-transparent flex justify-between">
    <div class="flex flex-wrap items-center px-4 py-3">
        <button v-if="!accounts.currentAccount" @click="connectWallet" class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
            Connect Metamask
        </button>
        <button v-if="accounts.currentAccount"  class="flex items-center bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
            <img src="/metamask-white.png" alt="metamask-logo" class="mr-2 h-4 w-4">
            {{ shortenAddress(accounts.currentAccount)}}
        </button>
    </div>
    <div class="flex flex-wrap items-center px-4 py-3">
        <select @change="selectChain" class="bg-cyan-500 text-white py-2 px-4 rounded-full mr-4 cursor-pointer" name="networks" id="networks">
            <option value="1">Ethereum</option>
            <option value="2">Avalanche</option>
            <option value="3">Binance Smart Chain</option>
            <option value="4">Polygon</option>
        </select>
    </div>
</nav>
</template>

<script>
import { inject } from 'vue'
import { shortenAddress } from '../utils/shortenAddress'
import { AVALANCHE_TESTNET_PARAMS, ETHEREUM_TESTNET_PARAMS, BINANCE_SMART_CHAIN_TESTNET_PARAMS, POLYGON_TESTNET_PARAMS } from '../utils/networks'

export default {
    setup() {
        const checkIfWalletIsConnected = inject('checkIfWalletIsConnected');
        const connectWallet = inject('connectWallet');
        const accounts = inject('accounts');
        const transactions = inject('transactions');
        const addChain = inject('addChain');
        const switchChain = inject('switchChain');
        const checkChainConnected = inject('checkChainConnected');
        return {
            checkIfWalletIsConnected,
            connectWallet,
            accounts,
            transactions,
            addChain,
            switchChain,
            checkChainConnected,
        }
    },
    mounted() {
        this.checkIfWalletIsConnected();
        this.checkChainConnected();
    },
    methods: {
        shortenAddress(address) {
            return shortenAddress(address);
        },
        checkConst(){
            console.log(AVALANCHE_TESTNET_PARAMS);
        },
        addAvalancheNetwork() {
            this.addChain(AVALANCHE_TESTNET_PARAMS);
        },
        selectChain(e) {
            console.log(e.target.value);
            let chain;
            switch (e.target.value) {
                case '1':
                    chain = ETHEREUM_TESTNET_PARAMS;
                    break;
            
                case '2':
                    chain = AVALANCHE_TESTNET_PARAMS;
                    break;

                case '3':
                    chain = BINANCE_SMART_CHAIN_TESTNET_PARAMS;
                    break;

                case '4':
                    chain = POLYGON_TESTNET_PARAMS;
                    break;
                default:
                    break;
            }
            return this.switchChain(chain);
        }
    }
}
</script>