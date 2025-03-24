<script>
	import Table from '$lib/components/Table.svelte';
	import { goto } from '$app/navigation';
	export let data;
</script>

<h1 class="h1 text-primary text-3xl">Usuarios</h1>
<div class="my-3 flex flex-row justify-end">
	<button class="btn preset-filled-primary-500" on:click={() => goto('/users/add')}>
		Agregar
	</button>
</div>
<Table tableData={data?.users} />
