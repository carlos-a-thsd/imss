<template>
    <div class="firewalls-grid">
        <div v-for="firewall in widgetData.firewalls.values" :key="firewall.name">
            <div class="firewall-item">
                <img :src="firewall.icon" alt="" style="width: 2rem; height: 2rem;">
                <p class="listado">{{ firewall.name }}</p>
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .5rem;
    margin-top: -.6rem;
}

.firewall-item {
    display: flex;
    align-items: center;
}
</style>
  