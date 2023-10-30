<template>
    <div class="card-dashboard">
        <div class="container-end">
            <div>
                <h1>Endpoint HTTP</h1>
                <div class="http">
                    <div class="container-http">
                        <p>{{ widgetData.points.solicitudesHTTP }}</p>
                        <h2>Solicitudes</h2>
                    </div>
                    <div class="container-time">
                        <h2>Tiempo de respuesta</h2>
                        <p>{{ widgetData.points.responseTime }}%</p>
                    </div>
                </div>
            </div>
            <div style="border-left: 2px solid #ccc; margin: 0 auto; height: 9.8rem;" />
            <div>
                <h1>Endpoint JMX</h1>
                <div class="container-http">
                    <p>{{ widgetData.points.solicitudesJMX }}</p>
                    <h2>Solicitudes</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'widgetData'
    ]
}
</script>
  
<style scoped>
.card-dashboard {
    position: relative;
    width: auto;
    height: auto;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    padding: 0.5rem;
    border: 3px solid #ccc;
}

.container-end {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: .5rem;
    margin-bottom: -1rem;
}

h1 {
    color: #000;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    margin-bottom: 1rem;
}

.container-http h2 {
    font-size: 12px;
}

.container-http p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: -.1rem;
}

.container-time h2 {
    font-size: 12px;
}

.container-time p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: -.1rem;
}
</style>