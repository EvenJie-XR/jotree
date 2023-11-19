<template>
	<div class="three-container" ref="threeContainer"></div>
</template>
<script lang="ts" setup>
import { Jotree } from "jotree"
import { onMounted, ref } from "vue";

const threeContainer = ref()
onMounted(() => {
	const jotree = new Jotree(threeContainer.value);
	jotree.loadPointCloud("data/pointclouds/room/metadata.json", "room", () => {
		
	})
})
</script>

<style lang="scss" scoped>
.three-container {
	width: 100%;
	height: 100%;
}
</style>
