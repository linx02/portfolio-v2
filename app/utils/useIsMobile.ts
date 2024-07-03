// utils/useIsMobile.ts

import { useEffect, useState } from 'react';

const MOBILE_WIDTH_THRESHOLD = 768; // Adjust as per your design considerations

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH_THRESHOLD);
    };

    // Initial check
    checkIsMobile();

    // Event listener to update on resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

export default useIsMobile;