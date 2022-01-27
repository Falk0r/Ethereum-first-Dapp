<template>
    <div class="h-full w-full flex justify-center items-center">
        <form action="" class="w-1/2">
            <div class="flex flex-col">
                <div class="flex flex-col">
                    <label for="addressTo" class="text-white">Address To</label>
                    <input type="text" id="addressTo" class="border border-gray-500 p-2 w-full text-black" v-model="formData.addressTo" />
                </div>
                <div class="flex flex-col">
                    <label for="amount" class="text-white">Amount (ETH)</label>
                    <input type="number" id="amount" class="border border-gray-500 p-2 w-full text-black" v-model="formData.amount" />
                </div>
                <div class="flex flex-col">
                    <label for="keyword" class="text-white">Keyword</label>
                    <input type="text" id="keyword" class="border border-gray-500 p-2 w-full text-black" v-model="formData.keyword" />
                </div>
                <div class="flex flex-col">
                    <label for="message" class="text-white">Enter Message</label>
                    <input type="text" id="message" class="border border-gray-500 p-2 w-full text-black" v-model="formData.message" />
                </div>
                <div class="flex flex-col">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded" @click.prevent="sendTokens">Send Now</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core';

export default {
    setup() {
        const formData = inject('formData');
        const sendTokens = inject('sendTokens');
        return {
            formData,
            sendTokens,
        };
    },
}
</script>