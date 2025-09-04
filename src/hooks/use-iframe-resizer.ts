import 'iframe-resizer/js/iframeResizer.contentWindow';

declare global {
  interface Window {
    parentIFrame?: {
      sendMessage: (message: any) => void;
      size: () => void;
      getId: () => string;
      getPageInfo: () => any;
      close: () => void;
    };
  }
}

const useIframeResizer = () => {
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
