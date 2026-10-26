<script setup>
import { computed } from 'vue';
import ItemList from '../components/ItemList.vue';
import { items } from '../items.js';

let importantItems = computed(() => 
  [...items.value]
    .filter(item => item.importance === 'high')
    .sort((a, b) => {
      const importanceOrder = { 'high': 1, 'medium': 2, 'low': 3 };
      return importanceOrder[a.importance] - importanceOrder[b.importance];
    })
);

</script>

<template>
    <div class="container content mt-3">
        <ItemList :items="importantItems" title="Important Items"></ItemList>
    </div>
</template>