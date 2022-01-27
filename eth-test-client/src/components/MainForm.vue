<template>
    <form action="" class="w-1/2">
        <div class="flex flex-col">
            <div class="flex flex-col">
                <label for="name" class="text-gray-700">Name</label>
                <input type="text" id="name" class="border border-gray-500 p-2 w-full" v-model="name" />
            </div>
            <div class="flex flex-col">
                <label for="email" class="text-gray-700">Email</label>
                <input type="email" id="email" class="border border-gray-500 p-2 w-full" v-model="email" />
            </div>
            <div class="flex flex-col">
                <label for="message" class="text-gray-700">Message</label>
                <textarea id="message" class="border border-gray-500 p-2 w-full" v-model="message"></textarea>
            </div>
            <div class="flex flex-col">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="submit">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {

}
</script>