<template>
    <CardDashboard>
        <div class="icon">
            <img src="/Balance.png" alt="">
        </div>
        <h1 class="title">Balnceador</h1>
        <div class="line" />
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 1rem;">
            <div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 8.png" alt="" style="width: 2rem; height: 2rem;">
                    <p class="listado">Carga de servicios de red</p>
                </div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 8.png" alt="" style="width: 2rem; height: 2rem;">
                    <p class="listado">Carga de pacientes</p>
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
    margin-bottom: 2rem;
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