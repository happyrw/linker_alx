"use client";

import { useStateContext } from "@/context/stateContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useStateContext();

  const { push } = useRouter();
  if (!user) {
    push("/registration")
  };

  return (
    <div className="text-center p-10 bg-black mx-2 text-white">
      <p className="text-5xl">Welcome </p>
      <p className="font-bold uppercase border-[1px] border-green-700 px-5 py-3 mt-10">{user?.username}</p>
    </div>
  );
}
