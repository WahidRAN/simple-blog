<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { MenuIcon } from '@heroicons/vue/solid'
</script>

<script>
export default {
  methods: {
    toListView() {
			this.$router.push('/list-content')
		}
  }
}
</script>

<template>
  <Navbar>
    <template #icon>
      <MenuIcon 
        class="h-6 w-6 text-blueish hover:text-blue-500"
        @click="toListView()" />
    </template>
  </Navbar>
  <RouterView />
</template>
