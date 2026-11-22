<script setup>
import Message from '../components/Message.vue';
</script>

<template>
    <main class="container p-4">
        <h1 class="title">Messages</h1>
        <p class="subtitle">Reusable messages with validated color and size props.</p>

        <Message title="Information" color="info">
            Your changes have been saved.
        </Message>

        <Message title="Success" color="success">
            The operation completed successfully.
        </Message>

        <Message title="Warning" color="warning" size="small">
            Check the entered information before continuing.
        </Message>

        <Message title="Error" color="danger" size="large">
            Something went wrong. Please try again.
        </Message>

        <Message>
            A message can also be displayed without a header.
        </Message>
    </main>
</template>
