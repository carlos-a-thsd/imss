<template>
    <div style="display: flex; gap: 1rem; align-items: center; margin-top: 2.7rem;">
        <div v-for="(switches, index) in widgetData.switches.values">
            <div class=" number-container-divider">
                <h2 class="number" style="color: green;">{{ switches.activos }}</h2>
                <p class="divider">{{ switches.divider }}</p>
                <h2 class="number" style="color: gray;">{{ switches.total }}</h2>
            </div>
            <div>
                <h2 class="number-restant" style="color: red;">{{ switches.restante }}</h2>
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
    font-weight: 500;
    font-size: 1.5rem;
    left: 6rem;
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