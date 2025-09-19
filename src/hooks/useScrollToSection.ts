import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Altura aproximada do header
      const extraPadding = -80; // Padding mais negativo para subir um pouquinho mais
      const targetPosition = element.offsetTop - headerHeight - extraPadding;
      
      console.log(`Scrolling to ${sectionId}:`, {
        elementOffsetTop: element.offsetTop,
        headerHeight,
        extraPadding,
        targetPosition
      });
      
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  }, []);

  return { scrollToSection };
};
