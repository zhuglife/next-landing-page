import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          LANDING
        </Link>
        <div className={styles.links}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className={styles.link}>
              {item.name}
            </Link>
          ))}
          <Link href="#cta" className={styles.signup}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
