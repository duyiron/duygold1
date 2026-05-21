import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>Trang chủ</li>
          <li>Trang sức vàng</li>
          <li>Trang sức cưới</li>
          <li>Liên hệ</li>
        </ul>
      </nav>

      <div className={styles.logo}>💎 DUY GOLD</div>
    </div>
  );
}