import { useEffect, useState } from 'react';
import { BACKGROUND_IMAGES } from '@/constants/backgrounds';
import { BackgroundImageData } from '@/types/types';

const useBackgroundImage = (): { imageUrl: string; photoLink: string } => {
  const [background, setBackground] = useState<{
    imageUrl: string;
    photoLink: string;
  }>({
    imageUrl: '',
    photoLink: '',
  });

  useEffect(() => {
    const dayOfWeek = new Date().getDay(); // Get the current day of the week (0-6, Sunday-Saturday)

    // Find the background image data corresponding to the current day
    const backgroundData: BackgroundImageData | undefined =
      BACKGROUND_IMAGES.find(({ day }) => day === dayOfWeek);

    // If background data exists, set the background image and the link
    if (backgroundData) {
      setBackground({
        imageUrl: `/images/${backgroundData.image}`,
        photoLink: backgroundData.link,
      });
    }
  }, []);

  return background; // Return the background image info
};

export default useBackgroundImage;
