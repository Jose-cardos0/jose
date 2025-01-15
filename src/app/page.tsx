import Image from "next/image";

import Header from "./header";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="max-w-7xl">
        <Header />
      </div>
    </main>
  );
}
