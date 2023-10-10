<template>
    <div class="m-0 p-0">
        <h1>Microservicios</h1>
        <div class="row">
            <TableComponent id="saludyservicios" :widgetData="dummydata" />
            <TableComponent id="saludyservicios1" :widgetData="dummydata" />
            <!-- <TableProyecto tableId="usersvip" :tableData="vipUsersData" title="Salud y Servicios médicos"
                :table-config="tableConfig"/> -->

        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
// import TableProyecto from '../components/TableProyecto.vue';
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
</style>