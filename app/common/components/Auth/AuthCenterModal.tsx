"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import AuthBrandingPanel from "./AuthBrandingPanel";
import SignInForm from "./screens/SignInForm";
import SignUpForm from "./screens/SignUpForm";
import VerificationScreen from "./screens/VerificationScreen";
import CreatePasswordScreen from "./screens/CreatePasswordScreen";
import { UserRegistrationPayload, SessionPipeline, AuthSelectionMethod, SessionWizardStep } from "./types";
import * as authApi from "./authApi";

interface AuthCenterModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialStep?: SessionWizardStep;
}

const INITIAL_REGISTRATION_DATA: UserRegistrationPayload = { name: "", phone: "", email: "" };
const INITIAL_DIGITS = ["", "", "", "", "", ""];

export default function AuthCenterModal({
  open,
  onClose,
  onSuccess,
  initialStep = "signin",
}: AuthCenterModalProps) {
  const [currentStep, setCurrentStep] = useState<SessionWizardStep>(initialStep);
  const [sessionPipeline, setSessionPipeline] = useState<SessionPipeline>("signup");
  const [selectionMethod, setSelectionMethod] = useState<AuthSelectionMethod>("phone");
  const [payload, setPayload] = useState<UserRegistrationPayload>(INITIAL_REGISTRATION_DATA);
  const [passwordField, setPasswordField] = useState("");
  const [verificationDigits, setVerificationDigits] = useState<string[]>(INITIAL_DIGITS);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isOtpError, setIsOtpError] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(false);

  const activeLogin = authApi.formatLoginInput(selectionMethod, payload);
  const activeLoginType = authApi.detectLoginMethod(selectionMethod);

  const resetModalState = useCallback(() => {
    setCurrentStep(initialStep);
    setSessionPipeline("signup");
    setSelectionMethod("phone");
    setPayload(INITIAL_REGISTRATION_DATA);
    setPasswordField("");
    setVerificationDigits(INITIAL_DIGITS);
    setErrorMessage(null);
    setIsOtpError(false);
    onClose();
  }, [onClose, initialStep]);

  useEffect(() => {
    if (open) {
      setCurrentStep(initialStep);
    }
  }, [open, initialStep]);

  useEffect(() => {
    if (!open) return;
    const catchEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetModalState();
      }
    };
    window.addEventListener("keydown", catchEscapeKey);
    return () => window.removeEventListener("keydown", catchEscapeKey);
  }, [open, resetModalState]);

  const navigateToStep = (nextStep: SessionWizardStep) => {
    setErrorMessage(null);
    setIsOtpError(false);
    setCurrentStep(nextStep);
  };

  const handleSignInSubmit = async () => {
    setErrorMessage(null);
    setIsApiLoading(true);
    try {
      const authResult = await authApi.authenticateUser(activeLogin, passwordField);
      authApi.persistSessionToken(authResult.accessToken);
      onSuccess();
      resetModalState();
    } catch (err) {
      setErrorMessage(authApi.parseAxiosExceptionMessage(err));
    } finally {
      setIsApiLoading(false);
    }
  };

  const handleSignUpSubmit = async () => {
    setErrorMessage(null);
    setIsApiLoading(true);
    try {
      await authApi.registerNewUser(payload.name.trim(), activeLogin, activeLoginType);
      setSessionPipeline("signup");
      setVerificationDigits(INITIAL_DIGITS);
      navigateToStep("verify");
    } catch (err) {
      setErrorMessage(authApi.parseAxiosExceptionMessage(err));
    } finally {
      setIsApiLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setErrorMessage(null);
    setIsApiLoading(true);
    try {
      await authApi.requestVerificationCodeResend(activeLogin, activeLoginType);
      setSessionPipeline("forgot");
      setVerificationDigits(INITIAL_DIGITS);
      navigateToStep("verify");
    } catch (err) {
      setErrorMessage(authApi.parseAxiosExceptionMessage(err));
    } finally {
      setIsApiLoading(false);
    }
  };

  const handleVerificationCodeSubmit = async () => {
    setErrorMessage(null);
    setIsOtpError(false);
    const codeString = verificationDigits.join("");
    if (codeString.length < 6) {
      setErrorMessage("Kodni to‘liq kiriting");
      return;
    }
    setIsApiLoading(true);
    try {
      await authApi.validateVerificationCode(activeLogin, codeString);
      navigateToStep("create-password");
    } catch (err) {
      setIsOtpError(true);
      setErrorMessage(authApi.parseAxiosExceptionMessage(err));
    } finally {
      setIsApiLoading(false);
    }
  };

  const resendOtpRequest = async (): Promise<boolean> => {
    setErrorMessage(null);
    try {
      await authApi.requestVerificationCodeResend(activeLogin, activeLoginType);
      return true;
    } catch (err) {
      setErrorMessage(authApi.parseAxiosExceptionMessage(err));
      return false;
    }
  };

  const handlePasswordSetupSubmit = async (passwordInput: string) => {
    setErrorMessage(null);
    setIsApiLoading(true);
    try {
      await authApi.defineUserPassword(activeLogin, verificationDigits.join(""), passwordInput);
      try {
        const authResult = await authApi.authenticateUser(activeLogin, passwordInput);
        authApi.persistSessionToken(authResult.accessToken);
        onSuccess();
      } catch {
        // Silent recovery
      }
      resetModalState();
    } catch (err) {
      setErrorMessage(authApi.parseAxiosExceptionMessage(err));
    } finally {
      setIsApiLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={resetModalState}
    >
      <div className="relative flex items-start" onClick={(e) => e.stopPropagation()}>
        <div className="w-[910px] h-[600px] rounded-xl bg-brand-surface border border-brand-border flex overflow-hidden shadow-2xl">
          <div className="w-[470px] h-full overflow-y-auto pb-8 scrollbar-thin">
            {currentStep === "signin" && (
              <SignInForm
                method={selectionMethod}
                onMethodChange={setSelectionMethod}
                draft={payload}
                onDraftChange={setPayload}
                passwordVal={passwordField}
                onPasswordChange={setPasswordField}
                onSubmit={handleSignInSubmit}
                onForgotPassword={handleForgotPassword}
                onSwitchToSignUp={() => navigateToStep("signup")}
                apiError={errorMessage}
                isLoading={isApiLoading}
              />
            )}
            {currentStep === "signup" && (
              <SignUpForm
                method={selectionMethod}
                onMethodChange={setSelectionMethod}
                draft={payload}
                onDraftChange={setPayload}
                onSubmit={handleSignUpSubmit}
                onSwitchToSignIn={() => navigateToStep("signin")}
                apiError={errorMessage}
                isLoading={isApiLoading}
              />
            )}
            {currentStep === "verify" && (
              <VerificationScreen
                flow={sessionPipeline}
                method={selectionMethod}
                destination={selectionMethod === "phone" ? payload.phone : payload.email}
                code={verificationDigits}
                onCodeChange={(nextCode) => {
                  setIsOtpError(false);
                  setVerificationDigits(nextCode);
                }}
                onBack={() => navigateToStep(sessionPipeline === "forgot" ? "signin" : "signup")}
                onEditDestination={() => navigateToStep(sessionPipeline === "forgot" ? "signin" : "signup")}
                onSubmit={handleVerificationCodeSubmit}
                onResend={resendOtpRequest}
                apiError={errorMessage}
                hasError={isOtpError}
                isLoading={isApiLoading}
              />
            )}
            {currentStep === "create-password" && (
              <CreatePasswordScreen
                flow={sessionPipeline}
                onBack={() => navigateToStep("verify")}
                onSubmit={handlePasswordSetupSubmit}
                apiError={errorMessage}
                isLoading={isApiLoading}
              />
            )}
          </div>
          <AuthBrandingPanel />
        </div>

        <button
          onClick={resetModalState}
          className="absolute top-1 left-[926px] w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center cursor-pointer hover:bg-brand-border transition-colors text-brand-text"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
