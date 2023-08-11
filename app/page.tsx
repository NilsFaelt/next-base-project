import { HeaderWithNav } from "@/features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BaseProject",
  description: "BaseProject",
};
export default function Home() {
  return (
    <main>
      <HeaderWithNav />
      <h1>test</h1>
    </main>
  );
}
