<template>
    <div style="margin-left: 2rem;">
        <h1 class="title-padre">Dashboard</h1>
        <div class="container-card">
            <CardFirewall />
            <CardSwitches />
            <CardSwitchCore />
            <CardNodo />
            <CardBalanceador />
        </div>
    </div>
</template>

<script setup>
import CardFirewall from '../components/Dashboard/CardFirewall.vue';
import CardSwitches from '../components/Dashboard/CardSwitches.vue';
import CardSwitchCore from '../components/Dashboard/CardSwitchCore.vue';
import CardNodo from '../components/Dashboard/CardNodo.vue';
import CardBalanceador from '../components/Dashboard/CardBalanceador.vue';
</script>

<style scoped>
.container-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    margin-bottom: 2rem;
}

@media screen and (max-width: 768px) {
    .container-card {
        grid-template-columns: repeat(1, 1fr);
    }
}


.title-padre {
    color: #000;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: start;
    margin-bottom: 4rem;
}
</style>