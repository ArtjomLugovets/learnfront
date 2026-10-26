<script setup>
defineProps(['items', 'title']);
</script>

<template>
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        
        <span class="tag" :class="{
          'is-success': item.importance === 'low',
          'is-warning': item.importance === 'medium',
          'is-danger': item.importance === 'high'
        }">
          {{ item.importance }}
        </span>

        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
</template>