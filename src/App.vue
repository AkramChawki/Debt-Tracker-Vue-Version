<template>
  <div class="min-h-screen bg-white px-4 font-inter relative">
    <!-- Header  -->
    <Navbar />
    <!-- Content -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar }
}
</script>

<style>

</style>