<script>
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';
	import { enhance } from '$app/forms';

	export const toast = getContext('toast');

	function toastError() {
		toast.create({
			title: 'Error',
			description: 'Error al crear usuario.',
			type: 'error'
		});
	}

	function toastSuccess() {
		toast.create({
			title: 'Creado',
			description: 'Usuario creado!',
			type: 'success'
		});
	}
</script>

<h1 class="h1 text-primary text-3xl">Agregar usuario</h1>
<div class="my-3">
	<form method="POST" action="?/add" class="mx-auto flex w-3/4 flex-col space-y-3" use:enhance={({ formData }) => {
		return async ({ result }) => {
			if (result.type === 'success') {
				// Remove the deleted user from the tableData array
				toastSuccess();
				goto('/users');
				
			} else if (result.type === 'failure') {
				console.error('Error al crear usuario', result);
				toastError();
			}
		};
	}}>
		<label class="label">
			<span class="label-text w-fit">Nombre</span>
			<input
				class="input bg-surface-100/25 shadow-xl"
				type="text"
				name="name"
				placeholder="Nombre"
			/>
		</label>
		<label class="label">
			<span class="label-text w-fit">Nombre de usuario</span>
			<input
				class="input bg-surface-100/25 shadow-xl"
				type="text"
				name="username"
				placeholder="Nombre de usuario"
			/>
		</label>
		<label class="label">
			<span class="label-text w-fit">Email</span>
			<input
				name="email"
				class="input bg-surface-100/25 shadow-xl"
				type="text"
				placeholder="Email"
			/>
		</label>

		<div class="mt-4 flex flex-row space-x-4">
			<button type="button" class="btn preset-filled" on:click={() => goto('/users')}>
				Volver
			</button>
			<button class="btn preset-filled-primary-500"> Guardar </button>
		</div>
	</form>
</div>
