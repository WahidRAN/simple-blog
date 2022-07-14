<script setup>
import { ShareIcon } from '@heroicons/vue/solid'
</script>

<template>
	<header class="sticky top-0 left-0 right-0">
		<nav class="bg-white">
			<ul class="flex flex-row py-8">
				<li class="ml-10">
					<button>
						<slot name="icon"></slot>
					</button>
					
				</li>
				<li class="grow text-center text-2xl text-blueish font-semibold font-serif">La Sopravvivenza</li>
				<li class="mr-10">
					<button class="">
						<ShareIcon class="h-6 w-6 text-blueish hover:text-blue-500" />
					</button>
				</li>
			</ul>
		</nav>
	</header>
</template>