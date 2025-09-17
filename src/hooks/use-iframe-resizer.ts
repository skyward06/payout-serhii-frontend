import 'iframe-resizer/js/iframeResizer.contentWindow';

import { CONFIG } from 'src/config';

declare global {
  interface Window {
    iFrameResizerLicense?: string;
    parentIFrame?: {
      sendMessage: (message: any) => void;
      size: () => void;
      getId: () => string;
      getPageInfo: () => any;
      close: () => void;
    };
  }
}

// Set license key before using iframe resizer
const setLicenseKey = () => {
  if (typeof window !== 'undefined' && !window.iFrameResizerLicense) {
    window.iFrameResizerLicense = CONFIG.IFRAME_RESIZER_LICENSE_KEY;
  }
};

const useIframeResizer = () => {
  // Initialize license key when hook is used
  setLicenseKey();

  // Function to send messages to parent
  const sendMessage = (message: any) => {
    if (window.parentIFrame && window.parentIFrame.sendMessage) {
      window.parentIFrame.sendMessage(message);
    } else {
      console.warn('parentIFrame not available');
    }
  };

  // Function to trigger manual resize
  const triggerResize = () => {
    if (window.parentIFrame && window.parentIFrame.size) {
      window.parentIFrame.size();
    }
  };

  // Function to get iframe ID
  const getIframeId = () => window.parentIFrame?.getId?.() || null;

  // Function to close iframe (if parent supports it)
  const closeIframe = () => {
    if (window.parentIFrame && window.parentIFrame.close) {
      window.parentIFrame.close();
    }
  };

  return {
    sendMessage,
    triggerResize,
    getIframeId,
    closeIframe,
    isAvailable: !!window.parentIFrame,
  };
};

export default useIframeResizer;
