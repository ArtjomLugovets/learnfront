<script setup>
import RouterTabs from './components/RouterTabs.vue';

</script>

<template>
  <RouterTabs></RouterTabs>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style></style>