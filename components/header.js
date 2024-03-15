import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Next.js Essentials</h1>
      <Link href="/">Home</Link> |&nbsp;
      <Link href="/about">About</Link> |&nbsp;
      <Link href="/blog">Blog</Link>
    </header>
  );
}