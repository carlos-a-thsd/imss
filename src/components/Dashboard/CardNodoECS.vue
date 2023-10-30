<template>
    <div class="firewalls-grid">
        <div v-for="elemento in widgetData.nodosECS" :key="elemento.name">
            <div class="nodoECS-item">
                <span class="bullet"
                    :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                <p class="listado">{{ elemento.name }}</p>
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

.bullet {
    margin-top: -.7rem;
    border-radius: 50%;
    margin-right: .5rem;
}
</style>