<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <div>
            <img src="/imss 1.png" alt=""
                style="width: 8rem; height: 10rem; margin-bottom: 1em; margin-top: 1em; margin-left: 1em;">
        </div>
        <div class="container-date">
            <img src="/image-profile.png" alt="" style="width: 4rem; height: 4rem;" />
            <div>
                <h2 class="name">Axel Tellez</h2>
                <h2 class="time">{{ currentTime }}</h2>
                <h2 class="date">{{ currentDate }}</h2>
            </div>
        </div>
        <div style="padding: 1rem;">
            <div class="logo-link">
                <img src="/Outline.png" alt="logo" class="logo" style="width: 25px; height: 25px; margin-right: 0.5em;" />
                <SidebarLink to="/" style="width: 100%;">
                    Dashboard
                </SidebarLink>
            </div>
            <div class="logo-link">
                <img src="/Microservices.png" alt="logo" class="logo"
                    style="width: 25px; height: 25px; margin-right: 0.5em;" />
                <SidebarLink to="/about" style="width: 100%;">
                    Microservicios
                </SidebarLink>
            </div>
            <div class="logo-link">
                <img src="/logout.png" alt="logo" class="logo" style="width: 25px; height: 25px; margin-right: 0.5em;" />
                <SidebarLink to="#" style="width: 100%;">
                    Salir
                </SidebarLink>
            </div>
        </div>
        <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <fa icon="angles-left" />
        </span>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
    components: { SidebarLink },
    props: {},
    setup() {
        const currentTime = ref('');
        const currentDate = ref('');

        const updateCurrentTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;

            currentTime.value = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
        };

        const updateCurrentDate = () => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            currentDate.value = now.toLocaleDateString('es-MX', options);
        };

        onMounted(() => {
            updateCurrentTime();
            updateCurrentDate();

            setInterval(() => {
                updateCurrentTime();
                updateCurrentDate();
            }, 1000);
        });

        return { currentTime, currentDate, collapsed, toggleSidebar, sidebarWidth };
    }
};
</script>
<style>
:root {
    --sidebar-bg-color: #E9F5DB;
    --sidebar-item-border-right: #050505;
}
</style>
<style scoped>
.sidebar {
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.3em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1em;

}

.logo-link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.container-date {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
}

.date {
    font-size: 0.8em;
    margin-top: 0.2em;
}

.time {
    font-size: 1em;
    margin-top: 0.2em;
}

.name {
    font-size: 1.2em;
    margin-top: 0.2em;
}
</style>