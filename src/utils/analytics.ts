// Google Analytics 4 & Event Tracking Helper Utility

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Ensure dataLayer array and window.gtag stub function exist immediately on window object
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }
}

/**
 * Ensures window.gtag stub function exists and returns it.
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
 * Tracks custom event in GA4 reliably using transport_type: 'beacon'.
 */
export const trackEvent = (eventName: string, params?: Record<string, any>): void => {
  if (typeof window === 'undefined') return;

  // Auto-initialize GA if measurement ID is set
  if (GA_MEASUREMENT_ID) {
    initGA();
  }

  const payload = {
    transport_type: 'beacon',
    ...params,
  };

  // Log in Chrome DevTools console for real-time verification
  console.log(`[GA4 Track Event] ${eventName}:`, payload);

  const gtag = getGtag();
  if (gtag && GA_MEASUREMENT_ID) {
    gtag('event', eventName, payload);
  } else if (import.meta.env.DEV) {
    console.log(`[Analytics Event - DEV/No ID] ${eventName}:`, payload);
  }
};

/**
 * Sends a background email notification to vasudevanr.dev@gmail.com when resume is downloaded
 * Includes Downloader Name & Email details
 */
const sendResumeEmailAlert = (
  linkText: string,
  downloaderName: string = '',
  downloaderEmail: string = ''
): void => {
  const targetEmail = import.meta.env.VITE_NOTIFICATION_EMAIL || 'vasudevanr.dev@gmail.com';

  if (typeof window === 'undefined') return;

  try {
    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `📄 Resume Downloaded by ${downloaderName || 'a Visitor'}!`,
        _captcha: 'false',
        _template: 'table',
        Notification: 'Resume PDF Downloaded',
        DownloaderName: downloaderName || 'Visitor (Not Provided)',
        DownloaderEmail: downloaderEmail || 'Visitor Email (Not Provided)',
        FileName: 'Vasudevan_R_Resume.pdf',
        LinkText: linkText,
        Timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' (IST)',
        PageURL: window.location.href,
        UserAgent: navigator.userAgent,
      }),
    })
      .then(() => console.log(`[Email Alert Dispatched] Sent downloader info (${downloaderName}, ${downloaderEmail}) to ${targetEmail}`))
      .catch((err) => console.log('[Email Alert Notice]', err));
  } catch (err) {
    // Non-blocking notice swallow
  }
};

/**
 * Tracks Resume PDF download / view events with exact custom parameters & sends email notification with downloader details
 */
export const trackResumeDownload = (
  linkText: string = 'Resume',
  downloaderName: string = '',
  downloaderEmail: string = ''
): void => {
  const payload = {
    file_name: 'Vasudevan_R_Resume.pdf',
    link_text: linkText,
    downloader_name: downloaderName || 'Visitor',
    downloader_email: downloaderEmail || 'Not Provided',
    file_extension: 'pdf',
    link_url: '/resume.pdf',
  };

  // DevTools Console Log for verification
  console.log('[GA4 Event Triggered] resume_download:', payload);

  trackEvent('resume_download', payload);
  sendResumeEmailAlert(linkText, downloaderName, downloaderEmail);
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
