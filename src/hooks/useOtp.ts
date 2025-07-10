import { useState } from 'react';
import { OtpService } from '../services/otpService';

export interface UseOtpReturn {
  isLoading: boolean;
  error: string | null;
  success: string | null;
  sendOtp: (phone: string) => Promise<boolean>;
  verifyOtp: (phone: string, code: string) => Promise<boolean>;
  clearMessages: () => void;
}

export const useOtp = (): UseOtpReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  const sendOtp = async (phone: string): Promise<boolean> => {
    setIsLoading(true);
    clearMessages();

    try {
      const result = await OtpService.sendOtp(phone);
      
      if (result.success) {
        setSuccess('An OTP has been sent to your mobile number.');
        return true;
      } else {
        setError(result.error || 'Failed to send OTP');
        return false;
      }
    } catch (error) {
      setError('Network error. Please check your connection.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (phone: string, code: string): Promise<boolean> => {
    setIsLoading(true);
    clearMessages();

    try {
      const result = await OtpService.verifyOtp(phone, code);
      
      if (result.valid) {
        setSuccess('OTP Verified Successfully!');
        return true;
      } else {
        setError(result.error || 'Incorrect OTP. Please try again.');
        return false;
      }
    } catch (error) {
      setError('Network error. Please check your connection.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    success,
    sendOtp,
    verifyOtp,
    clearMessages,
  };
};