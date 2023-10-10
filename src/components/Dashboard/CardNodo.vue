<template>
    <CardDashboard>
        <div class="icon">
            <img src="/image 1.png" alt="">
        </div>
        <h1 class="title">Nodos</h1>
        <div class="line" />
        <div style="display: flex; justify-content: space-between; width: 100%;">
            <div style="display: flex; align-items: center; gap: 1rem;">
                <h2 style="color: green; margin: 0;">151</h2>
                <p style="margin: 0;">/</p>
                <h2 style="color: gray; margin: 0;">161</h2>
            </div>
            <div style="display: flex; align-items: flex-end;">
                <h2 style="color: red; margin: 0;">10</h2>
            </div>
        </div>
    </CardDashboard>
</template>

<script setup>
import CardDashboard from '../UI/CardDashboard.vue';
</script>

<style scoped>
.title {
    color: #000;
    font-weight: 500;
    font-size: 1rem;
    text-align: end;
}

.line {
    width: 100%;
    height: 1.5px;
    background-color: #ccc;
    margin-bottom: 5rem;
}

.icon {
    background-color: #5DD39E;
    width: 3rem;
    display: flex;
    justify-content: center;
    padding: .5rem;
    border-radius: .5rem;
    position: absolute;
    top: 22rem;
}

.listado {
    color: #000;
    font-weight: 500;
    font-size: .8rem;
    text-align: start;
}
</style>