import React from "react";
import Image from "next/image";
import styles from "./photocard.module.css";

const PhotoCard: React.FC<{ src: string; alt: string; caption: string }> = ({
  src,
  alt,
  caption,
}) => {
  return (
    <div className={styles.photoCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={200}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
};

export default PhotoCard;
