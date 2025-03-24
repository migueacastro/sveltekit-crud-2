export async function load() {

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  let users = data;
  return {
    users,
  }
}
export const actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const idToDelete = formData.get('id');

    const response = await fetch('https://jsonplaceholder.typicode.com/users'+idToDelete,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idToDelete })
      }
    );
    if (response.ok) {
      console.log(await response.json());
      return { success: true };
    }
    return { success: false };
  }
};