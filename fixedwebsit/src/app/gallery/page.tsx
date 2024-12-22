// app/gallery/page.tsx

import React from 'react';
import Gallery from '@/components/gallery/Gallery';
import connectDB from '@/database/db';
import GalleryModel, { IGallery } from '@/database/gallerySchema';

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

// Fetch photos from the database
async function getPhotos(): Promise<Photo[]> {
  await connectDB(); // Ensure database connection

  try {
    // Use `.lean()` to get plain JavaScript objects
    const photos = await GalleryModel.find({}).lean();

    // Convert documents to plain objects with stringified `_id`
    return photos.map(photo => ({
      src: photo.src,
      alt: photo.alt,
      caption: photo.caption,
    }));
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

const GalleryPage = async () => {
  const photos = await getPhotos();

  if (!photos.length) {
    return (
      <header>
        <p>No photos found</p>
      </header>
    );
  }

  return <Gallery photos={photos} />;
};

export default GalleryPage;
