import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const products = [
    {
      id: 1,
      name: "Nhẫn Vàng 24K 9999",
      price: 8200000,
      oldPrice: 8500000,
      image: "/anh2.jpg",
      remain: 5,
      discount: 5,
    },
    {
      id: 2,
      name: "Dây Chuyền Vàng Ý 18K",
      price: 12100000,
      oldPrice: 13400000,
      image: "/anh3.jpg",
      remain: 3,
      discount: 10,
    },
    {
      id: 3,
      name: "Vòng Tay Kim Cương",
      price: 45000000,
      oldPrice: 50000000,
      image: "/anh4.jpg",
      remain: 2,
      discount: 10,
    },
    {
      id: 4,
      name: "Mặt Dây Chuyền Tỳ Hưu",
      price: 5700000,
      oldPrice: 6900000,
      image: "/anh12.jpg",
      remain: 6,
      discount: 15,
    },
    {
      id: 5,
      name: "Bông Tai Ngọc Trai",
      price: 3300000,
      oldPrice: 4600000,
      image: "/anh6.jpg",
      remain: 4,
      discount: 20,
    },
    {
      id: 6,
      name: "Nhẫn Cưới Kim Cương",
      price: 22250000,
      oldPrice: 25000000,
      image: "/anh13.jpg",
      remain: 2,
      discount: 10,
    },
    {
      id: 7,
      name: "Lắc Tay Vàng Trắng",
      price: 9500000,
      oldPrice: 10650000,
      image: "/anh8.jpg",
      remain: 5,
      discount: 10,
    },
    {
      id: 8,
      name: "Đồng Hồ Mạ Vàng",
      price: 15550000,
      oldPrice: 17700000,
      image: "/anh9.jpg",
      remain: 3,
      discount: 12,
    },
    {
      id: 9,
      name: "Kiềng Cổ Cô Dâu",
      price: 34400000,
      oldPrice: 37700000,
      image: "/anh16.jpg",
      remain: 1,
      discount: 8,
    },
    {
      id: 10,
      name: "Vàng Miếng SJC 1 Lượng",
      price: 88150000,
      oldPrice: 89350000,
      image: "/anh15.jpg",
      remain: 10,
      discount: 2,
    },
  ];

  return (
    <div className={styles.container}>

      {/* HEADER */}
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

      {/* CONTENT */}
      <div className={styles.item2}>
        <div className={styles.mainContent}>
          {products.map((item) => (
            <div key={item.id} className={styles.product}>

              {/* SALE */}
              <div className={styles.sale}>-{item.discount}%</div>

              {/* IMAGE */}
              <div className={styles.productImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
              </div>

              {/* NAME */}
              <div className={styles.productName}>
                {item.name}
              </div>

              {/* PRICE */}
              <div className={styles.productPrice}>
                <span className={styles.price}>
                  {item.price.toLocaleString()}₫
                </span>
                <span className={styles.oldPrice}>
                  {item.oldPrice.toLocaleString()}₫
                </span>
              </div>

              {/* REMAIN */}
              <div className={styles.productRemain}>
                Còn {item.remain} sản phẩm
              </div>

              {/* BUTTON */}
              <div className={styles.buyButton}>
                <Link href={`/chitietsanpham/${item.id}`}>
                  Liên hệ báo giá
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
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

    </div>
  );
}