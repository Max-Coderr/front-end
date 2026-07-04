"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { retrieveSessionToken, removeSessionToken, checkSessionExpiry } from "./authApi";
import AuthCenterModal from "./AuthCenterModal";

export default function AuthSessionGuard() {
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  useEffect(() => {
    const runSessionVerification = () => {
      const activeToken = retrieveSessionToken();
      if (activeToken && checkSessionExpiry(activeToken)) {
        removeSessionToken();
        setIsAuthModalVisible(true);
      }
    };

    runSessionVerification();

    const checkInterval = setInterval(runSessionVerification, 60_000);

    const apiInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err.response?.status === 401) {
          removeSessionToken();
          setIsAuthModalVisible(true);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      clearInterval(checkInterval);
      axios.interceptors.response.eject(apiInterceptor);
    };
  }, []);

  return (
    <AuthCenterModal
      open={isAuthModalVisible}
      onClose={() => setIsAuthModalVisible(false)}
      onSuccess={() => {
        setIsAuthModalVisible(false);
        window.location.reload();
      }}
    />
  );
}
