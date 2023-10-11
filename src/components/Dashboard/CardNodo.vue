<template>
    <div style="display: flex; gap: 1rem; align-items: center; margin-top: 2.7rem;">
        <div v-for="(nodo, index) in widgetData.nodo.values">
            <div class="number-container-divider">
                <h2 class="number" style="color: green;">{{ nodo.activos }}</h2>
                <p class="divider">{{ nodo.divider }}</p>
                <h2 class="number" style="color: gray;">{{ nodo.total }}</h2>
            </div>
            <div>
                <h2 class="number-restant" style="color: red;">{{ nodo.restante }}</h2>
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
.number-container-divider {
    display: flex;
    align-items: center;
}

.number-restant {
    margin: 0;
    position: relative;
    left: 3.5rem;
    font-weight: 500;
    font-size: 1.5rem;
}

.number {
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
}

.divider {
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
}
</style>
