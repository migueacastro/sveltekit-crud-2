import { goto } from "$app/navigation";
import { browser } from "$app/environment";
export function load() {
  if (browser) {

    goto('/users');
  }
}
