import React from "react";

interface OtpInputSectionProps {
  phoneNumber?: string;
}

export const OtpInputSection = ({ phoneNumber = "" }: OtpInputSectionProps): JSX.Element => {
  // Format phone number for display
  const formatPhoneNumber = (phone: string) => {
    if (!phone) return "+91 XXXXXXXXXX";
    
    // Extract country code and number
    const match = phone.match(/^(\+\d{1,3})(\d+)$/);
    if (match) {
      const [, countryCode, number] = match;
      // Format as +XX XXXXXXXXXX
      return `${countryCode} ${number}`;
    }
    return phone;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[327px] mx-auto font-sans text-inkdarkest text-center">
      <p className="text-base">
        Enter the 6-digit code that we have sent via the
        <br />
        phone number <span className="font-bold">{formatPhoneNumber(phoneNumber)}</span>
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
