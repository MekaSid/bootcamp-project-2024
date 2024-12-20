import React from "react";
import PhotoCard from "@/components/gallery/PhotoCard"; // A component to display individual photos
import styles from "./gallery.module.css";
import Gallery from "@/database/gallerySchema"; // Import the gallery model
import connectDB from "@/database/db"; // Import the database connection function

// Fetch photos from the database
async function getPhotos() {
  await connectDB(); // Ensure database connection

  try {
    const photos = await Gallery.find({}); // Query all photos
    return photos;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return null; // Return null if there's an error
  }
}

export default async function GalleryPage() {
  const photos = await getPhotos();

  if (!photos) {
    return (
      <header>
        <p>No photos found</p>
      </header>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Gallery</h1>
      <div className={styles.gridContainer}>
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
          />
        ))}
      </div>
    </div>
  );
}
