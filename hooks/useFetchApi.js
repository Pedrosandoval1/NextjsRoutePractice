import { API_USERS, URL_API } from "@/shared/apisConfig";

export async function fetchUsers() {
  const res = await fetch(`${URL_API}/${API_USERS}`);
  const data = await res.json();
  return {
    users: data.data,
  };
}

export async function fetchUsersById(id) {
  const res = await fetch(`${URL_API}/${API_USERS}/${id}`);
  const data = await res.json();
  return {
    user: data.data,
  };
}
