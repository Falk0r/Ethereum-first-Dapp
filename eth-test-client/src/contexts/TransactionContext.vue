<template>
    <slot></slot>
</template>

<script>
import { provide, ref, reactive } from 'vue'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

const checkIfWalletIsConnected = async ()=> {
    try {
        if(!ethereum) return alert('Please install Metamask');
    
        const accounts = await ethereum.request({ method: 'eth_accounts' });

        console.log(accounts);
    
        if (accounts.length) {
            // ref.account = accounts[0];
            eth.account = accounts[0];
            // getAllTransactions();
        } else {
            alert('No accounts found');
        }
        console.log('CurrentAccount', eth.account);
        
    } catch (error) {
        // throw new Error("No etherneum found");
        console.log(error);
    }

}

const checkAccount = () => {
    console.log('CurrentAccount', eth.account);
}

const connectWallet = async () => {
    try {
        console.log('connectWallet');
        if(!ethereum) return alert('Please install Metamask');

        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);

        // setCurrentAccount(accounts[0]);
        // ref.account = accounts[0];
        eth.account = accounts[0];

    } catch (error) {
        
    }
}

const eth = reactive({
    account: null
});



export default {
    setup(){
        // const accounts = ref(null);
        const accounts = eth;
        provide('accounts', accounts);
        provide('testProvide', 'testProvideValue')
        provide('checkIfWalletIsConnected', checkIfWalletIsConnected)
        provide('connectWallet', connectWallet)
        provide('checkAccount', checkAccount)
    },
    data(){
        return {
            accounts : []
        }
    },
    methods: {
        setCurrentAccount(accounts) {
            console.log('accounts',this.accounts);
            this.accounts = accounts;
        }
    }
}
</script>

<style>

</style>