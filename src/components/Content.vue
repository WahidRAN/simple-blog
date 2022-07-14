<script setup>
import { RouterView } from 'vue-router'
import ContentItems from './ContentItems.vue'
</script>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
	<main>
		<RouterView />
		<section
			id="content-title"
			class="flex flex-col mt-8"
		>
			<h1 class="p-2 font-bold text-center text-7xl text-blueish">Survival Guide</h1>
			<div class="flex justify-center">
				<p class="text-center max-w-sm text-xs text-gray-600">Find out about how to survive in a beautiful or harsh environment</p>
			</div>
		</section>
		<ContentItems />
	</main>
</template>