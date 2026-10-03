// Google Analytics 4 & Event Tracking Helper Utility

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Ensures dataLayer array and window.gtag stub function exist on window object.
 */
const getGtag = (): ((...args: any[]) => void) | null => {
  if (typeof window === 'undefined') return null;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }
  return window.gtag;
};

/**
 * Initializes Google Analytics 4 script asynchronously.
 * Only runs if VITE_GA_MEASUREMENT_ID is provided.
 */
export const initGA = (): void => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.log('[Analytics] GA Measurement ID not configured or running in DEV mode.');
    }
    return;
  }

  // Ensure window.gtag stub exists
  getGtag();

  // Prevent loading script multiple times
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  if (window.gtag) {
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
    });
  }
};

/**
 * Tracks custom event in GA4 reliably with beacon transport.
 */
export const trackEvent = (eventName: string, params?: Record<string, any>): void => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event - DEV/No ID] ${eventName}:`, params);
    }
    return;
  }

  // Ensure GA initialization and dataLayer stub exist
  initGA();

  const gtag = getGtag();
  if (gtag) {
    gtag('event', eventName, {
      transport_type: 'beacon',
      ...params,
    });
  }
};

/**
 * Tracks Resume PDF download / view events
 */
export const trackResumeDownload = (linkText: string = 'Resume'): void => {
  trackEvent('resume_download', {
    file_name: 'Vasudevan_R_Resume.pdf',
    link_text: linkText,
    file_extension: 'pdf',
    link_url: '/resume.pdf',
  });
};

/**
 * Tracks Outbound social/external link clicks
 */
export const trackOutboundLink = (url: string, platform: string): void => {
  trackEvent('click', {
    event_category: 'Outbound Link',
    event_label: platform,
    link_url: url,
  });
};
