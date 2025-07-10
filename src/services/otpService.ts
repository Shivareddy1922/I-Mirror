// OTP Service for backend API integration
export interface SendOtpRequest {
  phone: string;
}

export interface SendOtpResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface VerifyOtpRequest {
  phone: string;
  code: string;
}

export interface VerifyOtpResponse {
  valid: boolean;
  message?: string;
  error?: string;
}

// Get API base URL from environment or use relative path for same domain
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export class OtpService {
  static async sendOtp(phone: string): Promise<SendOtpResponse> {
    try {
      console.log('Attempting to send OTP to:', phone);
      console.log('Using API Base URL:', API_BASE_URL);
      
      const response = await fetch(`${API_BASE_URL}/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      // Handle non-JSON responses (like 404 or server errors)
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      return {
        success: true,
        message: data.message || 'OTP sent successfully to your phone number',
      };
    } catch (error) {
      console.error('Error sending OTP:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to send OTP. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Unable to connect to server. Please check your internet connection.';
        } else if (error.message.includes('404')) {
          errorMessage = 'OTP service not available. Please contact support.';
        } else if (error.message.includes('500')) {
          errorMessage = 'Server error. Please try again later.';
        } else {
          errorMessage = error.message;
        }
      }

      return {
        success: false,
        error: errorMessage,
      };
    }
  }

  static async verifyOtp(phone: string, code: string): Promise<VerifyOtpResponse> {
    try {
      console.log('Attempting to verify OTP for:', phone);
      console.log('Using API Base URL:', API_BASE_URL);
      
      const response = await fetch(`${API_BASE_URL}/check-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, code }),
      });

      // Handle non-JSON responses
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      return {
        valid: data.valid === true,
        message: data.message || (data.valid ? 'OTP verified successfully!' : 'Invalid OTP'),
      };
    } catch (error) {
      console.error('Error verifying OTP:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to verify OTP. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Unable to connect to server. Please check your internet connection.';
        } else if (error.message.includes('404')) {
          errorMessage = 'OTP verification service not available. Please contact support.';
        } else if (error.message.includes('500')) {
          errorMessage = 'Server error. Please try again later.';
        } else {
          errorMessage = error.message;
        }
      }

      return {
        valid: false,
        error: errorMessage,
      };
    }
  }
}