// pages/gallery.tsx

import Head from 'next/head';
import Image from 'next/image';
import { type FC } from 'react';

const GalleryPage: FC = () => {
  // Array of image URLs
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
    '/image8.jpg',
    '/image9.jpg',
    '/image10.jpg',
  ];

  return (
    <>
      <Head>
        <title>Image Gallery</title>
        <meta name="description" content="A simple image gallery" />
      </Head>
      <main className="p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-40">
              <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
