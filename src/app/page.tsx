import Image from "next/image";
import "@/theme/theme.config";
import { redirect } from "next/navigation";
export default function Home() {
  return redirect("/pillars");
}
