<script setup>
import Navbar from '@/components/Navbar.vue'
import { HomeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
</script>

<script>
export default {
	data() {
		return {
			page: 1,
			listData: [
				{
					index: 1,
					bgColor: "bg-stone-700",
					isFeatured: true,
					tags: "Tools",
					title: "Title about tool",
					etaRead: "5 mins+ read"
				},
				{
					index: 2,
					bgColor: "bg-stone-500",
					isFeatured: false,
					tags: "Essentials",
					title: "Title about essentials survival",
					etaRead: "5 mins+ read"
				},
				{
					index: 3,
					bgColor: "bg-stone-300",
					isFeatured: false,
					tags: "Environment",
					title: "Title about environment",
					etaRead: "5 mins+ read"
				},
				{
					index: 4,
					bgColor: "bg-orange-300",
					isFeatured: false,
					tags: "Environment",
					title: "Title about weather",
					etaRead: "5 mins+ read"
				},
				{
					index: 5,
					bgColor: "bg-green-300",
					isFeatured: false,
					tags: "Essentials",
					title: "Title about basic essentials",
					etaRead: "5 mins+ read"
				},
				{
					index: 6,
					bgColor: "bg-orange-600",
					isFeatured: false,
					tags: "Cautions",
					title: "Title about danger animals",
					etaRead: "5 mins+ read"
				},
				{
					index: 7,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title about do and dont in the wild",
					etaRead: "5 mins+ read"
				},
				{
					index: 8,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title 8",
					etaRead: "5 mins+ read"
				},
				{
					index: 9,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title 9",
					etaRead: "5 mins+ read"
				},
				{
					index: 10,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title 10",
					etaRead: "5 mins+ read"
				},
				{
					index: 11,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title 11",
					etaRead: "5 mins+ read"
				},
				{
					index: 12,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title 12",
					etaRead: "5 mins+ read"
				},
				{
					index: 13,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title 13",
					etaRead: "5 mins+ read"
				},
				{
					index: 14,
					bgColor: "bg-lime-600",
					isFeatured: true,
					tags: "Tips & Tricks",
					title: "Title 14",
					etaRead: "5 mins+ read"
				}
			],
			perPage: 3,
		}
	},
  methods: {
    toHomeView() {
			this.$router.push('/')
		},
		nextPage() {
			if (this.page !== Math.ceil(this.listData.length / this.perPage)) {
				this.page += 1;
			}
		},
		backPage() {
			if (this.page !== 1) {
				this.page -= 1;
			}
		},
		goToPage(numPage) {
			this.page = numPage;
		}
  },
	computed: {
		paginatedData() {
			return this.listData.slice((this.page - 1) * this.perPage, this.page * this.perPage)
		}
	}
}
</script>

<template>
  <Navbar>
    <template #icon>
      <HomeIcon
				class="h-6 w-6 text-blueish hover:text-blue-500"
				@click="toHomeView()" />
    </template>
  </Navbar>

	<section
		id="content-title"
		class="flex flex-col mt-4"
	>
		<h1 class="px-24 font-bold text-7xl text-blueish">Blog List</h1>
	</section>

	<div class="mx-32 mt-12 grid gap-4 auto-rows-max">
		<section>
			<div 
				v-for="item in paginatedData" 
				:key="item.index"
				:class="[item.bgColor]"
				class="text-white hover:bg-blueish cursor-pointer rounded-lg p-8 mb-4 flex flex-col"
			>
				{{ item.title }}
			</div>
		</section>
	
		<section class="flex justify-center">
			<button @click="backPage">
				<ChevronLeftIcon class="h-6 w-auto fill-blueish" />
			</button>
			<button
				class="p-4 mx-2 bg-blue-500 hover:bg-blueish text-white rounded-lg"
				v-for="item in Math.ceil(listData.length / perPage)"
				:key="item"
				@click="() => goToPage(item)"
			>
				{{ item }}
			</button>
			<button @click="nextPage">
				<ChevronRightIcon class="h-6 w-auto fill-blueish" />
			</button>
		</section>
	</div>
</template>
