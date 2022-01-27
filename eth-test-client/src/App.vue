<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import MainForm from './components/MainForm.vue'
import Navbar from './components/Navbar.vue'
import TransactionContext from './contexts/TransactionContext.vue'
</script>

<template>
    <transaction-context>
        <navbar />
        <main-form />
    </transaction-context>
</template>

<style>
</style>
