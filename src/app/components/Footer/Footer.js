import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerCol}>
          <h3>Duy Gold</h3>
          <p>Chuyên kinh doanh vàng bạc, trang sức cao cấp uy tín.</p>
        </div>

        <div className={styles.footerCol}>
          <h4>Danh mục</h4>
          <ul>
            <li>Vàng 24K</li>
            <li>Vàng 18K</li>
            <li>Trang sức cưới</li>
            <li>Phong thủy</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Hỗ trợ</h4>
          <ul>
            <li>Đổi trả</li>
            <li>Bảo hành</li>
            <li>Hướng dẫn mua</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Liên hệ</h4>
          <p>Email: duygold@gmail.com</p>
          <p>Hotline: 0909 123 456</p>
        </div>

      </div>

      <div className={styles.footerBottom}>
        © 2026 Duy Gold | Trang sức Việt
      </div>
    </div>
  );
}