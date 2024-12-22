"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePhotoClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.galleryContainer}>
      {photos.map((photo, index) => (
        <div
          key={index} // Use the index as the unique key
          className={`${styles.photoContainer} ${
            activeIndex === index ? styles.active : ""
          }`}
          onClick={() => handlePhotoClick(index)}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
              className={styles.image}
            />
          </div>
          <div className={styles.overlay}>
            <span className={styles.caption}>{photo.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
