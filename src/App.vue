<script setup>
import { ref } from 'vue'
import Tabs from './components/Tabs.vue';

let tabTitles = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]);
let activeTab = ref(0);
let contents = [
  'Content 1',
  'Content 2',
  'Content 3',
  'Content 4',
];

</script>

<template>
  <Tabs :titles="tabTitles" :active="activeTab" @change="activeTab = $event"></Tabs>  
  <div class="container content mt-3">
    <h1>Tab {{ contents[activeTab] }}</h1>
  </div>
</template>

<style></style>