<template>
    <div class="firewalls-grid">
        <div v-for="nodoECS in widgetData.nodoECS?.values" :key="nodoECS.name">
            <div class="nodoECS-item">
                <div
                    :style="{ width: '1rem', height: '1rem', borderRadius: '50%', backgroundColor: nodoECS.color, marginRight: '0.5rem', marginTop: '-.5rem' }" />
                <p class="listado">{{ nodoECS.name }}</p>
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
    gap: .5rem;
}

.nodoECS-item {
    display: flex;
    align-items: center;
    margin-top: -.6rem;
}
</style>