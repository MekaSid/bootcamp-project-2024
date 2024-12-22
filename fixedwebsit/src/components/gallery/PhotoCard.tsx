// components/gallery/PhotoCard.tsx

"use client";

import React from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

type Photo = {
  _id: string;
  src: string;
  alt: string;
  caption: string;
};

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={300}
        height={200}
        className={styles.image}
      />
    </div>
  );
};

export default PhotoCard;
