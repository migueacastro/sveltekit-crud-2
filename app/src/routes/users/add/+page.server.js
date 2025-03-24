import { redirect } from "@sveltejs/kit";

export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();

    const response = await fetch('https://jsonplaceholder.typicode.com/users/',
      {
        method: 'POST',
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
