import { fetchUsersById } from "@/hooks/useFetchApi";

export default async function getUser({ params }) {
  const { user } = await fetchUsersById(params.id);
  return (
    <div className="bg-slate-400 p-10 rounded-md h-80 ">
      <img src={user.avatar} className="m-auto my-4" />
      <h3 className="text-3xl font-bold">
        {user.id} {user.first_name} {user.last_name}
      </h3>
      <p className="text-slate-100"> email: {user.email}</p>
    </div>
  );
}
