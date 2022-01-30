<template>
<!-- navbar -->
<nav class="h-min w-full bg-transparent">
    <div class="flex flex-wrap items-center justify-between px-4 py-3">
        <button v-if="!accounts.currentAccount" @click="connectWallet" class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full mb-4">
            Connect Metamask
        </button>
        <p v-if="accounts.currentAccount" class="text-black">{{ shortenAddress(accounts.currentAccount)}}</p>
        <button @click="getAccount" class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full mb-4">
            Check Account
        </button>
    </div>
</nav>
    
</template>

<script>
import { inject } from 'vue'
import { shortenAddress } from '../utils/shortenAddress'

export default {
    setup() {
        const checkIfWalletIsConnected = inject('checkIfWalletIsConnected');
        const connectWallet = inject('connectWallet');
        const checkAccount = inject('checkAccount');
        const accounts = inject('accounts');
        return {
            checkIfWalletIsConnected,
            connectWallet,
            checkAccount,
            accounts
        }
    },
    mounted() {
        this.checkIfWalletIsConnected();
    },
    methods: {
        getAccount() {
            console.log(this.accounts.currentAccount);
        },
        shortenAddress(address) {
            return shortenAddress(address);
        },
    }
}
</script>