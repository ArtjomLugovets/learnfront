<script setup>
import { ref } from 'vue';

let joke = ref(''); 

function reqListener() {
  joke.value = JSON.parse(this.responseText);
  console.log(joke.value.value);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://api.chucknorris.io/jokes/random");
req.send();
</script>

<template>
<h1>{{ joke.value }}</h1>
</template>