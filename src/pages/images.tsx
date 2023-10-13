// pages/images.tsx

import { type GetStaticProps } from 'next';
import Image from 'next/image';

// List of image URLs
const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  // ...add URLs for all ten images
];

export default function ImagesPage() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-0 pb-full">
          <Image src={src} layout="fill" objectFit="cover" alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

// If your images are dynamic, you could fetch them in getStaticProps:
export const getStaticProps: GetStaticProps = async () => {
    // For example:
    const images: string[] = await fetchImagesFromAPI(); // Fixing unsafe assignment of an `any` value
    return { props: { images } }; // Fixing unsafe assignment of an `any` value
};
function fetchImagesFromAPI(): string[] | PromiseLike<string[]> {
    throw new Error('Function not implemented.');
}

