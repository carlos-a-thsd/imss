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
                <tr>
                    <td>Dato 1</td>
                    <td>Dato 2</td>
                    <td>Dato 3</td>
                    <td>Dato 4</td>
                </tr>
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
  
<style scoped>
.title {
    font-size: 17px;
    font-weight: bold;
    color: #000;
    background-color: #f0f0f0;
    /* Agregar un fondo gris claro a las celdas del encabezado */
    padding: 10px;
    /* Añadir un poco de relleno para que se destaque más */
    text-align: center;
    /* Centrar el texto en las celdas del encabezado */
}

.hola {
    font-size: 15px;
    font-weight: normal;
    color: #000;
}

/* Estilos para las filas pares e impares */
.table tbody tr:nth-child(even) {
    background-color: #f5f5f5;
    /* Fondo gris claro para filas pares */
}

.table tbody tr:nth-child(odd) {
    background-color: #ffffff;
    /* Fondo blanco para filas impares */
}

.table tbody td {
    padding: 10px;
    /* Añadir relleno a todas las celdas de la tabla */
    text-align: center;
    /* Centrar el texto en todas las celdas de la tabla */
    border: 1px solid #ccc;
    /* Agregar bordes a las celdas */
}

/* Añadir un borde a las celdas del encabezado */
.table thead th {
    border: 1px solid #ccc;
}

.colored {
    background-color: #FFD700;
    /* Cambiar el color de fondo a amarillo para las celdas con la clase "colored" */
}
</style>
  