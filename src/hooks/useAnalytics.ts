import { useCallback } from 'react';

export function useAnalytics() {
  const trackEvent = useCallback(async (event: string) => {
    // Analytics disabled in pure frontend mode
    console.log('Analytics event:', event);
  }, []);

  return { trackEvent };
}
