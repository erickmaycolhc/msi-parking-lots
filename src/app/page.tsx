import { redirect } from "next/navigation";
export default function HomeDefault({}) {
  redirect("/admin/parqueos/listado");
}
