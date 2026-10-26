<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let i = 0;
let items = ref([
  {id:i++, text:'Piim', isDone: false, importance: 'low'},
  {id:i++, text:'Viin', isDone: true, importance: 'high'},
  {id:i++, text:'Sai', isDone: false, importance: 'medium'},
  {id:i++, text:'Mac', isDone: true, importance: 'low'},
]);
let newItem = ref('');
let newImportance = ref('low');

function  add(){
  if(newItem.value.trim() !== '') {
    items.value.push({
      id:i++, 
      text: newItem.value.trim(), 
      isDone: false,
      importance: newImportance.value
    });
  }
  newItem.value = '';
}

let doneItems = computed(() => 
  [...items.value]
    .filter(item => item.isDone)
    .sort((a, b) => {
      const importanceOrder = { 'high': 1, 'medium': 2, 'low': 3 };
      return importanceOrder[a.importance] - importanceOrder[b.importance];
    })
  );
  
let toDoItems = computed(() => 
  [...items.value]
    .filter(item => !item.isDone)
    .sort((a, b) => {
      const importanceOrder = { 'high': 1, 'medium': 2, 'low': 3 };
      return importanceOrder[a.importance] - importanceOrder[b.importance];
    })
);

let sortedItems = computed(() => 
  [...items.value].sort((a, b) => {
    const importanceOrder = { 'high': 1, 'medium': 2, 'low': 3 };
    return importanceOrder[a.importance] - importanceOrder[b.importance];
}));

</script>

<template>
  <div class="container content mt-3">
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Find a repository">
        </div>

        <div class="control">
            <button @click="add" class="button is-info">
                Add
            </button>
        </div>

        <div class="control">
          <div class="select">
            <select v-model="newImportance">
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>

    </div>
    <ItemList :items="sortedItems" title="All Items"></ItemList>
    <ItemList :items="doneItems" title="Done Items"></ItemList>
    <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
  </div>
</template>

<style></style>