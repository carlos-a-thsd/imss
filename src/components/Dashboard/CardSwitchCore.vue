<template>
    <div class="firewalls-grid">
        <div v-for="core in widgetData.core.values" :key="core.name">
            <div class="firewall-item">
                <img :src="core.icon" alt="" style="width: 2rem; height: 2rem;">
                <p class="listado">{{ core.name }}</p>
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
    align-items: center;
}

.firewall-item {
    display: flex;
    align-items: center;
}
</style>