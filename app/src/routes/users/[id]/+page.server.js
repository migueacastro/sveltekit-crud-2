import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/" + params.id);
  let data = await response.json();

  return {
    user: data,
  };
}



export const actions = {
  edit: async ({ request, params }) => {
    const data = await request.formData();
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id + '/',
      {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }
    );
    if (response.ok) {
      console.log(await response.json());
      return { success: true };
    }
    return { success: false };
  }
}
