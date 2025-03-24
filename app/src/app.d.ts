// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      users:{
        id: string;
        email: string;
        name: string;
        username: string;
      }[]
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export { };
