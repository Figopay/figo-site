
import { useState, useEffect } from "react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const useCookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('figo-cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('figo-cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    
    console.log('Todos os cookies aceitos:', allAccepted);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('figo-cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    
    console.log('Preferências salvas:', preferences);
  };

  const updatePreference = (type: keyof CookiePreferences, checked: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [type]: checked
    }));
  };

  return {
    showBanner,
    setShowBanner,
    preferences,
    handleAcceptAll,
    handleSavePreferences,
    updatePreference
  };
};
