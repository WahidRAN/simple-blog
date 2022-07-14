<script>
export default {
  data() {
    return {
      mainBlog: [
				{
					bgColor: "bg-stone-700",
					isFeatured: true,
					tags: "Tools",
					title: "Title about tool",
					etaRead: "5 mins+ read"
				},
				{
					bgColor: "bg-stone-500",
					isFeatured: false,
					tags: "Essentials",
					title: "Title about essentials survival",
					etaRead: "5 mins+ read"
				},
				{
					bgColor: "bg-stone-300",
					isFeatured: false,
					tags: "Environment",
					title: "Title about environment",
					etaRead: "5 mins+ read"
				},
				{
					bgColor: "bg-orange-300",
					isFeatured: false,
					tags: "Environment",
					title: "Title about weather",
					etaRead: "5 mins+ read"
				},
				{
					bgColor: "bg-green-300",
					isFeatured: false,
					tags: "Essentials",
					title: "Title about basic essentials",
					etaRead: "5 mins+ read"
				},
				{
					bgColor: "bg-orange-600",
					isFeatured: false,
					tags: "Cautions",
					title: "Title about danger animals",
					etaRead: "5 mins+ read"
				},
				{
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title about do and dont in the wild",
					etaRead: "5 mins+ read"
				}
			]
    }
  },
	methods: {
		toDetails() {
			this.$router.push('/details')
		}
	}
}
</script>

<template>
	<section
		id="content-body"
		class="grid gap-8 grid-cols-3 grid-rows-3 
			mt-12 px-16 xl:px-24 xl:pb-16 2xl:px-72 2xl:py-16"
	>
		<div 
			v-for="blog in mainBlog"
			class="text-white hover:bg-blueish cursor-pointer h-96 rounded-lg p-8 flex flex-col justify-end"
			:class="[{ 'col-span-2': blog.isFeatured }, blog.bgColor]"
			@click="toDetails()">
			<p>{{blog.tags}}</p>
			<h1 class="text-6xl">{{blog.title}}</h1>
			<div>
				<p class="text-right">{{blog.etaRead}}</p>
			</div>
		</div>
	</section>
</template>