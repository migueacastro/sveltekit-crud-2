<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="preset-gradient-one">
	<div class="bg-primary-100/15 mx-auto my-[3rem] w-3/4 rounded-md p-5 text-center">
		<ToastProvider>
			{@render children()}
		</ToastProvider>
	</div>
</div>
