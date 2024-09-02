<script lang="ts" setup>
import { ref, $navigateBack } from 'nativescript-vue';
import { useRouter } from 'router-vue-native'

const router = useRouter()


</script>

<template>
	<Page actionBarHidden="true">
		<GridLayout rows="auto, *">
			<Label text="Go Back" @tap="router.back()"
				class="text-center px-4 py-10 text-2xl text-gray-900 font-bold" />

		</GridLayout>
	</Page>
</template>
