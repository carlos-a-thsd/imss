<template>
    <div>
        <h1>Microservicios</h1>
        <div class="conatiner-table">
            <TableComponent id="saludyservicios" :widgetData="dummydata" />
            <TableComponent id="saludyservicios1" :widgetData="dummydata" />
            <TableComponent id="saludyservicios2" :widgetData="dummydata" />
            <TableComponent id="saludyservicios3" :widgetData="dummydata" />
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
import TableComponent from '../components/TableComponent.vue';
import { getData } from '../data/dummyData';


const dummydata = ref(getData())
onMounted(() => {
    setInterval(() => {
        dummydata.value = getData()
    }, 7000)
})
</script>
<style scoped>
h1 {
    text-align: left;
}

.conatiner-table {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 5rem;
    margin: 0 auto;
}
</style>