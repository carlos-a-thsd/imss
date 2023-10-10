
<template>
  <SidebarMenu />
  <div>
    <router-view />
  </div>
  <!-- <ul>
    <li><router-link :to="{name: 'home'}">Home</router-link></li>
    <li><router-link :to="{name: 'about'}">About</router-link></li>
  </ul> -->
</template>
<script setup>
import SidebarMenu from './components/sidebar/SidebarMenu.vue'
import 'bootstrap/dist/css/bootstrap.css'; // Importa el archivo CSS de Bootstrap
import { RouterView } from 'vue-router';
</script>