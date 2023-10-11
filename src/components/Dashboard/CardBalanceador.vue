<template>
    <div class="firewalls-grid">
        <div v-for="balanceador in widgetData.balanceador.values" :key="balanceador.name">
            <div class="firewall-item">
                <img :src="balanceador.icon" alt="" style="width: 2rem; height: 2rem;">
                <p class="listado">{{ balanceador.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['widgetData']
}
</script>

<style scoped>
.listado {
    color: #000;
    font-weight: 500;
    font-size: .8rem;
    text-align: start;
}

.firewalls-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5rem;
}

.firewall-item {
    display: flex;
    align-items: center;
}
</style>