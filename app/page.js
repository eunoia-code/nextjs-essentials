import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
