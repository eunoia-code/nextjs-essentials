import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Next.js Essentials</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}