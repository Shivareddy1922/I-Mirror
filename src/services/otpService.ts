// OTP Service for Twilio Verify API integration

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

// ✅ Use relative path for Bolt.ai (no localhost!)
const API_BASE_URL = "";

export class OtpService {
  static async sendOtp(phone: string): Promise<SendOtpResponse> {
    try {
      console.log("Sending OTP to:", phone);

      const response = await fetch(`${API_BASE_URL}/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }

      return {
        success: true,
        message: data.message || "OTP sent successfully",
      };
    } catch (error) {
      console.error("Error sending OTP:", error);
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to send OTP. Check server availability.",
      };
    }
  }

  static async verifyOtp(phone: string, code: string): Promise<VerifyOtpResponse> {
    try {
      console.log("Verifying OTP for:", phone);

      const response = await fetch(`${API_BASE_URL}/check-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to verify OTP");
      }

      return {
        valid: data.valid || false,
        message: data.message,
      };
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return {
        valid: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to verify OTP. Check server availability.",
      };
    }
  }
}
