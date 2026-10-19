import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import ToDo from './pages/Todo.vue';
import Modals from './pages/Modals.vue';

const routes = [
    { path: '/', component: ToDo, name: 'ToDo' },
    { path: '/modals', component: Modals, name: 'Modals' }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
