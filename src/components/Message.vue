<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'info',
        validator(value) {
            return [
                'primary',
                'link',
                'info',
                'success',
                'warning',
                'danger',
            ].includes(value);
        },
    },
    size: {
        type: String,
        validator(value) {
            return ['small', 'normal', 'medium', 'large'].includes(value);
        },
    },
    title: String,
});

const messageClass = computed(() => {
    const classes = [`is-${props.color}`];

    if (props.size && props.size !== 'normal') {
        classes.push(`is-${props.size}`);
    }

    return classes;
});
</script>

<template>
    <article class="message" :class="messageClass" role="status">
        <div v-if="title" class="message-header">
            <p>{{ title }}</p>
        </div>
        <div class="message-body">
            <slot />
        </div>
    </article>
</template>
