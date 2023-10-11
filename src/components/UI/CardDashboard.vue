<template>
    <div class="card-dashboard">
        <div v-if="icon" class="icon">
            <img :src="icon" alt="">
        </div>
        <h1 class="title">
            {{ title }}
        </h1>
        <div class="line" />
        <slot />
    </div>
</template>

<script>
export default {
    props: ['title', 'icon']
}
</script>

<style scoped>
.card-dashboard {
    position: relative;
    width: auto;
    height: auto;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    padding: .5rem;
    border: 3px solid #ccc;
}

.title {
    color: #000;
    font-weight: 500;
    font-size: 1rem;
    text-align: end;
}

.line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin-bottom: 1rem;
}

.icon {
    position: absolute;
    top: -20px;
    left: -15px;
    background-color: #00B491;
    border-radius: 10%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
}

.icon img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
</style>
