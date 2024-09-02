<template>
	<RouterView :defaultRoute="defaultRoute" />
</template>

<script setup lang="ts">
import { ref } from 'nativescript-vue';
const defaultRoute = ref('/home')
</script>
