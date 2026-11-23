<script setup>
import { ref } from 'vue';

let joke = ref(''); 

let req = fetch("https://api.chucknorris.io/jokes/random").then(res => {
    return res.json()
}).then(json => {
    console.log(json);
    joke.value = json;
});
console.log(req);
</script>

<template>
<h1>{{ joke.value }}</h1>
</template>