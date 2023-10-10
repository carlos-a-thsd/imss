<template>
    <div>
        <br>
        <table class="table" style="width:100%;" :id="`${id}`">
            <thead>
                <tr>
                    <th class="title">Nombre</th>
                    <th class="title">Activos</th>
                    <th class="title">Inactivos</th>
                    <th class="title">Total</th>
                </tr>
            </thead>
            <tbody class="hola">
                <!-- Aquí puedes agregar filas de datos si es necesario -->
                <tr>
                    <td>Dato 1</td>
                    <td>Dato 2</td>
                    <td>Dato 3</td>
                    <td>Dato 4</td>
                </tr>
                <!-- Agrega más filas según tus datos -->
            </tbody>
        </table>
    </div>
</template>

<script>
import { makeTable, setupTable } from "../javascripts/tables.js";

export default {
    props: [
        "id",
        "widgetData",
    ],
    methods: {
        buildComponent() {
            setupTable(this.id, 5);
            console.log(this.widgetData[this.id].values)
            makeTable(this.id, this.widgetData[this.id].values)
        }
    },
    watch: {
        widgetData: {
            handler() {
                this.buildComponent();
            },
            deep: true,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.buildComponent();
        })
    }
}
</script>

<style>

</style>
