import { useEffect } from 'react';

declare global {
  interface Window {
    parentIFrame?: {
      sendMessage: (message: any) => void;
      size: () => void;
    };
  }
}

const useIframeResizer = () => {
  useEffect(() => {
    // Dynamically import the content window script
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.7/js/iframeResizer.contentWindow.min.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Function to send messages to parent
  const sendMessage = (message: any) => {
    if (window.parentIFrame) {
      window.parentIFrame.sendMessage(message);
    }
  };

  // Function to trigger manual resize
  const triggerResize = () => {
    if (window.parentIFrame) {
      window.parentIFrame.size();
    }
  };

  return { sendMessage, triggerResize };
};

export default useIframeResizer;
