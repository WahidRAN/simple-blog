<script setup>
import { RouterLink } from 'vue-router'
import { ArrowLeftIcon } from '@heroicons/vue/solid'
</script>

<template>
<section class="sticky top-24 bg-white">
	<button class="flex flex-row mx-16 py-8 hover:text-blue-500">
		<ArrowLeftIcon class="h-6 w-6 mr-4" />
		<RouterLink to="/">Back to Home</RouterLink>
	</button>
</section>

<section
	id="content-title"
	class="bg-stone-700 flex flex-col px-16 py-8 2xl:px-48 pt-48 text-white"
>
	<h1 class="	font-bold text-7xl">Title</h1>
	<div class="flex">
		<p class="max-w-sm text-xs">A little introduction about the topics</p>
	</div>
	<p class="self-end text-zinc-400">Read in <b>5 minutes</b></p>
</section>
<article class="px-48 py-12">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget posuere neque. Aenean sagittis volutpat enim, et condimentum felis tincidunt a. Aenean eget lobortis lacus, elementum finibus ante. Mauris bibendum enim id velit imperdiet, vel elementum elit fermentum. Aenean at fringilla purus, et convallis purus. Phasellus ultricies purus metus, nec interdum felis eleifend et. Morbi auctor turpis leo, quis elementum lacus maximus at. Curabitur mattis finibus nulla, a condimentum leo mattis a. Morbi varius, sapien eget tempus vulputate, massa neque dapibus odio, at auctor lorem diam id magna. Suspendisse et lacinia dolor. Suspendisse porta pretium lorem, auctor tincidunt diam gravida ac. Nulla eget condimentum mauris, eget ultrices lacus. Ut semper orci sed odio venenatis eleifend.</p>

	<p class="mt-8">
		Proin et fringilla libero. Phasellus rhoncus auctor mauris nec eleifend. Duis semper eu nunc non ullamcorper. Suspendisse potenti. Sed rutrum massa in pharetra malesuada. Curabitur a sem auctor, suscipit orci eget, tincidunt tortor. Pellentesque pharetra, velit at vestibulum tincidunt, nisl tellus scelerisque lorem, eget vulputate neque dolor quis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed augue erat, vehicula sit amet tempor quis, facilisis sit amet elit. Curabitur luctus, tellus eu faucibus vulputate, est velit feugiat dolor, a lobortis diam nibh ut lorem. Fusce pellentesque euismod interdum.
	</p>

	<p class="mt-8">
		Sed accumsan pellentesque diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula dui augue, eu pellentesque nisi feugiat eget. Donec scelerisque consectetur risus sit amet vestibulum. Aliquam ultrices ultrices malesuada. Donec luctus tellus non congue ornare. Suspendisse congue, velit sed laoreet auctor, arcu turpis feugiat nibh, vel sollicitudin sapien dui condimentum mi. Suspendisse nec finibus enim.
	</p>

	<p class="mt-8">
		Cras laoreet, odio vitae finibus efficitur, arcu lacus bibendum justo, et pulvinar ex sem id purus. Donec mi ipsum, sodales at felis aliquet, malesuada tempor arcu. Praesent nulla nisi, sodales sed odio porta, cursus maximus erat. Nunc laoreet sit amet erat a euismod. In ornare velit quis sapien mollis, ac posuere magna mollis. Curabitur hendrerit nibh quis congue gravida. Morbi laoreet risus in laoreet cursus. Quisque non lorem non velit laoreet maximus ut non neque. Nam vestibulum efficitur nulla, eu viverra nisi eleifend vel. Aenean sed dui nec nibh euismod fermentum. Vivamus quis hendrerit lorem, at rutrum velit. Mauris et turpis imperdiet, facilisis leo eu, consequat urna.
	</p>

	<p class="mt-8">
		Sed quis augue non metus bibendum facilisis porttitor non tortor. Morbi id eros est. Praesent at augue massa. Pellentesque consectetur orci vitae volutpat ultrices. Donec eget ipsum ligula. Cras commodo massa sit amet dictum dignissim. Nunc eleifend consectetur ante, eu gravida erat volutpat eu. Nullam blandit tempor arcu a consectetur. Duis ultricies congue velit, non laoreet nibh pulvinar imperdiet. Proin pharetra tempor dapibus. Aliquam vulputate libero urna, et condimentum diam suscipit non. Quisque iaculis placerat erat id fringilla.
	</p>
</article>
</template>