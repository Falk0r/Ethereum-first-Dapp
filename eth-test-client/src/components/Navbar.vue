<template>
<!-- navbar -->
<nav class="bg-white shadow-md">
    <div class="container flex flex-wrap items-center justify-between px-4 py-6">
        <button @click="connectWallet" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Connect Metamask
        </button>
        <p v-if="accounts.account">{{accounts.account}}</p>
        <button @click="getAccount" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Check Account
        </button>
    </div>
</nav>
    
</template>

<script>
import { inject, ref } from 'vue'
export default {
    setup() {
        const metamask = inject('testProvide');
        const checkIfWalletIsConnected = inject('checkIfWalletIsConnected');
        const connectWallet = inject('connectWallet');
        const checkAccount = inject('checkAccount');
        const accounts = inject('accounts');
        return {
            metamask,
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
        getMetamask() {
            console.log(this.metamask);
            this.logg();
        },
        getAccount() {
            console.log(this.accounts.account);
        },
    }
}
</script>