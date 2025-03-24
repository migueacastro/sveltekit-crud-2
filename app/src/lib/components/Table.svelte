<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	export let tableData = [];
	import { getContext } from 'svelte';

	export const toast = getContext('toast');

	function toastError() {
		toast.create({
			title: 'Error',
			description: 'Error al eliminar usuario.',
			type: 'error'
		});
	}

	function toastInfo() {
		toast.create({
			title: 'Eliminado',
			description: 'Usuario eliminado!',
			type: 'info'
		});
	}
</script>

<div class="overflow-x-auto">
	<table class="bg-primary-200/15 table caption-bottom">
		<caption class="pt-4">Made by Miguel Castro</caption>
		<thead>
			<tr>
				<th>ID</th>
				<th>Nombre</th>
				<th>Nombre de usuario</th>
				<th class="">Email</th>
				<th></th>
			</tr>
		</thead>
		<tbody class="[&>tr]:hover:preset-filled-primary-500">
			{#each tableData as row}
				<tr on:click={() => goto(`/users/${row.id}`)}>
					<td>{row?.id}</td>
					<td>{row?.name}</td>
					<td>{row?.username}</td>
					<td>{row?.email}</td>
					<td>
						<!-- Form to delete the user -->
						<form
							method="POST"
							action="?/delete"
							use:enhance={({ formData }) => {
								return async ({ result }) => {
									if (result.type === 'success') {
										// Remove the deleted user from the tableData array
										tableData = tableData.filter(
											(user) => user.id !== parseInt(formData.get('id'))
										);
										toastInfo();
									} else if (result.type === 'failure') {
										console.error('Error al eliminar usuario:', result);
										toastError();
									}
								};
							}}
						>
							<input type="hidden" name="id" value={row.id} />
							<button type="submit" class="btn btn-danger" on:click={(e) => e.stopPropagation()}>
								<i class="fa-solid fa-trash"></i> Delete
							</button>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<td colspan="3" class="text-left">Total</td>
				<td colspan="2" class="text-right">{tableData.length} Elements</td>
			</tr>
		</tfoot>
	</table>
</div>
