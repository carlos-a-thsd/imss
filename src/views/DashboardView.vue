<template>
    <div>
        <h1 class="title-padre">Dashboard</h1>
        <div class="container-card">
            <CardDashboard title="Firewall" icon="/Connect.png">
                <CardFirewall :widgetData="dummyData" />
            </CardDashboard>
            <CardDashboard title="Switches" icon="/Switch.png">
                <CardSwitches :widgetData="dummyData" />
            </CardDashboard>
            <CardDashboard title="Switch Core" icon="/Core.png">
                <CardSwitchCore :widgetData="dummyData" />
            </CardDashboard>
            <CardDashboard title="Nodo" icon="/image 6.png">
                <CardNodo :widgetData="dummyData" />
            </CardDashboard>
            <CardDashboard title="Balanceador" icon="/Balance.png">
                <CardBalanceador :widgetData="dummyData" />
            </CardDashboard>
            <CardDashboard title="Nodo ECS" icon="/image 1.png">
                <CardNodoECS :widgetData="dummyData" />
            </CardDashboard>
            <CardEndpoint :widgetData="dummyData" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getData } from "../data/dummyData"
import CardDashboard from "../components/UI/CardDashboard.vue";
import CardFirewall from '../components/Dashboard/CardFirewall.vue';
import CardSwitches from '../components/Dashboard/CardSwitches.vue';
import CardSwitchCore from '../components/Dashboard/CardSwitchCore.vue';
import CardNodo from '../components/Dashboard/CardNodo.vue';
import CardBalanceador from '../components/Dashboard/CardBalanceador.vue';
import CardNodoECS from '../components/Dashboard/CardNodoECS.vue';
import CardEndpoint from "../components/Dashboard/CardEndpoint.vue";

const dummyData = ref(getData());
onMounted(() => {
    setInterval(() => {
        dummyData.value = getData();
    }, 7000)
})
</script>

<style scoped>
.container-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    justify-content: center;
    margin: 0 auto;
}

@media screen and (max-width: 768px) {
    .container-card {
        grid-template-columns: repeat(1, 1fr);
    }
}


.title-padre {
    color: #000;
    font-weight: 700;
    font-size: 2.5rem;
    text-align: start;
    margin-bottom: 4rem;
}
</style>