<template>
    <CardDashboard>
        <div class="icon">
            <img src="/Connect.png" alt="">
        </div>
        <h1 class="title">Firewalls</h1>
        <div class="line" />
        <div style="display: flex; justify-content: space-evenly;">
            <div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 1.png" alt="" style="width: 2rem; height: 2rem; ">
                    <p class="listado">FotiGate</p>
                </div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 1.png" alt="" style="width: 2rem; height: 2rem;">
                    <p class="listado">Cisco ASA</p>
                </div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 1.png" alt="" style="width: 2rem; height: 2rem;">
                    <p class="listado">Zyxel</p>
                </div>
            </div>
            <div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 1.png" alt="" style="width: 2rem; height: 2rem;">
                    <p class="listado">Barracuda</p>
                </div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 1.png" alt="" style="width: 2rem; height: 2rem;">
                    <p class="listado">Stormshield</p>
                </div>
                <div style="display: flex; justify-content: start; align-items: center;">
                    <img src="/Component 1.png" alt="" style="width: 2rem; height: 2rem;">
                    <p class="listado">FotiGate</p>
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
    top: 6rem;
}

.listado {
    color: #000;
    font-weight: 500;
    font-size: .8rem;
    text-align: start;
}
</style>