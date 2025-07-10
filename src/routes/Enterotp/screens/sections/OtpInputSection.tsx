import React from "react";

interface OtpInputSectionProps {
  otp?: string;
  setOtp?: (otp: string) => void;
}

export const OtpInputSection = ({ otp, setOtp }: OtpInputSectionProps = {}): JSX.Element => {
  // Phone number data that can be easily modified if needed
  const phoneNumber = "+91 9876543210";

  return (
    <div className="flex flex-col items-center w-full max-w-[327px] mx-auto font-sans text-inkdarkest text-center">
      <p className="text-base">
        Enter the 4-digit code that we have sent via the
        <br />
        phone number <span className="font-bold">{phoneNumber}</span>
      </p>
      
      {/* Hidden input to trigger numeric keyboard on mobile */}
      <input 
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        className="opacity-0 h-0 w-0 absolute"
        autoFocus
      />
    </div>
  );
};
