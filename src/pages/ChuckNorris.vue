<script setup>
import { ref } from 'vue';

let joke = ref(''); 

let res = fetch("https://api.chucknorris.io/jokes/random");
joke.value = await res.json();
</script>

<template>
<h1>{{ joke.value }}</h1>
</template>