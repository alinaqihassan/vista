import { useEffect, useState } from 'react';
import { BACKGROUND_IMAGES } from '@/constants/backgrounds';
import { BackgroundImageData } from '@/types/types';

const useBackgroundImage = (time: Date): string => {
  const [photoLink, setPhotoLink] = useState<string>('');

  useEffect(() => {
    const dayOfWeek = time.getDay(); // Get the current day of the week (0-6, Sunday-Saturday)

    // Find the background image data corresponding to the current day
    const backgroundData: BackgroundImageData | undefined =
      BACKGROUND_IMAGES.find(({ day }) => day === dayOfWeek);

    // If background data exists, set the background image and the link
    if (backgroundData) {
      const background = backgroundData.image;

      // Dynamically set the background image for the document root (HTML element)
      document.documentElement.style.setProperty(
        '--background-image',
        `url(/images/${background})`
      );

      // Set the link to the background image's source
      setPhotoLink(backgroundData.link);
    }
  }, [time]);

  return photoLink; // Return the link to the background image
};

export default useBackgroundImage;
