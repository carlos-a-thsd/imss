<template>
    <CardDashboard>
        <div class="icon">
            <img src="/image 6.png" alt="">
        </div>
        <h1 class="title">Nodos ECS</h1>
        <div class="line" />
        <div style="display: flex; justify-content: center; align-items: center; margin-top: -1rem;">
            <div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <div
                        style="background-color: #5DD39E; width: 1rem; height: 1rem; border-radius: 50%; margin-right: .5rem;" />
                    <p class="listado">dev-ecs-node</p>
                </div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <div
                        style="background-color: #c7d35d; width: 1rem; height: 1rem; border-radius: 50%; margin-right: .5rem;" />
                    <p class="listado">test-ecs-node</p>
                </div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <div
                        style="background-color: #5DD39E; width: 1rem; height: 1rem; border-radius: 50%; margin-right: .5rem;" />
                    <p class="listado">prod-ecs-node</p>
                </div>
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
    margin-bottom: 1rem;
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
    margin-top: .5rem;
}
</style>