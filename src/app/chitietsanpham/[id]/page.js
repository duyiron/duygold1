"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Nhẫn Vàng 24K 9999",
      price: 8200000,
      code: "VG001",
      type: "Vàng 24K",
      images: ["/anh2.jpg"],
    },
    {
      id: 2,
      name: "Dây Chuyền Vàng Ý 18K",
      price: 12100000,
      code: "VG002",
      type: "Vàng 18K",
      images: ["/anh3.jpg"],
    },
    {
      id: 3,
      name: "Vòng Tay Kim Cương",
      price: 45000000,
      code: "VG003",
      type: "Trang sức cao cấp",
      images: ["/anh4.jpg"],
    },
    {
      id: 4,
      name: "Mặt Dây Chuyền Tỳ Hưu",
      price: 5700000,
      code: "VG004",
      type: "Phong thủy",
      images: ["/anh12.jpg"],
    },
    {
      id: 5,
      name: "Bông Tai Ngọc Trai",
      price: 3300000,
      code: "VG005",
      type: "Trang sức nữ",
      images: ["/anh6.jpg"],
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  const [mainImg, setMainImg] = useState(
    product ? product.images[0] : ""
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className={styles.container}>
        <h2>❌ Không tìm thấy sản phẩm</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.mainImage}>
          <Image
            src={mainImg}
            width={400}
            height={400}
            alt={product.name}
          />
        </div>

        <div className={styles.subImages}>
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={80}
              height={80}
              alt=""
              onClick={() => setMainImg(img)}
              className={mainImg === img ? styles.activeImg : ""}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <h2 className={styles.title}>{product.name}</h2>

        <p className={styles.code}>
          Mã sản phẩm: <b>{product.code}</b>
        </p>

        <div className={styles.price}>
          {product.price.toLocaleString()}đ
        </div>

        <p className={styles.type}>
          Loại: <b>{product.type}</b>
        </p>

        {/* QUANTITY */}
        <div className={styles.quantity}>
          <button onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        {/* BUTTON */}
        <div className={styles.actions}>
          <button className={styles.add}>💬 Liên hệ tư vấn</button>
          <button className={styles.buy}>🔥 Mua ngay</button>
        </div>

        {/* MÔ TẢ */}
        <div className={styles.desc}>
          <h4>Mô tả sản phẩm</h4>
          <p>
            Sản phẩm vàng chính hãng, đảm bảo chất lượng và độ tinh khiết cao.
            Thiết kế sang trọng, phù hợp làm quà tặng hoặc sử dụng cá nhân.
          </p>
        </div>
      </div>
    </div>
  );
}