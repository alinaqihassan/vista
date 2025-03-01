import { useEffect, useState } from 'react';
import { BACKGROUND_IMAGES } from '@/constants/backgrounds';
import { BackgroundImageData } from '@/types/types';

const useBackgroundImage = (time: Date): string => {
  const [photoLink, setPhotoLink] = useState<string>('');

  useEffect(() => {
    const hours = time.getHours();

    const backgroundData: BackgroundImageData | undefined =
      BACKGROUND_IMAGES.find(({ range }) => {
        const [start, end] = range;

        if (start > end) {
          return hours >= start || hours < end;
        }

        return hours >= start && hours < end;
      });

    const background = backgroundData?.image || 'morning.jpg';
    document.documentElement.style.setProperty(
      '--background-image',
      `url(/images/${background})`
    );
    setPhotoLink(backgroundData?.link || 'https://unsplash.com');
  }, [time]);

  return photoLink;
};

export default useBackgroundImage;
