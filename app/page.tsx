import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center">
        <h1>NEXT.JS</h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
