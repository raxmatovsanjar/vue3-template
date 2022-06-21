<script setup lang="ts"></script>

<template>
	<div class="wrapper">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>

<style>
.wrapper {
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-template-columns: 100%;
}
</style>
