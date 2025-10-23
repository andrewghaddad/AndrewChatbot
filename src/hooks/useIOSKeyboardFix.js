import { useEffect } from "react";

export function useIOSKeyboardFix() {
  useEffect(() => {
    // Detect iOS Safari
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (!isIOS || !window.visualViewport) return;

    const adjustHeight = () => {
      document.documentElement.style.height = `${window.visualViewport.height}px`;
    };

    // Initial adjustment
    adjustHeight();

    // Listen to visualViewport resize/scroll events
    window.visualViewport.addEventListener("resize", adjustHeight);
    window.visualViewport.addEventListener("scroll", adjustHeight);

    // Cleanup
    return () => {
      window.visualViewport.removeEventListener("resize", adjustHeight);
      window.visualViewport.removeEventListener("scroll", adjustHeight);
      document.documentElement.style.height = ""; // reset on unmount
    };
  }, []);
}