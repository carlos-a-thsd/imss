<template>
    <div class="card-dashboard">
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.card-dashboard {
    width: auto;
    height: auto;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    padding: .5rem;
    border: 3px solid #ccc;
}
</style>