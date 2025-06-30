
import React, { useState } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { CookieBannerMain } from "./CookieBannerMain";
import { CookiePreferencesModal } from "./CookiePreferencesModal";

export const CookieBanner = () => {
  const [showPreferences, setShowPreferences] = useState(false);
  const { 
    showBanner, 
    preferences, 
    handleAcceptAll, 
    handleSavePreferences, 
    updatePreference 
  } = useCookieConsent();

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSaveAndClose = () => {
    handleSavePreferences();
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <CookieBannerMain 
        onAcceptAll={handleAcceptAll}
        onManagePreferences={handleManagePreferences}
      />
      
      <CookiePreferencesModal
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        preferences={preferences}
        onUpdatePreference={updatePreference}
        onSave={handleSaveAndClose}
      />
    </>
  );
};
