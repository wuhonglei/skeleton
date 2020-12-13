<template>
	<div>
		<skeleton1
			v-for="(item,index) in list"
			:key="index"
			class="skeleton-wrapper"
		></skeleton1>
	</div>
</template>

<script>
import Skeleton1 from './Skeleton1.vue';

export default {
	components: {
		Skeleton1
	},
	data() {
		return {
			list: ' '.repeat(50).split('')
		}
	}
}
</script>

<style>
.skeleton-wrapper {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
	width: 100px;
	height: 100px;
}
</style>